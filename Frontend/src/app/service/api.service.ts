// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }


import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost/ecommercePhp";

  apiurl="http://localhost:3000";

  getCategory() {
    return this.http.get<any>("http://localhost/ecommercePhp/category.php");
  }
  getProduct() {
    return this.http.get<any>("http://localhost/ecommercePhp/product.php");
  }
  getClient(){
    return this.http.get<any>(this.baseUrl + '/admin/admin-clients.php');
  }



  
  redirectUrl: string = '';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  

  apiurl1='http://localhost:3000/user';

  // RegisterUser(inputdata:any){
  //   console.log(typeof inputdata);
  //   console.log(inputdata);
  //   return this.http.post(this.apiurl+'/categorie',inputdata);
  // }

  RegisterUser(inputdata:any){
    return this.http.post(this.baseUrl + '/register.php',inputdata)
  }
////////////////////
  GetUser(email: any, password: any){
    const params = {
      username: email,
      password: password
    };
    return this.http.get<any>(this.baseUrl+'/login.php',{ params: params });
    
  }
  // GetUser(inputdata: any){
  //   this.http.post(this.baseUrl + '/login.php',inputdata);
  //   return this.http.get<any>(this.baseUrl+'/login.php');
  // }

  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }











  ////////////admin

  // addCategorie(nom: string){
  //   const data = {
  //     nom: nom
  //   };
  //   console.log(data)
  //   return this.http.post(this.baseUrl+'/admin-categories.php',{ data: data });
   
  
  addCategorie(inputdata: any) {
    return this.http.post(this.baseUrl + '/admin/admin-categories.php',inputdata);
  }

  addProduit(inputdata: any) {
    return this.http.post(this.baseUrl + '/admin/admin-produits.php',inputdata);
  }
   
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/product.php?id=${productId}`);
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }



  //token
  // setToken(token: string) {
  //   localStorage.setItem('token', token);
  // }
  // getToken() {
  //   return localStorage.getItem('token');
  // }
  // deleteToken() {
  //   localStorage.removeItem('token');
  // }
  // isLoggedIn() {
  //   const usertoken = this.getToken();
  //   if (usertoken != null) {
  //     return true
  //   }
  //   return false;
  // }
}


