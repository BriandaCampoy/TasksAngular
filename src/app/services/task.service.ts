import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { Task, UpdateTaskRequest } from '@interfaces/task';
import { CreateTask } from '@interfaces/create-task';
import { Observable } from 'rxjs';

/**
 * A service responsible for handling task-related operations.
 */
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

  /**
   * Creates a new task.
   * @param newTask - The details of the new task.
   * @returns An Observable of the creation response.
   */
  createTask(newTask: CreateTask) {
    return this.http.post(`${this.urlApi}`, newTask, this.options);
  }

  /**
   * Updates an existing task.
   * @param updatedTask - The updated details of the task.
   * @returns An Observable of the update response.
   */
  updateTask(updatedTask: UpdateTaskRequest) {
    const { _id, ...updatedTaskRequest } = updatedTask;
    return this.http.patch(
      `${this.urlApi}/${_id}`,
      updatedTaskRequest,
      this.options
    );
  }

  /**
   * Deletes a task.
   * @param id - The ID of the task to be deleted.
   * @returns An Observable of the deletion response.
   */
  deleteTask(id: string) {
    return this.http.delete(`${this.urlApi}/${id}`, this.options);
  }

  /**
   * Retrieves tasks associated with the current user based on a search value.
   * @param searchedValue - The search value to filter tasks.
   * @returns An Observable of an array of tasks.
   */
  getTasksByUser(searchedValue: string): Observable<Task[]> {
    const params = new HttpParams().set('filter', searchedValue);
    const newOptions = {
      headers: this.options.headers,
      params: params,
    };
    return this.http.get<Task[]>(`${this.urlApi}/user`, newOptions);
  }

  /**
   * Retrieves tasks associated with a specific subject.
   * @param id - The ID of the subject.
   * @returns An Observable of an array of tasks.
   */
  getTaskBySubject(id: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.urlApi}/subject/${id}`, this.options);
  }

  /**
   * Retrieves tasks associated with a specific subject.
   * @param id - The ID of the subject.
   * @returns An Observable of an array of tasks.
   */
  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.urlApi}/${id}`, this.options);
  }
}
