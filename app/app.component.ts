import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <animal-list></animal-list>
    <hr>
    <div>
      <div *ngIf="selectedAnimal">
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
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public like: string, public dislike: string) { }
}
