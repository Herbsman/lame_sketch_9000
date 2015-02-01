# lame_sketch_9000
Playing with JS/JQuery, assignment from The Odin Project (Web Development 101)!


The app is buggy, but it's my first and it was great getting it to where it is. Went quite well, and excepting a few bugs, I'm happy with it. I did it without peeking at other people's solutions, though I'm sure my code is not optimal, bloated. I hope to evolve on that aspect as I learn more.


*****************

The app has 4 modes:

The default mode - Div's color black when they're hovered over. Nothing mind blowing.

The random color mode - The div's opacity is set to 1, and the div's are randomly colored on hover. This one was fun to do. Created a function that returns a random number from 0 to 255, and used on each of the RGB values to generate random colors.

The opacity mode - The div's opacity is initally set to 0. Each pass of the mouse adds 0.2 to the opacity. This mode requires the user to completely reset the grid to prevent a bug that I haven't quite yet figured out the solution to. Still have to figure out how to make the grid reset after leaving the mode.

Trail mode - A trail of color follows the mouse. Due to the nature of this mode, complete grid reset is required before usage.

*****************

In the future would be ideal if I could:

- Add ustom color selecting,
- Add a function that makes it possible to pause a mode (i.e stop drawing while hovering), or maybe have drawing only happen when left mouse button is held down. 
- Add options for grid aspect ratios (4:3...),
- Add a save function that either
	+saves the drawing on the server, gives the user a code they can use to load it another time,
	or
	+spits out the image in a .jpg or .png format.
- Remove some redundant checking and grid-wiping.

In reality, I doubt I'll work on it much longer, but it was fun.

******************


Notes:

##Tried to kill runing functions (the ones that execute the div styling when hovering over them), to prevent mode-mixing, but I failed. Will find a way.
##Most likely I understand far too little of how Javascript and Jquery + UI work and am simply blind to the solution. Oh, well. Some other day.

##While working out bugs, found out that the Trail mode and Random mode make for a happy accidental mix :)
