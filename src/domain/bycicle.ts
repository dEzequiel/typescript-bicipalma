import { Movil } from '../interfaces/movil';

export class Bycicle implements Movil {

    id: number ;

    constructor(id: number ) {
        this.id = id;
    }

    getId(): number  {
        return this.id;
    }

}