 function block()
 {
	$("a.read").each( function(){
	var x = this.outerHTML;
	var i1 = x.indexOf("data-confirm");
	if( i1 !== -1 )
	{
	var s1 = x.substring(0,i1);
	var s2 = x.substring(i1+6);
	this.outerHTML= s1+s2;
	}
	});
 }
function DOMModifiedHandler(){
  $(this).unbind('DOMSubtreeModified');
    setTimeout(function(){
        block();
        $('#main').bind('DOMSubtreeModified',DOMModifiedHandler);
    },1000);
}

$('#main').bind('DOMSubtreeModified',DOMModifiedHandler);
block();
