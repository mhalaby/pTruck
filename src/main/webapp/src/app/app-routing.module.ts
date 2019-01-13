import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckViewComponent } from './truck/view/details/truckView.component';
import { TruckCreateComponent } from './truck/view/create-vew/create-view.component';
import { TruckListComponent } from './truck/view/truck-list/truck-list.component';


const routes: Routes = [
  {
    path: 'details/:id',
    component: TruckViewComponent
  },
  {
    path: 'create',
    component: TruckCreateComponent,
    data: { title: 'Add truck' }
  },
  {
    path: 'list',
    component: TruckListComponent,
    data: { title: 'List trucks' }
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
