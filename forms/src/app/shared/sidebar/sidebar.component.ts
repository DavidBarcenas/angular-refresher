import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  templateMenu: MenuItem[] = [
    { text: 'Basics', route: '/template/basics' },
    { text: 'Dinamics', route: '/template/dinamics' },
    { text: 'Switches', route: '/template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { text: 'Basics', route: '/reactive/basics' },
    { text: 'Dinamics', route: '/reactive/dinamics' },
    { text: 'Switches', route: '/reactive/switches' },
  ];

  authMenu: MenuItem[] = [
    { text: 'Combos', route: '/combos' },
    { text: 'Register', route: '/auth/register' },
  ];
}
