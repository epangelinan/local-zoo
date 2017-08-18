import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
      <label>Enter Animal Species:</label>
      <input #newSpecies>
    </div>
    <div>
      <label>Enter Animal Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Animal Age:</label>
      <input #newAge>
    </div>
    <div>
      <label>Enter Animal Diet:</label>
      <input #newDiet>
    </div>
    <div>
      <label>Enter Animal Location:</label>
      <input #newLocation>
    </div>
    <div>
      <label>Enter Number of Caretakers:</label>
      <input #newCaretakers>
    </div>
    <div>
      <label>Enter Animal Sex:</label>
      <input #newSex>
    </div>
    <div>
      <label>Enter One Item the Animal Likes:</label>
      <input #newLike>
    </div>
    <div>
      <label>Enter One Item the Animal Dislikes:</label>
      <input #newDislike>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value, newDislike.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLike.value=''; newDislike.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);

    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
