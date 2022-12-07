import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import EnvUtil from 'src/app/util/EnvUtil';

const baseUrl = EnvUtil.getUrl('TASKS');

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get<any>(baseUrl);
  }
}
