import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../Model/Subject';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

url: string = 'http://localhost:8083/women/Subject/'

  public ShowAll (): Observable<Subject[]>  {
    return this.http.get<Subject[]>(this.url+'All');
      }

}
