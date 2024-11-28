import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { MangaService} from '../services/manga.service';
import { Manga } from '../model/manga.model';
import { Demographie } from '../model/demographie.model';


@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.component.html',
  styles: []
})
export class UpdateMangaComponent implements OnInit {
  demographie! : Demographie[];
  updatedCatId! : number;
  currentManga: Manga = new Manga();
  constructor(private activatedRoute: ActivatedRoute, private  router :Router,private mangaService: MangaService) { 

  }
  ngOnInit() : void{
    this.mangaService.listeDemographie(). subscribe(cats => {this.demographie = cats._embedded.demographies; console.log(cats)});

    this.mangaService.consulterProduit(this.activatedRoute.snapshot.params['id']). subscribe( prod =>{ 
      this.currentManga = prod;
    } ) ;
  }
  updateManga() {
    this.currentManga.demographie = this.demographie. find(cat => cat.idCat == this.updatedCatId)!;
    this.mangaService.updateProduit(this.currentManga).subscribe(prod => { 

    this.router.navigate(['mangas']); 
  } ); }
  

}
