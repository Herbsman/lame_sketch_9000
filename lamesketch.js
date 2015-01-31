

//Appends the divs as soon as the document is loaded (ready)
function init(divNum){
	$(document).ready(function(){
		if(divNum === undefined || divNum === null){  //sets the grid dimensions to 40 if the variable is empty.
			divNum = 10;
		}

		//Variables 
		grid = Math.pow(divNum, 2);		//given number = number of rows and collumns to conjure up.
		$contHeight = $("#contentWrapper").height();	//grabs the wrapper's height (the bare value, no units) + stores it
		$contWidth = $("#contentWrapper").width();		//same as above, but for width
		divHeight = $contHeight / divNum;		//divides the wrapper's height by # of divs - this will be the div height.
		divWidth = $contWidth / divNum;			//same as above, but for width


		//functions

		gridSetup();

		//button actions

		$(document).on("click", "#buttonRedo", function(){
			gridNew();
		});

		$(document).on("click", "#buttonWipe", function(){
			gridWipe();
		});

	});
};

function gridSetup(){		//this one sets up the grid

sktchDiv = ".sketchDivs"; 	// I define this out of the loop, so the stored element isn't looked up each time (faster execution).

for(i = 0; i < grid; i++){
		$("#contentWrapper").append("<div class='sketchDivs'></div>");
	};
		$(sktchDiv).css("height", divHeight);
		$(sktchDiv).css("width", divWidth);
	$(sktchDiv).hover(function(){
		$(this).css("opacity", "+=0.2");
	});
}

function gridNew(){			//wipes the grid, asks for input, then calls init() to set up new grid dimensions.
	$(".sketchDivs").remove();
	gridDim = prompt("Enter a number for the grid's dimensions.");
	init(gridDim);
	console.log("I was exectued fully!");
}

function gridWipe(){		//Wipes grid, restores initial class settings.
	$(".sketchDivs").css("opacity", "0");	//Should make this work across the different modes that I plan to implement.
}							//Right now, it just works for the default mode.



init();