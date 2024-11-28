import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { Demographie } from '../model/demographie.model';

@Component({
  selector: 'app-recherche-par-demographie',
  templateUrl: './recherche-par-demographie.component.html'
})
export class RechercheParDemographieComponent implements OnInit {

  manga: Manga[] = []; 
  demographie: Demographie[] = [];
  IdDemographie: number =0; 

  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
    this.mangaService.listeDemographie(). subscribe(cats => {
      this.demographie = cats._embedded.demographies; console.log(cats);
    })

  }
  onChange(): void {
    this.mangaService.rechercherParManga(this.IdDemographie). subscribe(prods =>{
      this.manga=prods
    });
  } 
  chargerMangas(){ 
    this.mangaService.listeManga().subscribe(prods => { 
      console.log(prods); 
      this.manga = prods; 
    }); } 
  supprimerManga(p: Manga) { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
    this.mangaService.supprimerManga(p.idManga).subscribe(() => { 
        console.log("produit supprimé");
        this.chargerMangas(); 
      }); }
     
}
