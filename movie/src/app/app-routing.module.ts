import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetmoviesComponent} from './components/home/getmovies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';


const routes: Routes = [
  {
    path: '', component: GetmoviesComponent
  },
  {
    path: 'details/:id', component: MovieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
