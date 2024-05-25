import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterialModule';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, PostCategoryComponent, PostProductComponent, PostCouponComponent, CouponsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoAngularMaterailModule,
  ],
})
export class AdminModule {}
