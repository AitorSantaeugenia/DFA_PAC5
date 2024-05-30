import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image!: Image;

  constructor(
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Identifier -->", identifier);

    if (identifier) {
      this.imagesService.getImageById(identifier).subscribe({
        next: (image) => {
          if (!image) {
            this.router.navigateByUrl("/");
          } else {
            this.image = image;
            console.log("Image -->", this.image);
          }
        },
        error: (err) => {
          console.error("Error fetching image:", err);
          this.router.navigateByUrl("/");
        }
      });
    } else {
      this.router.navigateByUrl("/");
    }
  }
}