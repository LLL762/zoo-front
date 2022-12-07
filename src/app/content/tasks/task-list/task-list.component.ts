import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks?: any[];

  constructor(private taskService: TaskService) {
    console.log(7);
  }

  ngOnInit(): void {
    this.taskService
      .getAllTasks()
      .subscribe((body) => (this.tasks = body.data.tasks));
  }
}
