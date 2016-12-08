import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { MainComponent } from "./main/main.component";
import { RoleDashboardComponent } from "./role/role-dashboard/role-dashboard.component";
import { AdminComponent } from "./admin/admin/admin.component";
import { UserManagerComponent } from "./admin/user-manager/user-manager.component";
import { RoleManagerComponent } from "./admin/role-manager/role-manager.component";

const routes: Routes = [
    {path: '', redirectTo: 'user', pathMatch: 'full'},
    {path: 'user', component: MainComponent,
        children: [
            {path: 'dashboard', component: RoleDashboardComponent}
        ]
    },
    {path: 'admin', component: AdminComponent,
      children: [
        {path: 'user-manager', component: UserManagerComponent},
        {path: 'role-manager', component: RoleManagerComponent}
      ]
    },
    {path: '**', redirectTo: 'user', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes, {
    useHash: true
});