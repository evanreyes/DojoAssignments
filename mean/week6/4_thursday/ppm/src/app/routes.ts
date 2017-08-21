import { IndexComponent } from './components/index/index.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreationComponent } from './components/product-creation/product-creation.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: IndexComponent , pathMatch: 'full' },
    { path: 'product/show', component: ProductListComponent },
    { path: 'product/create', component: ProductCreationComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
