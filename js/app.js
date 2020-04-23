/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnReset = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

game = new Game();
btnReset.addEventListener("click", event => game.startGame());
keyboard.addEventListener("click", event => game.handleInteraction(event));
document.addEventListener("keyup", event => game.handleInteraction(event));
