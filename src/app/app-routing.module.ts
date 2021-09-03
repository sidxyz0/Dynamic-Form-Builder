import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { ViewFormsComponent } from './view-forms/view-forms.component';


const routes: Routes = [{ path: '', component: FormsModuleComponent },
{ path: 'viewForms', component: ViewFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
