import { Injectable } from '@angular/core';

@Injectable()
export class Service {
    getEmploee() {
        let employee = {
            ID: 1,
            FirstName: "Peter",
            LastName: "Smith",
            Photo: "assets/images/petersmith.png"
        };

        return employee;
    }
}