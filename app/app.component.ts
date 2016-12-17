import { Component } from '@angular/core';

const todos : string = [
    'Learn JS',
    'Learn Ng2',
    'Write first app'
]

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do';
    todos : string = todos;
}