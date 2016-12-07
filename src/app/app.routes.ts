import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { MainComponent } from "./main/main.component";
import { RoleDashboardComponent } from "./role/role-dashboard/role-dashboard.component";
import { AdminComponent } from "./admin/admin/admin.component";

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'chart', component: MainComponent},
    {path: 'main', component: MainComponent},
    {path: 'dashboard', component: RoleDashboardComponent},
    {path: 'admin', component: AdminComponent}
];

export const routing = RouterModule.forRoot(routes);