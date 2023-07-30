import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private backendURL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log('get all users function triggered in service');
    return this.http.get<User[]>(this.backendURL.concat('/users'));
  }

  getUser(userid: User["id"]): Observable<User> {
    console.log('search user function triggered in service');
    return this.http.get<User>(this.backendURL.concat('/searchuser?id=',userid));
  }

  addUser(user: User): Observable<User> {
    console.log('add user function triggered in service');
    return this.http.post<User>(this.backendURL.concat('/users'),user);
  }

  deleteUser(user: User): Observable<User> {
    console.log('delete user is triggered in service');
    return this.http.delete<User>(this.backendURL.concat('/users/',user.id));
  }

  updateUser(user: User): Observable<User> {
    console.log('update user is triggered in service');
    return this.http.put<User>(this.backendURL.concat('/users/',user.id),user);
    
  }

}
