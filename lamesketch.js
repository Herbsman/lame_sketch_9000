
//Appends the divs as soon as the document is loaded (ready)
function init(divNum){
	$(document).ready(function(){
		if(divNum === undefined || divNum === null){  //sets the grid dimensions to the default if the variable is empty.
			divNum = 10; //the
		}

		//Variables 
		grid = Math.pow(divNum, 2);		//given number = number of rows and collumns to conjure up.
		divHeight = $("#contentWrapper").height() / divNum;		//divides the wrapper's height by # of divs - this will be the div height.
		divWidth = $("#contentWrapper").width() / divNum;			//same as above, but for width

		//functions

		gridSetup();

		$("p").html("Select a mode!")



		//different modes
		$(document).on("click", "#defMode", function(){  //random color mode engaged when proper button is clicked
			defaultMode();
			$("p").html("Get drawing!");
		});

		$(document).on("click", "#rndmColor", function(){  //random color mode engaged when proper button is clicked
			randomColor();
			$("p").html("Get drawing!");
		});

		//button actions

		$(document).on("click", "#buttonRedo", function(){
			gridNew();
			$("p").html("Select a mode!")
		});

		$(document).on("click", "#buttonWipe", function(){
			gridWipe();
			$("p").html("Select a mode!")
		});

	});
};

//this one sets up the grid
function gridSetup(){

sktchDivs = ".sketchDivs"; 	// I define this out of the loop, so the stored element isn't looked up each time (faster execution).

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

//Wipes grid, restores initial div class opacity.

function gridWipe(){
	$(".sketchDivs").css("opacity", "0");	//Should make this work across the different modes that I plan to implement.
	$(".sketchDivs").css("background-color", "transparent");
}							//Right now, it just works for the default mode.


//mode functions

function defaultMode(){		//the default mode
	$(sktchDivs).css("opacity", "0");
	$(sktchDivs).hover(function(){
		$(this).css("opacity", "+=0.2");
		$(this).css("background-color", "black");
	});
}

function randomColor(){		//random colors mode
	gridWipe();
	function randomizer(){  	//returns a number between 0 and 255 (for rgb values)
		rndm = Math.floor(Math.random() * 255);
		rndmA = Math.random()+0.3; // ensures the number the alpha will be at least 0.3
		return rndm;
	}
	$(sktchDivs).css("opacity", "1");
	$(sktchDivs).hover(function(){	// color is RGBa (Red, Green, Blue, alpha)
		randomColorRgb = "rgb("+randomizer()+","+randomizer()+","+randomizer()+","+rndmA+")"; //Applies the randomizer to each of the RGB values
		$(this).css("background-color", randomColorRgb);
	});
}


init();