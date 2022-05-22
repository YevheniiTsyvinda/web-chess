import { Cell } from "./Cell";
import { Collors } from "./Collors";


export class Board {
    cells: Cell[][] = []

    public initChells() {
        for (let i = 0; i < 8; i++) {//y
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {//x
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Collors.BLACK, null))//b
                } else {
                    row.push(new Cell(this, j, i, Collors.WHITE, null))//w
                }
            }
            this.cells.push(row);
        }
    }
}