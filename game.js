"use strict";
const board = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

let x = 0;
let y = 0; // Start at A (0,0) -> [row][col]
const xMax = board.length - 1;
const yMax = board[0].length - 1;
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

//Bonus Task:

//Create functions to complete the provided code. (file: game-fn.js)

function hitLimitLog(moving) {
  console.log(`You have reached the limit of ${moving}.`);
}

function moveRight() {
  y < yMax ? moves.push(board[x][++y]) : hitLimitLog("moving right");
}

function moveLeft() {
  y > 0 ? moves.push(board[x][--y]) : hitLimitLog("moving left");
}

function moveUp() {
  x > 0 ? moves.push(board[--x][y]) : hitLimitLog("moving up");
}

function moveDown() {
  x < xMax ? moves.push(board[++x][y]) : hitLimitLog("moving down");
}

moveRight(); // Move from E to F
moveRight(); // Move from F to hit the limit right
moveDown(); // Move from F to I
moveLeft(); // Move from I to H

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
