import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  movies: Movie[] = [];
  loading: boolean = true;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    //SETTIMEOUT PARA VER EL SPINNER, simplemente, esto no estaria en una web normal
    setTimeout(() => {
      this.cardService.getAllMovies().subscribe({
        next: (movies: Movie[]) => {
          this.movies = movies;
          this.loading = false;
        },
        error: (err: any) => {
          console.error('Error fetching movies:', err);
          this.loading = false;
        }
      });
    }, 1000);
  }
}
