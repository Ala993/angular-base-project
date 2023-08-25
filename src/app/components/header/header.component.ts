import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE, Langs } from 'src/app/contants/languages';
import { MenuItems } from 'src/app/contants/menu.items';
import { User } from 'src/app/models/user.model';
import { AuthServerProvider } from 'src/app/services/auth-jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  langs = Langs
  currentUser: User;
  menuItems = MenuItems ;
  constructor(
    private authServerProvider: AuthServerProvider,
    private router: Router,
    private translate: TranslateService,
  ) {
    authServerProvider.currentUser().subscribe(res => {
      this.currentUser = res;
/*       if(this.currentUser.userType == "CLIENT"){
        this.menuItems = this.clientMenuItems;
      }else this.menuItems = this.catererMenuItems; */
    })
    let currentLang =  localStorage.getItem(LANGUAGE);
    if(currentLang)    translate.use(currentLang);
    else translate.use("fr");

  }

  logout() {
    this.authServerProvider.logout();
    this.router.navigateByUrl('login');
  }

  setCurrentLanguage(lang){
    localStorage.setItem(LANGUAGE, lang);    
    this.translate.use(lang);
  }
}
