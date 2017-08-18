import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">Species: {{currentAnimal.species}} <br> Name: {{currentAnimal.name}} <br> Age: {{currentAnimal.age}} <br> Diet: {{currentAnimal.diet}} <br> Location: {{currentAnimal.location}} <br> Caretakers: {{currentAnimal.caretakers}} <br> Sex: {{currentAnimal.sex}} <br> Likes: {{currentAnimal.like}} <br> Dislikes: {{currentAnimal.dislike}} <br><br>  <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
