import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin = false
  title = 'EventLink-FO';
  constructor(router:Router) {
    
    this.checkIfLogin(router.url)
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
         this.checkIfLogin(event.url)
       
      }
      
    });
  }

  checkIfLogin(url){
    if(url.startsWith("/login")){
      this.isLogin = true;
    }
    else this.isLogin = false;
  }
}
