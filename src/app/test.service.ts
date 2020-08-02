import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  

  constructor(private httpClient: HttpClient) { }

  getAllUser() {
    let data = this.httpClient.get<any>("https://jsonplaceholder.typicode.com/users");
    return data;
  }

  
}
