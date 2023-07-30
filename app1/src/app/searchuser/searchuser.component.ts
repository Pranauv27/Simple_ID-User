import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent {
  user: User = {id:'', name:''};

  ID: string = '';

  status: number = -1;

  constructor(private dataService: DataService){}

  SearchUser(): void{
    this.dataService.getUser(this.ID).subscribe(
      (response) => {
        this.status = 200;
        this.user = response;
      },
      (error) => {
        this.status = error.status;
        this.user = error;
        console.log("Error while searching the user:",error);
      }
    )
  }

}
