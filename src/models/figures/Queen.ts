import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/b_queen_1x.png";
import whiteLogo from "../../assets/w_queen_1x.png";

export class Queen  extends Figure {
    constructor(color: Colors, cell: Cell){
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN;
    }
}