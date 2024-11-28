import { Demographie } from './../model/demographie.model';
import { Injectable } from '@angular/core';
import { Manga } from '../model/manga.model';
import { UpdateMangaComponent } from '../update-manga/update-manga.component';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DemographieWrapper } from '../model/mangaWrapped.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};


@Injectable({
  providedIn: 'root'
})
export class MangaService {
  apiURL: string ='http://localhost:8082/mangas/api';
  apiURLCat: string = 'http://localhost:8082/mangas/cat';


  mangas!: Manga[];
  manga! :Manga;
  demographie! :Demographie[];
  mangaRecherche! : Manga[];

  

  constructor(private http : HttpClient) { 
    /* this.demographie=[
     {idCat:1 , nomCat: "shonen"},
      {idCat:2 , nomCat: "seinen"},
      {idCat:3 , nomCat: "shojo"},
      {idCat:4 , nomCat: "children"}
    ] */
   /* this.mangas = [
      { idManga: 1, nomManga: "Dragon ball", Mangaka: "Akira Toriyama", prixManga: 260000, dateCreation: new Date("1984-11-20"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'dragonball@example.com', password: 'password123' },
      { idManga: 2, nomManga: "HXH", Mangaka: "Yoshihiro Togashi", prixManga: 86000, dateCreation: new Date("1998-03-03"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'hxh@example.com', password: 'password456' },
      { idManga: 3, nomManga: "Detective conan", Mangaka: "Gosho Aoyama", prixManga: 270000, dateCreation: new Date("1994-01-05"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'detectiveconan@example.com', password: 'password789' },
      { idManga: 4, nomManga: "One piece", Mangaka: "Eiichiro Oda", prixManga: 516600, dateCreation: new Date("1997-07-22"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'onepiece@example.com', password: 'password101' },
      { idManga: 5, nomManga: "Naruto", Mangaka: "Masashi Kishimoto", prixManga: 250000, dateCreation: new Date("1999-09-21"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'naruto@example.com', password: 'password102' },
      { idManga: 6, nomManga: "Attack on Titan", Mangaka: "Hajime Isayama", prixManga: 140000, dateCreation: new Date("2009-09-09"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'attackontitan@example.com', password: 'password103' },
      { idManga: 7, nomManga: "20th century boys", Mangaka: "Naoki Urasawa", prixManga: 36000, dateCreation: new Date("1999-10-04"), demographie: { idCat: 2, nomCat: "seinen" }, email: '20thcenturyboys@example.com', password: 'password104' },
      { idManga: 8, nomManga: "Homunculus", Mangaka: "Hideo Yamamoto", prixManga: 5120, dateCreation: new Date("2003-03-17"), demographie: { idCat: 2, nomCat: "seinen" }, email: 'homunculus@example.com', password: 'password105' },
      { idManga: 9, nomManga: "Sailer moon", Mangaka: "Naoko Takeuchi", prixManga: 13.36, dateCreation: new Date("1991-02-06"), demographie: { idCat: 3, nomCat: "shojo" }, email: 'sailormoon@example.com', password: 'password106' },
      { idManga: 10, nomManga: "Berserk", Mangaka: "Kentaru miura", prixManga: 60000, dateCreation: new Date("1989-08-25"), demographie: { idCat: 2, nomCat: "seinen" }, email: 'berserk@example.com', password: 'password107' },
      { idManga: 11, nomManga: "Monster", Mangaka: "Naoki Urasawa", prixManga: 20000, dateCreation: new Date("1994-12-05"), demographie: { idCat: 2, nomCat: "seinen" }, email: 'monster@example.com', password: 'password108' },
      { idManga: 12, nomManga: "Vagabond", Mangaka: "Takehiko Inoue", prixManga: 82402, dateCreation: new Date("1998-09-03"), demographie: { idCat: 2, nomCat: "seinen" }, email: 'vagabond@example.com', password: 'password109' },
      { idManga: 13, nomManga: "Bleach", Mangaka: "Tite Kubo", prixManga: 130000, dateCreation: new Date("2001-08-07"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'bleach@example.com', password: 'password110' },
      { idManga: 14, nomManga: "Fullmetal Alchemist", Mangaka: "Hiromu Arakawa", prixManga: 80.12, dateCreation: new Date("2001-07-12"), demographie: { idCat: 1, nomCat: "shonen" }, email: 'fullmetalalchemist@example.com', password: 'password111' }
    ];  */
    
  }


  listeManga(): Observable<Manga[]>{
     return this.http.get<Manga[]>(this.apiURL);
  }
  listeDemographie():Observable<DemographieWrapper>{ 
    return this.http.get<DemographieWrapper>(this.apiURLCat); 
  }

  consulterDemographie(id:number): Demographie{ 
    return this.demographie.find(cat => cat.idCat == id)!;
  }
    
  

  ajouterManga(manga : Manga){
    this.mangas.push(manga);
    
  }
  ajouterProduit( prod: Manga):Observable<Manga>{ 
    return this.http.post<Manga>(this.apiURL, prod, httpOptions);
  }


  supprimerManga(id : number) { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.delete(url, httpOptions); 
  }
  consulterProduit(id: number): Observable<Manga> { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.get<Manga>(url); 
  }
    trierManga(){
      this.mangas = this.mangas.sort((n1,n2) => {
        if (n1.idManga! > n2.idManga!) {
        return 1;
      }
      if (n1.idManga! < n2.idManga!) {
        return -1;
      }
      return 0;
      });
    }
    rechercherParManga(idCat: number): Observable<Manga[]>{
      const url = `${this.apiURL}/manscat/${idCat}`; 
      return this.http.get<Manga[]>(url);
    }

    updateProduit(prod :Manga) : Observable<Manga> { 
      return this.http.put<Manga>(this.apiURL, prod, httpOptions); 
    }

    getAllMangas(): Manga[] {
      return this.mangas;
    }

    rechercherParNom(nom: string):Observable< Manga[]> { 
      const url = `${this.apiURL}/mansByName/${nom}`;
       return this.http.get<Manga[]>(url); 
    }


}
