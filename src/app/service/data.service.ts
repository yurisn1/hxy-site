import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getColaborators() {
    return this.httpClient.get('http://localhost:8001/api/colaborators');
  }

  registerColaborator(data:any) {
    return this.httpClient.post('http://localhost:8001/api/register', data);
  }
}
