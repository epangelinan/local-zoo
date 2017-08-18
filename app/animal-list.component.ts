import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals" selected="selected">Mature Animals</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | completeness:filterByCompleteness">Species: {{currentAnimal.species}} <br> Name: {{currentAnimal.name}} <br> Age: {{currentAnimal.age}} <br> Diet: {{currentAnimal.diet}} <br> Location: {{currentAnimal.location}} <br> Caretakers: {{currentAnimal.caretakers}} <br> Sex: {{currentAnimal.sex}} <br> Likes: {{currentAnimal.like}} <br> Dislikes: {{currentAnimal.dislike}} <br> <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button><br><br></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = " ";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }
}
