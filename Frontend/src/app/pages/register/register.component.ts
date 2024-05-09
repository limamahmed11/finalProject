import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { ToastrService } from 'ngx-toastr'
import { ShareService } from 'src/app/service/share.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})


export class RegisterComponent  implements OnInit {
  constructor(private builder: FormBuilder, private dataService: ApiService, private router: Router, private toastr: ToastrService, private share: ShareService) {

  }

  registerform = this.builder.group({
    name: this.builder.control('', Validators.required),
    prenom: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    adresse: this.builder.control('', Validators.required),
    num_tel: this.builder.control('', Validators.required),
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.dataService.RegisterUser(this.registerform.value).subscribe(result => {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate(['login'])
      });
        console.log(this.registerform.value);
      // // });
    } 
    else {
      this.toastr.warning('Please enter valid data.');
     
    }
  }

  ngOnInit(): void {
    this.share.casourel = false;
  }

  //////////////

  // username: string='';
  // email: string='';
  // password: string='';

  // register() {
  //   console.log('Username:', this.username);
  //   console.log('Email:', this.email);
  //   console.log('Password:', this.password);
  // }

}





