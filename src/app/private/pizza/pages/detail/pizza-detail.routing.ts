import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PizzaDetailComponent } from './pizza-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PizzaDetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PizzaDetailRoutingModule {
}