import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  categoryId: number=0;
  cartItemList: any=[];
  totalCartItem: number=0;
  alert = false; messageAlert: string="" ;  // index/produit

  loginbtn: boolean = true;
  navbar: boolean = true;

  casourel: boolean = true;

  footer: boolean = true;  


  

  getCartItemList(){
    return this.cartItemList
  }

  

}