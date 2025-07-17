"use strict";

const board = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

let x = 0;
let y = 0;
const moves = [];
moves.push(board[x][y]); // Start at A

// Define movement functions
tart at A (0,0) -> [row][col]
const moves = [];
moves.push(board[x][y]); // A
// Move Right to B
y++;
moves.push(board[x][y]); // B
// Move Right to C
y++;
moves.push(board[x][y]);
// Move Down to F
x++;
moves.push(board[x][y]);
// Move left to E
y--;
moves.push(board[x][y]);
console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);

("use strict");
const board = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
let x = 0;
let y = 0;
const xMax = board.length - 1;
const yMax = board[0].length - 1;
const moves = [];
moves.push(board[x][y]); // Start at A

// Define movement functions by K'Prem
function moveRight() {
  y < yMax ? moves.push(board[x][++y]) : limitLog("moving right");
}
function moveLeft() {
  y > 0 ? moves.push(board[x][--y]) : limitLog("moving left");
}
function moveUp() {
  x > 0 ? moves.push(board[--x][y]) : limitLog("moving up");
}

function moveDown() {
  x < xMax ? moves.push(board[++x][y]) : limitLog("moving down");
}

function limitLog(moving) {
  console.log(`You have reached the limit of ${moving}.`);
}
// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
