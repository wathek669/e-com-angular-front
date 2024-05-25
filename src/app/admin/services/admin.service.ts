import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  handleError: any;
  constructor(private http: HttpClient) {}

  addCategory(category: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/category', category, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getAllCategories(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin/categories', {
      headers: this.createAuthorizationHeader(),
    });
  }
  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin/products', {
      headers: this.createAuthorizationHeader(),
    });
  }
  getAllProductsByName(name: any): Observable<any> {
    return this.http.get(BASIC_URL + `api/admin/search/${name}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/product', product, {
      headers: this.createAuthorizationHeader(),
    });
  }
  addCoupon(couponDto: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/coupons', couponDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
  getCoupons(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin/coupons' , {
      headers: this.createAuthorizationHeader(),
    });
  }

  deleteProduct(productId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  private createAuthorizationHeader(): HttpHeaders {
    console.log(UserStorageService.getToken());

    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }
}
