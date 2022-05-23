import { Movil } from "../interfaces/movil";

export class Anchorage {

    isFree: boolean = true;
    // vehicle: Movil = undefined;

    constructor() {};

    checkIfFree(): boolean {
        return this.isFree;
    }

    getMovil(): Movil {
        return this.vehicle;
    }

    anchorVehicle(vehicle: Movil): void {
        // select random space for anchors
    }

    releaseAnchor(): void {
        this.isFree = true;
    }



}