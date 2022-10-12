import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';

const routes: Routes = [{
  path:'editProfile',component:ViewEditAccountSettingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }