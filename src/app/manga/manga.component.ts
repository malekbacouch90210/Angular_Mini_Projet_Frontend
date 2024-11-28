import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
})
export class MangasComponent implements OnInit {

  mangas !: Manga[];
  

  constructor(private mangaService : MangaService , public authService: AuthService) {
    //this.mangas = mangaService.listeManga();
    
  }

  ngOnInit(): void { 
    this.chargerMangas(); 
  } 
  chargerMangas(){ 
    this.mangaService.listeManga().subscribe(prods => { 
      console.log(prods); 
      this.mangas = prods; 
    }); } 
  supprimerManga(p: Manga) { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
    this.mangaService.supprimerManga(p.idManga).subscribe(() => { 
        console.log("produit supprimé");
        this.chargerMangas(); 
      }); }

}