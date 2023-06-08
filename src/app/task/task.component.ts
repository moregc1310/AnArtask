import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  tasksarr: Task[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (tasks: Task[]) => {
        this.tasksarr = tasks;
      },
      (error) => {
        console.log('Error fetching tasks:', error);
      }
    );
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
}
