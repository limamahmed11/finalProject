


  


import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
// import { ToastrService } from 'ngx-toastr'
import { ShareService } from 'src/app/service/share.service';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent   {
  // constructor( private dataService: ApiService, private router: Router,  private share: ShareService,private builder: FormBuilder) {}
  constructor(private dataService: ApiService, public share: ShareService, private router: Router, private builder: FormBuilder) {}


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
    //   this.dataService.RegisterUser(this.registerform.value).subscribe(result => {
        
    //     this.router.navigate(['login'])
    //   });
    //     console.log(this.registerform.value);
    //   // // });
    // } 
    // else {
    //   // this.toastr.warning('Please enter valid data.');
    //   console.log('Please enter valid data.');
     
    }
  }

  // ngOnInit(): void {
  //   this.share.casourel = false;
  // }

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





