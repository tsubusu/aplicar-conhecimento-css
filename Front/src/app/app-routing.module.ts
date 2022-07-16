import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const mainRoutes: Routes = [
  { path: 'flex-box', loadChildren: () => import('./css-flex-box/css-flex-box-module').then(m => m.CssFlexBoxModule)},
  { path: 'sass', loadChildren: () => import('./sass/sass-routing.module').then(m => m.SassRoutingModule)},
  { path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)},
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule)},
  { path: 'html', loadChildren: () => import('./html/html.module').then(m => m.HtmlModule)},
  { path: 'seo', loadChildren: () => import('./seo/seo.module').then(m => m.SeoModule)},
  { path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)},
  { path: '', redirectTo: 'angular/aula1', pathMatch: 'full'},
  { path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { useHash: true, preloadingStrategy: PreloadAllModules})], // carregar as demais paginas em segundo plano
  exports: [RouterModule]
})
export class AppRoutingModule { }
