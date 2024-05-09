import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateTo(page: string) {
    switch(page) {
      case 'account':
        // Navigate to the account page
        this.router.navigateByUrl('/account');
        break;
      case 'order':
        // Navigate to the order page
        this.router.navigateByUrl('/order');
        break;
    }
  }

  signOut() {
    // Implement sign-out logic here
    console.log('Signing out...');
  }

}
