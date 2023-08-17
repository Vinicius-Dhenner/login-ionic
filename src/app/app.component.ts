import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Cadastro', url: '/cadastro', icon: 'arrow-up-circle' },
    { title: 'Dashboard', url: '/dashboard', icon: 'bar-chart'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
