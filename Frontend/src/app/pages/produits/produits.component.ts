import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ShareService } from 'src/app/service/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent  implements OnInit {

  public productList: any ;
  
  constructor(private api : ApiService, public share: ShareService , private router: Router){}

  ngOnInit(): void{

    this.api.getProduct().subscribe(res =>{

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

}
