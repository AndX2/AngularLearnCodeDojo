import { Component } from '@angular/core';

const todos  = [
    {
        title : 'Learn JS',
        completed : false
    },
    {
        title : 'Learn Ng2',
        completed : true
    },
    {
        title : 'Write first app',
        completed : false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do';
    todos  = todos;

    toggle(todo : any){
        // console.log('toggle', todo);
        todo.completed = !todo.completed;
    }

    delete(todo : any){
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }

    }
}