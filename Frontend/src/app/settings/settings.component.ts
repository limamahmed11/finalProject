import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../service/share.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router , private share : ShareService) { }

  ngOnInit() {}

  navigateTo(page: string) {
    switch(page) {
      case 'profile':
        // Navigate to the account page
        this.router.navigateByUrl('/profile');
        break;
      case 'order':
        // Navigate to the order page
        this.router.navigateByUrl('/order');
        break;
    }
  }

  signOut() {
    // Implement sign-out logic here
    this.share.casourel = false;
    this.share.navbar = false;
    this.router.navigateByUrl('/login');
  }

}
