import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing all the components
import { AllusersComponent } from './allusers/allusers.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'allusers', component: AllusersComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'searchuser', component: SearchuserComponent},
  {path: 'updateuser', component: UpdateuserComponent},
  {path: 'deleteuser', component: DeleteuserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
