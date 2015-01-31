//Appends the divs as soon as the document is loaded (ready)
function init(divNum){
	$(document).ready(function(){
		if(divNum === undefined || divNum === null){  //sets the grid dimensions to 40 if the variable is empty.
			divNum = 40;
		}
		grid = Math.pow(divNum, 2);		//given number = number of rows and collumns to conjure up.
		$contHeight = $("#contentWrapper").height();	//grabs the wrapper's height (the bare value, no units) + stores it
		$contWidth = $("#contentWrapper").width();		//same as above, but for width
		divHeight = $contHeight / divNum;		//divides the wrapper's height by # of divs - this will be the div height.
		divWidth = $contWidth / divNum;			//same as above, but for width

		//functions

		gridSetup();

		$(document).on("click", "#buttonClear", function(){
			gridWipe();
		});
	});
};

function gridSetup(){		//this one sets up the grid

for(i = 0; i < grid; i++){
		$("#contentWrapper").append("<div class='sketchDivs'></div>");
	};
		$(".sketchDivs").css("height", divHeight);
		$(".sketchDivs").css("width", divWidth);
	$(".sketchDivs").hover(function(){
		$(this).css("opacity", "+=0.2");
	});
}

function gridWipe(){		//wipes the grid, asks for input, then calls init()
	$(".sketchDivs").remove();
	gridDim = prompt("Enter a number for the grid's dimensions.");
	init(gridDim);
	console.log("I was exectued fully!");
}



init();