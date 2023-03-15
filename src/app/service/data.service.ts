import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getColaborators() {
    return this.httpClient.get('http://localhost:8000/api/colaborators');
  }

  registerColaborator(data:any) {
    return this.httpClient.post('http://localhost:8000/api/register', data);
  }

  getEditColaboratorByid(data:any) {
    return this.httpClient.post('http://localhost:8000/api/register', data);
  }
}
