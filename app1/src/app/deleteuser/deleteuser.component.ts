import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {

  user: User = {id:'', name:''};

  ID: string = '';

  status: number = -1;

  constructor(private dataService: DataService){}

  SearchUser(): void{
    console.log('Search user is triggered in the component');
    
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

  DeleteUser(): void{
    console.log('Delete user is triggered in Component');
    
    this.dataService.deleteUser(this.user).subscribe(
      (response) => {
        this.status = 0;
        this.user = response;
      },
      (error) => {
        this.status = error.status;
        this.user = error;
        console.log('Error while deleting the user:',error);
        
      }
    )
  }

}
