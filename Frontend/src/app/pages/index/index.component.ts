import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public productList: any ;

  constructor(public share: ShareService, private dataService: ApiService, private router: Router) {
    
    
  }
  
  loginbtn: boolean = this.share.loginbtn;
  logoutbtn: boolean = !this.share.loginbtn;

  casourelDisparu(){
    this.share.casourel = false;
    this.share.navbar = false;
  }
  casourelDisparu1(){
    this.share.casourel = false;
  }
  casourelApparu(){
    this.share.casourel = true;
    this.share.navbar = false;

  }
  

  ngOnInit(): void{
    this.share.casourel = true;

    this.dataService.getProduct().subscribe(res =>{

      this.productList = res;

    })
 
  }
  navigateToDetails(itemId: number) {
    this.router.navigate(['/details', itemId]);
  }
  addToCart(product: any){

    if (!this.share.cartItemList.includes(product)){

      this.share.cartItemList.push(product);
      this.share.totalCartItem++;
      this.share.alert = true;
      this.share.messageAlert = product.name + " est ajouté avec succés"
      console.log(product)

    }
    
  }


  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
    this.share.loginbtn = true;
    this.share.casourel = false;

    console.log('User logged out.');
  }



}
