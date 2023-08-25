import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './interceptors/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('././modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"",
    component: MainComponent,
  },
  {
    path:"users",
    loadChildren:() => import('./modules/user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
