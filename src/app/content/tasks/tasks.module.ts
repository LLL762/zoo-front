import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import EnvUtil from 'src/app/util/EnvUtil';
import { RouterModule } from '@angular/router';
import { TaskPageComponent } from './task-page/task-page.component';

const routes = [
  { path: EnvUtil.getAppUri('TASKS_LIST'), component: TaskListComponent },
];

@NgModule({
  declarations: [TaskListComponent, TaskPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TaskService],
})
export class TasksModule {}
