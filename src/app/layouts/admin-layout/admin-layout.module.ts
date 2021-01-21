import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ProductComponent } from 'app/product/product/product.component';
import { ProductListComponent } from 'app/product/product/product-list/product-list/product-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductAddComponent } from 'app/product/product/product-add/product-add.component';
import { OrderComponent } from 'app/order/order/order.component';

import { ProdcatListComponent } from 'app/product/productcategory/prodcat-list/prodcat-list/prodcat-list.component';
import { ProdcatComponent } from 'app/product/productcategory/prodcat.component';
import { ProdcatAddComponent } from 'app/product/productcategory/prodcat-add/prodcat-add/prodcat-add.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatStepperModule
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
    ProdcatAddComponent
  ]
})

export class AdminLayoutModule {}
