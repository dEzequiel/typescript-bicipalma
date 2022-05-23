import { Authentication } from "../interfaces/authentication";

export class UserCard implements Authentication {

    name: string;
    id: number;
    status: boolean = false;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    setStatus(status: boolean): void {
        this.status = status;
    }

    checkStatus(): boolean {
        return this.status;
    }

    toString(): object {
        return {'NAME': this.name, 'ID': this.id, 'CARD STATUS': this.status};
    }

}