import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit{

  users: User[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    console.log('get all user function triggered in the component');
    this.dataService.getUsers().subscribe(
      (data) => {
        console.log('The User in the response:',data);
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
