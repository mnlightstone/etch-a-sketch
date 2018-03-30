 

// get Div size based on computer screen	
	var bigContainer = document.getElementById("bigContainer");
	bigContainer.innerHTML = "";
	var bigContainerHeight = bigContainer.clientHeight
	var bigContainerWidth = bigContainer.clientWidth

//places original grid of 16x16
	var userInput = 16
	placeSquares()

//Reset button	
	var resetButton = document.getElementById("reset");
		resetButton.addEventListener("click", () => {
			var allDivs = document.getElementsByClassName("emptyDiv");
			for (i = 0; i < allDivs.length; i++){
				allDivs[i].style.backgroundColor = "white";
		}
	});

//New Grid Button
	var newGridButton = document.getElementById("newGrid");
	newGridButton.addEventListener("click", () => {
	userInput = prompt("Set a height and width for a new grid","");
	bigContainer.innerHTML = "";
	placeSquares ()
	});

	
// make Div
	function placeSquares (){
		var totalSquares = userInput * userInput
		var divHeight = bigContainerHeight / userInput - 2 
		var divWidth = bigContainerWidth / userInput- 2
		
			for (i=0; i < totalSquares; i++){
				var smallDiv = document.createElement("div");
				smallDiv.setAttribute("class","emptyDiv");
				smallDiv.style.height = divHeight;
				smallDiv.style.width = divWidth;
				smallDiv.style.border = "1px solid black";
				smallDiv.addEventListener("mouseover", changeColor);
					//adds event listener to each div box
				bigContainer.append(smallDiv);	
	}
	}

	
	// function penType() {
		// if (document.getElementById('penTypeColor').checked) {
			// console.log("TRUE")
			// style.backgroundColor = 'black'
		// }
	// }
	
	// penType()
	
	function changeColor(e){
	if (document.getElementById('penTypeColor').checked) {
		x = Math.floor(Math.random()*256)
		y = Math.floor(Math.random()*256)
		z = Math.floor(Math.random()*256)
		e.target.style.backgroundColor = "rgb(" + x + ", " + y + ", " + z + ")";
	}
	else {e.target.style.backgroundColor = "black"}}



