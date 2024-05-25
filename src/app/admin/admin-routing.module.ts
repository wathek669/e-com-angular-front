import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: PostCategoryComponent },
  { path: 'product', component: PostProductComponent },
  { path: 'post-coupon', component: PostCouponComponent },
  { path: 'coupons', component: CouponsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
