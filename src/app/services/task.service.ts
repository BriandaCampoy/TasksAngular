import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { Task, UpdateTaskRequest } from '@interfaces/task';
import { CreateTask } from '@interfaces/create-task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  urlApi = `${environment.API_URL}/tasks`;
  token = this.tokenService.getToken();
  headers = new HttpHeaders({
    'auth-token': `${this.token}`,
  });
  options = { headers: this.headers };
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  createTask(newTask: CreateTask) {
    return this.http.post(`${this.urlApi}`, newTask, this.options);
  }

  updateTask(updatedTask:UpdateTaskRequest) {
    const {_id, ...updatedTaskRequest} = updatedTask;
    return this.http.patch(`${this.urlApi}/${_id}`, updatedTaskRequest, this.options);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.urlApi}/${id}`, this.options);
  }

  getTasksByUser(searchedValue:string): Observable<Task[]> {
    const params = new HttpParams().set('filter', searchedValue)
    const newOptions = {
      headers:this.options.headers,
      params:params
    }
    return this.http.get<Task[]>(`${this.urlApi}/user`, newOptions);
  }

  getTaskBySubject(id:string):Observable<Task[]>{
    return this.http.get<Task[]>(`${this.urlApi}/subject/${id}`, this.options)
  }

  getTask(id: string):Observable<Task> {
    return this.http.get<Task>(`${this.urlApi}/${id}`, this.options);
  }
}
