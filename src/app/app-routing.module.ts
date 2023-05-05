import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';


const routes: Routes = [
  {path:"registro", component: RegisterFormComponent },
  {path:"clientes", component: ClientListComponent},
  {path:"**", pathMatch:'full', redirectTo:"registro"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
