import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';
import { AdminComponent } from './admin.component';
import { AdminProduitsComponent } from '../admin-produits/admin-produits.component';
// import { AdminClientsComponent } from '../admin-clients/admin-clients.component';

// ... import other components

const adminRoutes: Routes = [
    
    {path: 'categorie', component: AdminCategoriesComponent},
    {path: 'produit', component: AdminProduitsComponent}
    // {path: 'client', component: AdminClientsComponent}
        // path: '',
        // component: AdminComponent,
        // children: [
        //   { path: 'categorie', component: AdminCategoriesComponent },
          
        //   // Add more routes for other admin components/pages
        // ]
      
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
export { adminRoutes };