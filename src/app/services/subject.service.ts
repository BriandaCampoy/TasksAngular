import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  Subject,
  createSubjectRequest,
  updateSubjectRequest,
} from '@interfaces/subject';

/**
 * A service responsible for handling subject-related operations.
 */
@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  urlApi = `${environment.API_URL}/subject`;
  token = this.tokenService.getToken();

  /**
   * Headers including the authentication token.
   */
  headers = new HttpHeaders({
    'auth-token': `${this.token}`,
  });
  options = { headers: this.headers };
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  /**
   * Creates a new subject.
   * @param newSubject - The details of the new subject.
   * @returns An Observable of the creation response.
   */
  createSubject(newSubject: createSubjectRequest) {
    return this.http.post(`${this.urlApi}`, newSubject, this.options);
  }

  /**
   * Updates an existing subject.
   * @param updatedSubject - The updated details of the subject.
   * @returns An Observable of the update response.
   */
  updateSubject(updatedSubject: Subject) {
    const { _id, ...updateSubject } = updatedSubject;
    return this.http.patch(
      `${this.urlApi}/${_id}`,
      updateSubject,
      this.options
    );
  }

  /**
   * Deletes a subject.
   * @param id - The ID of the subject to be deleted.
   * @returns An Observable of the deletion response.
   */
  deleteSubject(id: string) {
    return this.http.delete(`${this.urlApi}/${id}`, this.options);
  }

  /**
   * Retrieves subjects associated with the current user.
   * @returns An Observable of an array of subjects.
   */
  getSubjectByUser(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.urlApi}`, this.options);
  }

  /**
   * Retrieves details of a subject by its ID.
   * @param id - The ID of the subject.
   * @returns An Observable of the subject's details.
   */
  getSubject(id: string): Observable<Subject> {
    return this.http.get<Subject>(`${this.urlApi}/${id}`, this.options);
  }
}
