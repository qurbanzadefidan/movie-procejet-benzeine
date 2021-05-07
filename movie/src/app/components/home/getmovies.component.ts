import { Component, OnInit } from '@angular/core';
import {GetmovieService} from '../../services/getmovie.service';

@Component({
  selector: 'app-getmovies',
  templateUrl: './getmovies.component.html',
  styleUrls: ['./getmovies.component.css']
})
export class GetmoviesComponent implements OnInit {
  allmovie: any[] = [];
  constructor(private service: GetmovieService) {
  }

  ngOnInit(): void {
    this.getAllMovies();
  }
  // tslint:disable-next-line:typedef
  getAllMovies(){
return this.service.getAllMovies().subscribe((data: any) => {
this.allmovie = data;
});
  }


  // tslint:disable-next-line:typedef
 async getMovieId(id: any ){
const data = await this.service.getProduct(id);
}
  }

