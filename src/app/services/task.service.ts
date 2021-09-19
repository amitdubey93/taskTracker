import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private _http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    //return of(TASKS)
    return this._http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.delete<Task>(url);
  }

  updateTaskRemainder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this._http.put<Task>(url, task, httpOptions);
  }

  addTask(task:Task):Observable<Task>{
    return this._http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
