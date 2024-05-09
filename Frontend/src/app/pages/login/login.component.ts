import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
// import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent    {

  constructor(private builder: FormBuilder, private service: ApiService,private router:Router, private toastr: ToastrService, private share: ShareService) {
      sessionStorage.clear();
  }
  
  public result: any;
  
  loginform = this.builder.group({
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    });
  
  
    proceedlogin() {
  
      // if (this.loginform.valid){ 
      //      this.service.GetUser(this.loginform.value.email,this.loginform.value.password).subscribe(item => {
      //           this.result = item;
        
      //           console.log(this.loginform.value);
      //           console.log(this.result);
      //         });
      //       }
      if (this.loginform.valid) {
        // new function
        this.service.GetUser(this.loginform.value.email,this.loginform.value.password).subscribe(item => {
          this.result = item;
  
          console.log(this.loginform.value);
          console.log(this.result);
          console.log('work1');
  
          if (this.result[0].password === this.loginform.value.password) {
            
            sessionStorage.setItem('username',this.result[0].email);
  
  
            ////from here
            if(this.loginform.value.password=='admin' && this.loginform.value.email=='admin@gmail.com'){
              this.router.navigate(['admin']);
              this.share.navbar = false;
              this.share.footer = false;
            }
            else{
              
              this.router.navigate(['']);
              ////test
              var username = sessionStorage.getItem('username');
              this.share.navbar = true;

    // Check if user information is present
    if (username) {
      console.log('User is logged in. Welcome, ' + username + '!');
    } else {
      console.log('User is not logged in.');
    }
              //////fin_test
  
            }
  
            this.share.loginbtn = false
            ////to here
  
  
              // this.router.navigate(['signup']);
              // this.router.navigate(['profile']);
              console.log('good job '+ this.share.loginbtn);
         
          } else {
            // this.toastr.error('Invalid credentials');
            // console.log('work3')
          }
        });
      } 
      else {
        // this.toastr.warning('Please enter valid data.');
        console.log('work4')
      }
    
    } 
  
    ngOnInit(): void {
      this.share.casourel = false;
    }
    // casourelApparu(){
    //   this.share.casourel = true;
    //   this.share.navbar = true;
  
    // }

}
