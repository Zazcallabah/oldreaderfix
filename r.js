 function hide()
 {
	$("li.sort-item > a > span.hidden").each( function(){
	$("#"+this.parentNode.parentNode.id).hide();
	});
 }
function DOMModifiedHandler(){
  $(this).unbind('DOMSubtreeModified');
    setTimeout(function(){
        hide();
        $('#sidebar').bind('DOMSubtreeModified',DOMModifiedHandler);
    },1000);
}

$('#sidebar').bind('DOMSubtreeModified',DOMModifiedHandler);
hide();
