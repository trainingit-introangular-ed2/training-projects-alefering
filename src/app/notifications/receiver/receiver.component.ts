import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from '../notifications-store.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  public notes$;

  constructor(private notificationsStore: NotificationsStoreService) {}

  ngOnInit() {
    this.notes$ = this.notificationsStore.select$();
  }
}
