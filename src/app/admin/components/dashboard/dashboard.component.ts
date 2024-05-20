import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  searchProductForm: FormGroup;
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  getAllProducts() {
    this.adminService.getAllProducts().subscribe((res) => {
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

    this.adminService.getAllProductsByName(title).subscribe((res) => {
      res.forEach((e) => {
        e.processedImg = 'data:image/jpeg;base64,' + e.byteImg;
        this.products.push(e);
      });
    });
  }

  deleteProduct(productId:any) {
    this.adminService.deleteProduct(productId).subscribe((res) => {

      if (res == null) {
        this.snackBar.open('Product Deleted', 'Close', { duration: 5000 });
        this.getAllProducts();
      } else {
        this.snackBar.open(res.message, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar',
        });
      }
    });

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]],
    });
  }
}
