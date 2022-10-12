import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingDashboardComponent } from './components/setting-dashboard/setting-dashboard.component';
import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';
//import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';

// import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';


@NgModule({
  declarations: [
    SettingDashboardComponent,
    ViewAvailibiltySettingComponent,

    // ViewEditAccountSettingComponent,

 
  ],

  imports: [
    CommonModule,
    SettingsRoutingModule,
    FontAwesomeModule
  ]
})
export class SettingsModule { }
