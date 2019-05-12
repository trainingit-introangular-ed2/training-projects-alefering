import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';

@NgModule({
  declarations: [SenderComponent, ReceiverComponent],
  imports: [CommonModule, NotificationsRoutingModule],
  exports: [ReceiverComponent]
})
export class NotificationsModule {}
