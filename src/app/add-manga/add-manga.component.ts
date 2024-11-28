import { Demographie } from './../model/demographie.model';
import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/manga.model';
import { MangaService } from '../services/manga.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
})
export class AddMangaComponent implements OnInit {
  mangaForm!: FormGroup;
  demographie!: Demographie[];  // Array to store Demographie objects
  newManga: Manga = new Manga(); // Declare newManga as an instance of Manga
  newIdCat!: number;  // Declare newIdCat to store the selected Demographie ID
  router: Router;

  constructor(private mangaService: MangaService, private fb: FormBuilder, private _router: Router) {
    this.router = _router;  // Initialize router properly
  }

  ngOnInit(): void {
    this.mangaForm = this.fb.group({
      nomManga: ['', Validators.required],
      Mangaka: ['', Validators.required],
      prixManga: ['', [Validators.required]],
      demographie: ['', Validators.required],
      dateCreation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.newIdCat = 2; 

    // Fetch the list of demographies from the service
    this.mangaService.listeDemographie().subscribe(cats => {
      this.demographie = cats._embedded.demographies; 
      console.log(cats);  // Log the demographies to verify data
    });
  }

  onSubmit(): void {
    if (this.mangaForm.valid) {
      const newManga: Manga = { ...this.mangaForm.value };

      console.log('Form values before submission:', this.mangaForm.value);
      console.log('Mangaka value:', newManga.Mangaka);

      // Ensure newIdCat is set before using it
      if (this.newIdCat !== null) {
        // Find and assign the selected Demographie to newManga
        const selectedDemographie = this.demographie.find(cat => cat.idCat === this.newIdCat);

        if (selectedDemographie) {
          newManga.demographie = selectedDemographie;  // Assign the correct demographie to newManga
        } else {
          console.error('Invalid Demographie selected!');
          return;  // Stop further execution if demographie is invalid
        }
      } else {
        console.error('newIdCat is not set!');
        return;  // Stop further execution if newIdCat is not set
      }

      // Call the service to add the new manga
      this.mangaService.ajouterProduit(newManga).subscribe(
        (prod) => {
          console.log(prod);
          this.router.navigate(['mangas']);  // Navigate to the 'mangas' page after submission
        },
        (error) => {
          console.error('Error while submitting the manga:', error);
        }
      );

      // Reset the form after submission
      this.mangaForm.reset();
      console.log('Form reset. Current form values:', this.mangaForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
  
  



