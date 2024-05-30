import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  movies: Movie[] = [];
  isGridView: boolean = true;
  loading: boolean = true;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    //SETTIMEOUT PARA VER EL SPINNER, simplemente, esto no estaria en una web normal
    // setTimeout(() => {
      this.cardService.getAllMovies().subscribe({
        next: (movies) => {
          this.movies = movies;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching movies:', err);
          this.loading = false;
        }
      });
    // }, 1000);
  }

  switchToGridView() {
    this.isGridView = true;
  }

  switchToListView() {
    this.isGridView = false;
  }
}
