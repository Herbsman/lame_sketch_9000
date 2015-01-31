//Appends the divs as soon as the document is loaded (ready)
$(document).ready(function(){
	var	divNum = 60;
	var grid = Math.pow(divNum, 2);		//given number = number of rows and collumns to conjure up.
	var $contHeight = $("#contentWrapper").height();	//grabs the wrapper's height (the bare value, no units) + stores it
	var $contWidth = $("#contentWrapper").width();		//same as above, but for width
	var divHeight = $contHeight / divNum;		//divides the wrapper's height by # of divs - this will be the div height.
	var divWidth = $contWidth / divNum;			//same as above, but for width
	for(i = 0; i < grid; i++){
		$("#contentWrapper").append("<div class='sketchDivs'></div>");
	};
		$(".sketchDivs").css("height", divHeight);
		$(".sketchDivs").css("width", divWidth);
	$(".sketchDivs").hover(function(){
		$(this).css("opacity", "-=0.2");
	});
	$(document).on("click", "")
});






