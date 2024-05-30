import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie!: Movie;
  loading: boolean = true;
  showMoreDetails: boolean = false;

  constructor(
    private cardService: CardService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Identifier -->", identifier);

    if (identifier) {
      // SETTIMEOUT para que se vea el spinner por pantalla
      // setTimeout(() => {
        this.cardService.getMovieById(identifier).subscribe({
          next: (movie) => {
            if (!movie) {
              this.router.navigateByUrl("/");
            } else {
              this.movie = movie;
              console.log("Movie -->", this.movie);
              this.loading = false;
            }
          },
          error: (err) => {
            console.error("Error fetching movie:", err);
            this.router.navigateByUrl("/");
            this.loading = false;
          }
        });
      // }, 1000);
    } else {
      this.router.navigateByUrl("/");
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
