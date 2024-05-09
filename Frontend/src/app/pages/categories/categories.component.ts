import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {

  public categoryList: any;
  constructor( private api: ApiService, public share: ShareService ){}
  ngOnInit():void{
    this.api.getCategory().subscribe(res =>{
      console.log(res);
      this.categoryList = res;
    })
    this.share.casourel = false;
  }

  
  
  sendId(id: any){
     this.share.categoryId=id;
  }

  casourelDisparu(){
    // console.log(this.categoryList)
    this.share.casourel = false;
  }

}
