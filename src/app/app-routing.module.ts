import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';
const routes: Routes = [
  {path:'card',component:CardComponent},
  {path:'generate',component:GenerateComponent},
  {path:'login',component:LoginComponent}
  // {path:'',component:AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
