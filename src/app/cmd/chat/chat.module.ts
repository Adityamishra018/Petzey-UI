import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';
import { ViewAllChatDetailsComponent } from './components/view-all-chat-details/view-all-chat-details.component';
import { ViewChatComponent } from './components/view-chat/view-chat.component';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { ViewSuggestPrescriptionComponent } from './components/view-suggest-prescription/view-suggest-prescription.component';
import { AddPrescriptionComponent } from './components/view-suggest-prescription/components/add-prescription/add-prescription.component';
import { PrescriptionDetailsComponent } from './components/view-suggest-prescription/components/prescription-details/prescription-details.component';
import { AddFollowUpComponent } from './components/add-follow-up/add-follow-up.component';
import { ViewYourSchuduleComponent } from './components/add-follow-up/components/view-your-schudule/view-your-schudule.component';


@NgModule({
  declarations: [
    ChatDashboardComponent,
    ViewAllChatDetailsComponent,
    ViewChatComponent,
    ViewHistoryComponent,
    ViewSuggestPrescriptionComponent,
    AddPrescriptionComponent,
    PrescriptionDetailsComponent,
    AddFollowUpComponent,
    ViewYourSchuduleComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
