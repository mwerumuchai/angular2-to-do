import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <div *ngIf="thing">
      <h3>Thing is not relevant... or is it?!</h3>
    </div>
    <button (click)="show()">SHOW</button>
    <button (click)="hide()">HIDE</button>
    <pies></pies>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
     ></task-list>
     <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
  </div>
  `
})

export class AppComponent {
  thing = "something that is not null";
  show() {
    this.thing = "not null";
  }
  hide() {
    this.thing = null;
  }

  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}




/*{{ }}:moustache tags: they cause any expression/variables inside of the double curly brackets to be evaluatedso that their value is displayed
 task 1: boolean value named done and its default is false
 task 2: description TASK 3: an Id to assign each task a unique number
 use an output bunding when you want to trigger an event from a DOM element
 selectedTask is a property
 Two-way Binding allows us to view and modify data in real time : [( ngModel)]*/
