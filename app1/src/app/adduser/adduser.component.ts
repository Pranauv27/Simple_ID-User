import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  user: User = {id:'', name:''};

  status: number = -1;

  errormsg:string = "";

  constructor(private dataService: DataService){}

  addUser(): void{
    console.log('add user function triggered in the component');
    
    this.dataService.addUser(this.user).subscribe(
      (response) => {
        this.status = 201;
        console.log("User added successfully!",response);
        this.user=response;
      },
      (error) => {
        this.status = error.status;
        this.errormsg = error;
        console.log("Error while fetching the user:",error);
        
      }
    )
  }

}
