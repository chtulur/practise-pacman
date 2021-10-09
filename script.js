const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById(".score");
const width = 28; // 28*28 = 784 squares
const layout = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
	1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
	1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 0, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 4, 4, 4, 4,
	4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 0, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 2, 2, 1, 1, 1, 1, 2, 2, 4, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1,
];

//Legend
//0 - pac-dot
//1 - wall
//2 - ghost-lair
//3 - power-pellet
//4 - empty

const squares = [];

//draw grid and render it
function createBoard() {
	for (let i = 0; i < layout.length; i++) {
		const square = document.createElement("div");
		grid.appendChild(square);
		squares.push(square);

		//add layout
		if (layout[i] === 0) {
			squares[i].classList.add("pac-dot");
		} else if (layout[i] === 1) {
			squares[i].classList.add("wall");
		} else if (layout[i] === 2) {
			squares[i].classList.add("ghost-lair");
		} else if (layout[i] === 3) {
			squares[i].classList.add("power-pellet");
		} else if (layout[i] === 4) {
			squares[i].classList.add("empty");
		}
	}
}
createBoard();

//pac-man starting position
let pacmanCurrentIndex = 489;
squares[pacmanCurrentIndex].classList.add("pac-man");
let counter = 0;

//move pac-man
function movePacman(e) {
	squares[pacmanCurrentIndex].classList.remove("pac-man");
	squares[pacmanCurrentIndex].classList.add("empty");

	switch (e.code) {
		case "KeyA":
		case "ArrowLeft":
			pacmanCurrentIndex -= 1;
			counter = -1;
			//Check for going to the other side
			if (pacmanCurrentIndex == 363) {
				pacmanCurrentIndex = 391;
				//Check for collision
			} else checkCollision(counter);
			break;
		case "KeyD":
		case "ArrowRight":
			pacmanCurrentIndex += 1;
			counter = 1;
			//Check for going to the other side
			if (pacmanCurrentIndex == 392) {
				pacmanCurrentIndex = 364;
				//Check for collision
			} else checkCollision(counter);
			break;
		case "KeyW":
		case "ArrowUp":
			pacmanCurrentIndex -= width;
			counter = -width;
			checkCollision(counter);
			break;
		case "KeyS":
		case "ArrowDown":
			pacmanCurrentIndex += width;
			counter = width;
			checkCollision(counter);
			break;
	}
	squares[pacmanCurrentIndex].classList.add("pac-man");
	nomNom();
	winGame();
	loseGame();
}
//PowerUP
function powerUp() {}

//Collision detection
function checkCollision(counter) {
	if (
		squares[pacmanCurrentIndex].classList.contains("wall") ||
		squares[pacmanCurrentIndex].classList.contains("ghost-lair")
	) {
		pacmanCurrentIndex -= counter;
		squares[pacmanCurrentIndex].classList.remove("empty");
	}
}

window.addEventListener("keydown", movePacman);

//PACDOT AND POWER PELLET CONSUMTION
function nomNom() {
	// //CHECK FOR MULTIPLIER RESET!
	if (squares[pacmanCurrentIndex].classList.contains("empty")) {
		multiplierCount = -1;
	}

	//REMOVE POWER PELLET
	if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
		squares[pacmanCurrentIndex].classList.remove("power-pellet");
		pointTallyForPP();
	}

	//REMOVE PACDOT
	else if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
		squares[pacmanCurrentIndex].classList.remove("pac-dot");

		//UPDATE SCOREBOARD
		multiplierCount++;
		pointTally();
	}
}

//SCOREBOARD
let multiplierCount = -1;
let writtenScore = 0;
let epicScore = document.querySelector("#score");

function pointTally() {
	writtenScore += 100;
	if (multiplierCount > 0) {
		writtenScore += 100 * (multiplierCount * 0.5);
	}
	epicScore.innerHTML = writtenScore;
}

function pointTallyForPP() {
	writtenScore += 1000;
	if (multiplierCount > 0) {
		writtenScore += 1000 * (multiplierCount * 0.5);
	}
	epicScore.innerHTML = writtenScore;
}

//Points for eaten ghosts
function pointTallyForGhost() {
	writtenScore += 50000;
	if (multiplierCount > 0) {
		writtenScore += 1000 * (multiplierCount * 0.5);
	}
	epicScore.innerHTML = writtenScore;
}

//GHOSTS TEMPLATE
class Ghost {
	constructor(className, startIndex, speed) {
		this.className = className;
		this.startIndex = startIndex;
		this.speed = speed;
		this.currentIndex = startIndex;
		this.timerId = NaN;
	}
}
//Adding ghost parameters
let ghosts = [
	new Ghost("blinky", 348, 250),
	new Ghost("pinky", 376, 400),
	new Ghost("inky", 351, 300),
	new Ghost("clyde", 379, 500),
];
//DRAW GHOSTS
ghosts.forEach((ghost) => {
	squares[ghost.currentIndex].classList.add(ghost.className);
	squares[ghost.currentIndex].classList.add("ghost");
});
//Direction for ghosts
let ghostMoveDirectionArray = [1, -1, 28, -28];
let interval = [];
//SET INTERVAL FOR GHOSTS
ghosts.forEach((ghost) => {
	interval.push(setInterval(() => moveGhosts(ghost), ghost.speed));
});

function moveGhosts(ghost) {
	//Disapyr
	squares[ghost.currentIndex].classList.remove("ghost");
	squares[ghost.currentIndex].classList.remove(ghost.className);
	let moveThere = ghostMoveDirectionArray[Math.floor(Math.random() * 4)];

	//Check for other side jump
	if (moveThere === -1 && ghost.currentIndex === 364) {
		ghost.currentIndex = 391;
	} else if (moveThere === 1 && ghost.currentIndex === 391) {
		ghost.currentIndex = 364;
	}
	//MOVE
	ghost.currentIndex += moveThere;
	//collision
	if (
		squares[ghost.currentIndex].classList.contains("wall") ||
		squares[ghost.currentIndex].classList.contains("ghost")
	) {
		ghost.currentIndex -= moveThere;
		moveGhosts(ghost);
	}
	{
		//Apyr Again
		squares[ghost.currentIndex].classList.add("ghost");
		squares[ghost.currentIndex].classList.add(ghost.className);
	}
	//Check for lose
	loseGame();
	//check for win
	winGame();
}

//if you win
function winGame() {
	const victory = squares.every(
		(square) =>
			!square.classList.contains("pac-dot") &&
			!square.classList.contains("power-pellet")
	);
	if (victory) {
		document.querySelector("#endGameText").classList.add("show");
		stopGame();
	}
}
//if you lose
function loseGame() {
	const lose = squares.some(
		(square) =>
			square.classList.contains("pac-man") && square.classList.contains("ghost")
	);

	if (lose) {
		document.querySelector("#lose-screen-text").classList.add("show");
		stopGame();
	}
}
//Stop game on End
function stopGame() {
	document.querySelector("#endGameScreen").classList.add("show");
	interval.forEach((ghostInterval) => {
		clearInterval(ghostInterval);
	});
	window.removeEventListener("keydown", movePacman);
	highScore();
}
