import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVm } from 'src/app/models/login.model';
import { AuthServerProvider } from 'src/app/services/auth-jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginVm = new LoginVm()
  constructor(
    private router: Router,
    private authServerProvider : AuthServerProvider
  ){}

  ngOnInit(): void {

 
  }

  login (){    
    this.authServerProvider.login(this.loginVm).subscribe(res => {
      this.router.navigateByUrl("")
    })
  }
}
