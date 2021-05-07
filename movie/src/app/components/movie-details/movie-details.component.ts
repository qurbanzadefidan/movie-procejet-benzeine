import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetmovieService} from '../../services/getmovie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  list: any[] = [];
  constructor(private  route: ActivatedRoute ,
              private service: GetmovieService
              ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovieId({id: {id}});
  }
  // tslint:disable-next-line:typedef
  async getMovieId({id}: { id: any }){
    const data2 = await this.service.getProduct(id);
    data2.subscribe((res: any ) => {
this.list.push(res);
      });
  }
}
