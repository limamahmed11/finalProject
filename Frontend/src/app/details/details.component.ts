import { Component, OnInit } from '@angular/core';
import { ShareService } from '../service/share.service';
 import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {
  itemId: number=0;
  item: any;
  public productList: any ;
  
  constructor(private route: ActivatedRoute, private apiService: ApiService , private share: ShareService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = +params.get('id')!;
      this.getItemDetails(this.itemId);
    });
  }

  getItemDetails(id: number): void {
    this.apiService.getProductById(id).subscribe(item => {
      this.item = item;
    });
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
  
  

