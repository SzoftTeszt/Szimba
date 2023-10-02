import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { AllatainkComponent } from './part/allataink/allataink.component';
import { UjlakoComponent } from './part/ujlako/ujlako.component';

const routes: Routes = [
  {path: 'allataink' , component:AllatainkComponent},
  {path: 'ujlako' , component:UjlakoComponent},
  {path: 'rolunk' , component:RolunkComponent},
  {path: ' ' , redirectTo:'rolunk'},
  {path: '**' , redirectTo:'rolunk'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
