import { Component, OnInit } from '@angular/core';
import { Badge } from '@ionic-enterprise/badge/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private badge: Badge) {}

  ngOnInit() {
    this.badge.set(10);
  }
}
