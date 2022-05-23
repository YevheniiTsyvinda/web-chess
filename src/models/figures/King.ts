import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/b_king_1x.png";
import whiteLogo from "../../assets/w_king_1x.png";


export class King extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }
}