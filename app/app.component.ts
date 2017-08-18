import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>

    <ul>
      <li *ngFor="let currentAnimal of animals">Species: {{currentAnimal.species}} <br> Name: {{currentAnimal.name}} <br> Age: {{currentAnimal.age}} <br> Diet: {{currentAnimal.diet}} <br> Location: {{currentAnimal.location}} <br> Caretakers: {{currentAnimal.caretakers}} <br> Sex: {{currentAnimal.sex}} <br> Likes: {{currentAnimal.like}} <br> Dislikes: {{currentAnimal.dislike}} <br><br>  <button (click)="editAnimal(currentAnimal)">Edit!</button></li>
    </ul>
    <hr>
    <div>
      <h3>{{selectedAnimal.species}}</h3>
      <h3>Edit Animal</h3>
      <label>Enter Animal Species:</label>
      <input [(ngModel)]="selectedAnimal.species">
      <br>
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="selectedAnimal.name">
      <br>
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <br>
      <label>Enter Animal Diet:</label>
      <input [(ngModel)]="selectedAnimal.diet">
      <br>
      <label>Enter Animal Location:</label>
      <input [(ngModel)]="selectedAnimal.location">
      <br>
      <label>Enter Number of Caretakers:</label>
      <input [(ngModel)]="selectedAnimal.caretakers">
      <br>
      <label>Enter Animal Sex:</label>
      <input [(ngModel)]="selectedAnimal.sex">
      <br>
      <label>Enter One Item the Animal Likes:</label>
      <input [(ngModel)]="selectedAnimal.like">
      <br>
      <label>Enter One Item the Animal Dislikes:</label>
      <input [(ngModel)]="selectedAnimal.dislike">
      <br>
    </div>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];
  selectedAnimal: Animal = this.animals[0];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public like: string, public dislike: string) { }
}
