import { AtletasComponent } from './componentes/atletas/atletas.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from "app/componentes/dashboard/dashboard.component";


export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'atletas',
        component: AtletasComponent
    }
]