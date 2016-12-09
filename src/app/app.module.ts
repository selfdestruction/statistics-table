import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { HighchartsService } from "./services/highcharts.service.ts";
import { APIService } from "./services/api.service.ts";

import { ChartComponent } from './chart/chart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RoleDashboardComponent } from './role/role-dashboard/role-dashboard.component';
import { RoleComponent } from './role/role/role.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserManagerComponent } from './admin/user-manager/user-manager.component';
import { RoleManagerComponent } from './admin/role-manager/role-manager.component';
import { ChartManagerComponent } from './admin/chart-manager/chart-manager.component';
import { DatePickerDirective } from './directives/date-picker.directive';
import { ChosenDirective } from './directives/chosen.directive';



@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RoleDashboardComponent,
    RoleComponent,
    AdminComponent,
    UserManagerComponent,
    RoleManagerComponent,
    ChartManagerComponent,
    DatePickerDirective,
    ChosenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HighchartsService, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
