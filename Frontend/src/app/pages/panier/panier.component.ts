import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  cartItemList: any = [];
  index: number = 1;
  constructor( public share: ShareService){}

  ngOnInit():void{
    
    this.cartItemList = this.share.getCartItemList();
    
  
  }

 
  

  delete(item: any){
    var ii;
    for(let i=0; i++ ;i<this.cartItemList.lenght){
      if(this.cartItemList[i]===item){
        ii = i;
      }
    }
    this.cartItemList.splice(ii,1);
    this.share.totalCartItem--;

    console.log(ii);
    console.log(this.cartItemList);
    console.log("----------")
    console.log(this.share.cartItemList);

  }



}
  
  


