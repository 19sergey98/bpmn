$(document).ready(function(){
 	$('.delete-diagram').on('click',function(){
 		var id = $(this).data('id');
 		var url = '/delete/'+id;
 		
 		if(confirm('delete diagram?')){
 		
 		$.ajax({
 			url: url,
 			type: 'DELETE',
 			success: function(result){
 				console.log('deleting...');
 				window.location.href='/';
 			},
 			error: function(err){
 				console.log(err);
 			} 	
 		});	
 		}
	});

	$('.edit-diagram').on('click',function(){
		$('#edit-form-id').val($(this).data('id'));
		$('#edit-form-diagram').val($(this).data('diagram'));
		$('#edit-form-diagramname').val($(this).data('diagramname'));
	})
});