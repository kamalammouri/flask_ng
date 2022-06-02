import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneraleService {
  constructor(private httpClient: HttpClient) {

  }

  addSimulation(data:any):Observable<any>{
    return this.httpClient.post<any>('http://127.0.0.1:5000/api/tasks',data)
  }
  getData():Observable<any>{
    return this.httpClient.get<any>('http://127.0.0.1:5000/api/books/all');
  }
}
