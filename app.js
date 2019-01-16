var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cons = require('consolidate'),
	dust = require('dustjs-helpers'),
	pg = require('pg'),
	app = express();
	currentusername ="user1"
const { Pool, Client } = require('pg')

const pool = new Pool({
  connectionString: connectionString,
})

// DB Connect String 
var connectionString = "postgres://myRole:admin@localhost/diagramdb";
const client = new Client({
  connectionString: connectionString,
})
// Assign dust 
app.engine('dust', cons.dust);

// Set default exy
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser muddleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.post('/add',function(req,res){
	client.connect()
	client.query('INSERT INTO diagrams(diagram, username, diagramname) VALUES($1,$2,$3)' ,[req.body.diagram, currentusername, req.body.diagramname]);
  	res.redirect('/');
	}); 

app.post('/edit',function(req,res){
	client.query('UPDATE diagrams SET diagram=$1, username=$2, diagramname=$3 WHERE id=$4' ,[req.body.diagram, currentusername, req.body.diagramname, req.body.id ]);
  	res.redirect('/');
	}); 


app.get('/',function(req,res){
	client.connect()
	client.query('SELECT * FROM diagrams WHERE username = $1' ,[currentusername], function(err, result){
  	res.render('index',{diagrams: result.rows});  
	}); 

});

app.delete('/delete/:id', function(req,res){
	client.query('DELETE FROM diagrams WHERE id = $1',
	[req.params.id]);
	res.send(200);

});


//SERVER 
app.listen(3000,function(){
	console.log('SERVER started on port 3000');
});