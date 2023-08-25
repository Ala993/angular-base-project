import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagedUserVM } from 'src/app/models/managed-user.model';
import { AuthServerProvider } from 'src/app/services/auth-jwt.service';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css'],
})
export class SignOnComponent implements OnInit {
  userTypes = [
    {name: "CLIENT", description: "Client"},
    {name: "CATERER", description: "Caterer"},
    
  ]
  managedUser = new ManagedUserVM();
  submitted = false;
  constructor(
    private authServerProvider: AuthServerProvider,
    private router : Router
    ) {}

  ngOnInit(): void {

  }

  register() {
    this.submitted = true;
    if(this.checkManagedUserObject()){
      this.managedUser.login = this.managedUser.email
      this.authServerProvider.register(this.managedUser).subscribe(res => {
        this.router.navigateByUrl("login")
      })
    }
  }






  checkManagedUserObject(): boolean {
    if (
      this.managedUser.email &&
      this.managedUser.password &&
      this.managedUser.firstName &&
      this.managedUser.lastName &&
      this.managedUser.phoneNumber1 &&
      this.managedUser.userType &&
      this.managedUser.address
    )
      return true;
    else return false;
  }
}
