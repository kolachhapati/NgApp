import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { IconsComponent } from '../../icons/icons.component';

import { NotificationsComponent } from '../../notifications/notifications.component';

import { ProductComponent } from 'app/product/product/product.component';
import { OrderComponent } from 'app/order/order/order.component';
import { ProdcatComponent } from 'app/product/productcategory/prodcat.component';
import { OrderHistoryComponent } from 'app/order/order-history/order-history/order-history.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'product', component: ProductComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order-history', component: OrderHistoryComponent },
    { path: 'productcat', component: ProdcatComponent },
];
