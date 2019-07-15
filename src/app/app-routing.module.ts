import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from  './layouts/main/main.component';
import { HomeComponent } from  './staticpages/home/home.component';
import { AboutComponent } from  './staticpages/about/about.component';
import { AlbumsComponent } from  './artists/albums/albums.component';
import { SongInfoComponent } from  './artists/song-info/song-info.component';
import { CustomPipeComponent } from  './staticpages/custom-pipe/custom-pipe.component';
import { DirectivesComponent } from  './staticpages/directives/directives.component';
import { TempateFormsComponent } from './forms/tempate-forms/tempate-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path:  '',
    component:  MainComponent,
    children: [
      {
        path:  '',
        component:  HomeComponent
      },
      {
        path:  'about',
        component: AboutComponent
      },
       {
        path:  'albums',
        component: AlbumsComponent
      },
      {
        path:  'pipes',
        component: CustomPipeComponent
      },
      {
        path:  'directives',
        component: DirectivesComponent
      },
      {
        path:  'templateForms',
        component: TempateFormsComponent
      },
      {
        path:  'reactiveForms',
        component: ReactiveFormsComponent
      },
      {
        path:  'clients',
         loadChildren: () => import('./clients/clients.module').then(mod => mod.ClientsModule)
      },
       {
        path:  'employees',
         loadChildren: () => import('./employees/employees.module').then(mod => mod.EmployeesModule)
      },
       {
        path:  'song-info',
        component: SongInfoComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
