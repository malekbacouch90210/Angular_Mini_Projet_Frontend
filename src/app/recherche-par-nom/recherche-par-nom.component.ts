import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { Demographie } from '../model/demographie.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {
  manga: Manga[] = []; 
  demographie: Demographie[] = [];
  IdDemographie: number = 0; 
  allManga: Manga[] = []; // Liste complète de mangas
  searchTerm !: string;
  nomManga: string = '';
  constructor(private mangaService: MangaService) { }

  ngOnInit(): void {
   /*  this.demographie= this.mangaService.listeDemographie(); */
    this.allManga = this.mangaService.getAllMangas(); // Populate with all mangas
    this.manga = [...this.allManga]; // Initialize `manga` with all mangas
    this.chargerMangas(); 
  }
  rechercherMans(){ 
    this.mangaService.rechercherParNom(this.nomManga). subscribe(prods => { 
      this.manga = prods; console.log(prods)
    }); }

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
  
  onKeyUp(filterText: string): void {
    this.manga = this.allManga.filter(item => item.nomManga.toLowerCase().includes(filterText.toLowerCase()));
  }
}

