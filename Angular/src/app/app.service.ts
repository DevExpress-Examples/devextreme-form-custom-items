import { Injectable } from '@angular/core';

export interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Photo: string;
}

@Injectable()
export class Service {
  getEmployee(): Employee {
    const employee: Employee = {
      ID: 1,
      FirstName: 'Peter',
      LastName: 'Smith',
      Photo: 'assets/images/petersmith.png',
    };

    return employee;
  }
}
