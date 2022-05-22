import { Board } from "./Board";
import { Collors } from "./Collors";
import { Figure } from "./figures/Figure";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Collors;
    figure: Figure | null;
    board: Board;
    available: boolean; //can move
    id: number;

    constructor(board:Board, x: number, y: number,color: Collors,figure: Figure|null){
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = Figure;
        this.available = false;
        this.id = Math.random();
    }
}