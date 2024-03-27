import { Injectable } from "@angular/core";
import { housingLocation } from "./typeProperty";

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    url = 'http://localhost:3000/locations';
    async getAllData(): Promise<any[]> {
        const data = await fetch(this.url);
        return await data.json() ?? [];
    }

    async getDataById(id: number): Promise<housingLocation | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        return await data.json() ?? {};
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log('first name', firstName);
        console.log('last name', lastName);
        console.log('email', email);
    }
    constructor() { }
}