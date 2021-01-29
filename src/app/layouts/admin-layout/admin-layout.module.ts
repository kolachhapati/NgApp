import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ProductComponent } from 'app/product/product/product.component';
import { ProductListComponent } from 'app/product/product/product-list/product-list/product-list.component';
import { ProductAddComponent } from 'app/product/product/product-add/product-add.component';
import { OrderComponent } from 'app/order/order/order.component';
import { OrderHistoryComponent } from 'app/order/order-history/order-history/order-history.component';
import { ProdcatListComponent } from 'app/product/productcategory/prodcat-list/prodcat-list/prodcat-list.component';
import { ProdcatComponent } from 'app/product/productcategory/prodcat.component';
import { ProdcatAddComponent } from 'app/product/productcategory/prodcat-add/prodcat-add/prodcat-add.component';
import { from } from 'rxjs';

// Angular Material
import { MaterialModule } from 'app/material/material/material.module'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    NotificationsComponent,
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    OrderComponent,
    ProdcatComponent,
    ProdcatListComponent,
    ProdcatAddComponent,
    OrderHistoryComponent
  ]
})

export class AdminLayoutModule {}
