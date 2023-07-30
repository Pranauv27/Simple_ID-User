import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  user: User = {id:'', name:''};

  ID: string = '';

  Name: string = '';

  status: number = -1;

  newname: string = '';

  constructor(private dataService: DataService){}

  SearchUser(): void{
    this.dataService.getUser(this.user.id).subscribe(
      (response) => {
        this.status = 200;
        this.Name = response.name;
        this.ID = response.id;
      },
      (error) => {
        this.status = error.status;
        console.log("Error while searching the user:",error);
      }
    )
  }

  UpdateUser(): void{
    this.dataService.updateUser(this.user).subscribe(
      (response) => {
        this.newname = response.name;
        this.Name = response.name;
        this.ID = response.id;
        this.status = 0;
        console.log("User details is successfully updated to:",response);
      },
      (error) => {
        this.status = error.status;
        console.log('Error while updating the user:',error);
      }
    )
  }

}
