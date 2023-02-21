import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  template: `
    <sidenav>
      <router-outlet></router-outlet>
    </sidenav>
  `,
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.init();
  }
}
