import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/b_pawn_1x.png";
import whiteLogo from "../../assets/w_pawn_1x.png";

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }
}