import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { King,Queen,Knight,Rock, Pawn,Bishop } from "./figures/index";


export class Board {
    cells: Cell[][] = []

    public initChells() {
        for (let i = 0; i < 8; i++) {//y
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {//x
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null));//b
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null));//w
                }
            }
            this.cells.push(row);
        }
    }

    public getCopyBoard():Board{
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }

    public getCell(x: number,y: number){
        return this.cells[y][x];
    }

    public highlightCells(selectedCell:Cell | null){
        for(let i = 0; i< this.cells.length;i++){
            const row = this.cells[i];
            for(let j =0; j < row.length; j++){
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target);
            }
        }
    }

    private addKings(){
        new King(Colors.BLACK,this.getCell(4,0));
        new King(Colors.WHITE,this.getCell(4,7));
    }

    private addQueens(){
        new Queen(Colors.BLACK,this.getCell(3,0));
        new Queen(Colors.WHITE,this.getCell(3,7));
    }

    private addKnights(){
        new Knight(Colors.BLACK,this.getCell(1,0));
        new Knight(Colors.BLACK,this.getCell(6,0));
        new Knight(Colors.WHITE,this.getCell(1,7));
        new Knight(Colors.WHITE,this.getCell(6,7));
    }

    private addBishops(){
        new Bishop(Colors.BLACK,this.getCell(2,0));
        new Bishop(Colors.BLACK,this.getCell(5,0));
        new Bishop(Colors.WHITE,this.getCell(2,7));
        new Bishop(Colors.WHITE,this.getCell(5,7));
    }

    private addPawns(){
        for (let i = 0; i < 8; i++){
            new Pawn(Colors.BLACK,this.getCell(i,1));
            new Pawn(Colors.WHITE,this.getCell(i,6));
        }
    }
    
    private addRocks(){
        new Rock(Colors.BLACK,this.getCell(0,0));
        new Rock(Colors.BLACK,this.getCell(7,0));
        new Rock(Colors.WHITE,this.getCell(0,7));
        new Rock(Colors.WHITE,this.getCell(7,7));
    }


    public addFigures(){
        this.addBishops();
        this.addKings();
        this.addKnights();
        this.addPawns();
        this.addQueens();
        this.addRocks();
    }



}