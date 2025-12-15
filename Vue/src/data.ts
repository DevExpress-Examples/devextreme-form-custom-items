export interface Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Photo: string;
}

export function getEmployee(): Employee {
  const employee: Employee = {
    ID: 1,
    FirstName: 'Peter',
    LastName: 'Smith',
    Photo: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/petersmith.png',
  };

  return employee;
}
