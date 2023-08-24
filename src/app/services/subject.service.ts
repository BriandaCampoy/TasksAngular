import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject, createSubjectRequest, updateSubjectRequest } from '@interfaces/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  urlApi = `${environment.API_URL}/subject`;
  token = this.tokenService.getToken();
  headers = new HttpHeaders({
    'auth-token': `${this.token}`,
  });
  options = { headers: this.headers };
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  createSubject(newSubject: createSubjectRequest) {
    return this.http.post(`${this.urlApi}`, newSubject, this.options);
  }

  updateSubject(updatedSubject:Subject) {
    const {_id, ...updateSubject} = updatedSubject
    return this.http.patch(`${this.urlApi}/${_id}`, updateSubject, this.options);
  }

  deleteSubject(id: string) {
    return this.http.delete(`${this.urlApi}/${id}`, this.options);
  }

  getSubjectByUser(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.urlApi}`, this.options);
  }

  getSubject(id: string):Observable<Subject> {
    return this.http.get<Subject>(`${this.urlApi}/${id}`, this.options);
  }
}
