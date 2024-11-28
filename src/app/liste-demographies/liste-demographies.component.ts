import { Component, OnInit } from '@angular/core';
import { MangaService } from '../services/manga.service';
import { Demographie} from '../model/demographie.model';


@Component({
  selector: 'app-liste-demographies',
  templateUrl: './liste-demographies.component.html'
})
export class ListeDemographiesComponent implements OnInit {
  demographie: Demographie[] =[]; 
  constructor(private mangaService : MangaService) { } 
  ngOnInit(): void { 
    this.mangaService.listeDemographie(). subscribe(cats => {
      this.demographie = cats._embedded.demographies; 
      console.log(cats); 
    }); 
    
  }
}
  
  


