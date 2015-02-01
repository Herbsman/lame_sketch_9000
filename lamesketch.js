
//Appends the divs as soon as the document is loaded (ready)
function init(divNum){
	$(document).ready(function(){
		if(divNum === undefined || divNum === null){  //sets the grid dimensions to the default if the variable is empty.
			divNum = 27; //the
		}

		//Variables 
		grid = Math.pow(divNum, 2);		//given number = number of rows and collumns to conjure up.
		divHeight = $("#contentWrapper").height() / divNum;		//divides the wrapper's height by # of divs - this will be the div height.
		divWidth = $("#contentWrapper").width() / divNum;			//same as above, but for width

		//Initial grid setup and default mode initialized
		gridSetup();
		defaultMode();


		//Modes
		$(document).on("click", "#defMode", function(){  //random color mode engaged when proper button is clicked
			defaultMode();
			$("p").html("Default mode engaged. Can you draw a duck?");
		});

		$(document).on("click", "#rndmColor", function(){  //random color mode engaged when proper button is clicked
			randomColor();
			$("p").html("Random color mode engaged. What's your favorite thing?");
		});

		$(document).on("click", "#opacityMode", function(){	//To avoid bugs across modes, this function requires the
															//user to completely reset the grid before using this mode
			con = confirm("Grid has to reset to use this mode. Continue?")
			if (con == true){
				console.log("condition passed, code should be executing");
				gridNew();
				opacityMode();
			}	
		});

		$(document).on("click", "#trailMode", function(){
			con = confirm("Grid has to reset to use this mode. Continue?");

			if(con == true){
				gridNew();
				trailMode();
			}
		});

		//Grid actions

		$(document).on("click", "#buttonRedo", function(){
			gridNew();
			$("p").html("Grid was rebuilt. Pick a mode and start drawing.")
		});

		$(document).on("click", "#buttonWipe", function(){
			gridWipe();
			$("p").html("Grid was wiped. You may draw on.")
		});

	});
};

//this one sets up the grid
function gridSetup(){

sktchDivs = ".sketchDivs"; 	// I define this out of the loop, so the stored
							// element isn't looked up on each iteration (faster execution).

for(i = 0; i < grid; i++){
		$("#contentWrapper").append("<div class='sketchDivs'></div>");
	};
		$(sktchDivs).css("height", divHeight);
		$(sktchDivs).css("width", divWidth);
}


//wipes the grid, asks for input, then calls init() to set up new grid dimensions.
function gridNew(){
	$(".sketchDivs").remove();
	gridDim = prompt("Enter a number for the grid's dimensions.\n(Higher numbers (n > 100) might take a while!)\n");
	init(gridDim);
}

//Wipes grid, restores the div's background to transparent.
function gridWipe(){
	//Should make this work across the different modes that I plan to implement.
	$(".sketchDivs").css("background-color", "transparent");
}


//Mode functions

function defaultMode(){		//the default mode
	$(sktchDivs).hover(function(){
		$(this).css("background-color", "black");
	});
}

function randomColor(){		//random colors mode
	function randomizer(){  	//returns a number between 0 and 255 (for rgb values)
		rndm = Math.floor(Math.random() * 255);
		return rndm;
	}
	$(sktchDivs).css("opacity", "1");
	$(sktchDivs).hover(function(){	// color is RGB
		randomColorRgb = "rgb("+randomizer()+","+randomizer()+","+randomizer()+")"; //Applies the randomizer to each RGB value
		$(this).css("background-color", randomColorRgb);
	});
}

function opacityMode(){		//opacity mode. Have to completely reset the grid to use this mode.
	$(sktchDivs).css("opacity", "0");
	$(sktchDivs).hover(function(){
		$(this).css("opacity", "+=0.2");
		$(this).css("background-color", "black");
	});
}

function trailMode(){		//trail mode. Completely reset grid to use.
	$(sktchDivs).hover(function(){
		$(this).css("background-color", "black");
	},function(){
		$(this).animate({"background-color":"transparent"},500);
	});
}

init();