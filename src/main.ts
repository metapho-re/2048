import { generateGrid } from "./generateGrid";
import { keyboardEventListener } from "./keyboardEventListener";
import { bodyElement, buttonElement } from "./queries";
import { startGame } from "./startGame";
import "./style.css";

generateGrid();

bodyElement.addEventListener("keydown", keyboardEventListener);
buttonElement.addEventListener("click", startGame);

startGame();
