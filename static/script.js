
$(document).ready(function(){

	$(".todoList").sortable({
		axis		: 'y',				
		containment	: 'window',			
		update		: function(){		

		},
		
		/* Opera fix: */
		
		stop: function(e,ui) {
			ui.item.css({'top':'0','left':'0'});
		}
	});
	
	
	
}); 

$('#additem').keypress(function(event)
	{
 	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
	
	bla = $('#additem').val();
	bla=$.trim(bla);
	if(bla!=''&& bla!=' ')
	{
		
	var todolistfirstpart='<li id="todo" class="todo"> <div class="text">';
	todolistfirstpart=todolistfirstpart.concat(bla);
	todolistfirstpart=todolistfirstpart.concat('</div> <a href="#" title="Delete" class="itemDelete"></a></li>');

	
	$("#todolistitems").append(todolistfirstpart);
		
	$.ajax({ type: "POST", 
	url: "insert", 
	data: {additem:bla}
	});
	
	$('#additem').val('');
	
	count2 = $("#todolistitems").children().length;
	$('#todoitemscount').text(count2);
	
	}
}
	event.stopPropagation();
});



$('#button').toggle(
function() {
    $('#sidebar').animate({width:'0%'},400);
    $('#maincontent').animate({width:'100%'},700);
}, function() {
    $('#maincontent').animate({width:'70%'});
    $('#sidebar').animate({width:'30%'});
});


$('.itemDelete').live('click', function() {
    blastr = $(this).closest('li').text().trim();
    //alert(blastr);
    $.ajax({ type: "POST", 
	url: "deletedoc", 
	data: {deletetodo:blastr}
	});
     
    $(this).closest('li').remove();
    
    count2 = $("#todolistitems").children().length;
	$('#todoitemscount').text(count2);
	
});



count2 = $("#todolistitems").children().length;
$('#todoitemscount').text(count2);

