import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  [x: string]: any;
  todo = [
    { name: 'Get to work', details: 'Start working on the project' },
    { name: 'Pick up groceries', details: 'Buy vegetables and fruits' },
    { name: 'Go home', details: 'Head back to your place' },
    { name: 'Fall asleep', details: 'Get a good night\'s sleep' }
  ];

  done = [
    { name: 'Get up', details: 'Wake up early in the morning' },
    { name: 'Brush teeth', details: 'Maintain dental hygiene' },
    { name: 'Take a shower', details: 'Stay fresh and clean' },
    { name: 'Check e-mail', details: 'Read and respond to emails' },
    { name: 'Walk dog', details: 'Take your dog for a walk' }
  ];

  removeFromTodoList(index: number) {
    this.todo.splice(index, 1);
  }

  removeFromDoneList(index: number) {
    this.done.splice(index, 1);
  }
  drop(event: CdkDragDrop<{ name: string; details: string; }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
 }
 