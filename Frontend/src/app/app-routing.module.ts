import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { TestComponent } from './pages/test/test.component';
import { IndexComponent } from './pages/index/index.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   redirectTo: 'index',
  //   pathMatch: 'full'
  // },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {path: 'signup' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'index' , component: IndexComponent},
  {path: 'products', component: ProduitsComponent },
  {path: 'panier', component: PanierComponent },
  {path: 'home', component: IndexComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'settings', component: SettingsComponent },
  { path: 'details/:id', component: DetailsComponent } ,// Define route with parameter id

  {path: 'test' , component: TestComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
