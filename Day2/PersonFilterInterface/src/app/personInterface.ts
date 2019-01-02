import { Component } from '@angular/core';

interface Person {
  name: String,
  age: Number,
  address: String,
  email: String,
  isGraduate: Boolean
}

@Component({
  selector: 'Persons',
  template: `
  <h3>ngFor allows to iterate through the object array Persons.</h3>
  <ul *ngFor="let person of graduatePersons" >
      <li>Name: {{ person.name }}</li>
      <li>Age: {{ person.age }}</li>
      <li>Address: {{ person.address }}</li>
      <li>Email: {{ person.email }}</li>
      <li>isGraduate: {{ person.isGraduate }}</li>
  </ul>
  `
})
export class Persons {
  persons:Person[]=[
    {
      name: "A1",
      age: 21,
      address: "Pune",
      email: "asd@asd.com",
      isGraduate: false
    },
    {
      name: "A2",
      age: 22,
      address: "Delhi",
      email: "asd12@dfre.com",
      isGraduate: true
    },
    {
      name: "A3",
      age: 23,
      address: "Mumbai",
      email: "asdfvr@adssd.com",
      isGraduate: true
    },
    {
      name: "A4",
      age: 24,
      address: "Jaipur",
      email: "lkhgfyj@sdfsasd.com",
      isGraduate: false
    },
    {
      name: "A5",
      age: 25,
      address: "Allahabad",
      email: "aetsd@asfdd.com",
      isGraduate: false
    }
  ];

  graduatePersons:Person[] = this.persons.filter(person => {
    return person.isGraduate;
  } )
}
