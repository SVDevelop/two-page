$(document).ready(
	function() {
		$('header nav > ul').mousemove(function(event){
			var pos = event.pageX;
			var relativeX = Math.floor(event.pageX - 5 - $(this).offset().left);
			$('header nav > ul .decor-cursor').css({"left" : relativeX});
			// if(Math.abs(relativeX - $('header nav > ul .decor-cursor').position().left) > 50) {
			// 	$('header nav > ul .decor-cursor').animate({"left" : relativeX},400);
			// } else {
			// 	$('header nav > ul .decor-cursor').css({"left" : relativeX});
			// }
			
		});

	function positionAcriveDecorCursor(){
		if($('header nav > ul > li.active').length > 0) {
			$('header nav > ul .decor-cursor').css("display","block");
			$('header nav > ul .decor-cursor').animate({"left" : $('header nav > ul > li.active').position().left+$('header nav > ul > li.active').width()/2+"px"},400);
		}
	}
	$('header nav > ul').mouseleave(function(){
		positionAcriveDecorCursor()
	});
	positionAcriveDecorCursor();
	
});