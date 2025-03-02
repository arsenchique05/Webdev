import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from "../album";
import { AlbumService } from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  album: Gallery;
  gallery: Gallery[];
  loaded: boolean;

  constructor(private route: ActivatedRoute, private postService: AlbumService) {
    this.album = {} as Gallery;
    this.loaded = true;
    this.gallery = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.getGallery(id);
      }
    });

  }


  getGallery(id: number): void {
    this.loaded = false;
    this.postService.getGallery(id).subscribe((album) =>{
      this.gallery = album as Gallery[];
      this.loaded = true;
    })
  }
}
