import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  products: any[] = [];
  searchProductForm: FormGroup;
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }

  addToCart(arg0: any) {
    throw new Error('Method not implemented.');
    }
    
  getAllProducts() {
    this.customerService.getAllProducts().subscribe((res) => {
      res.forEach((e) => {
        e.processedImg = 'data:image/jpeg;base64,' + e.byteImg;
        console.log(e);

        this.products.push(e);
      });
    });
  }
  submitForm() {
    const title = this.searchProductForm.get('title')!.value;
    this.products = [];
    if (!title) {
      // If the search input is empty, fetch all products again
      this.getAllProducts();
      return; // Exit the method early
    }

    this.customerService.getAllProductsByName(title).subscribe((res) => {
      res.forEach((e) => {
        e.processedImg = 'data:image/jpeg;base64,' + e.byteImg;
        this.products.push(e);
      });
    });
  }
}
