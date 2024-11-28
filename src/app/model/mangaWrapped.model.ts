import { Demographie } from "./demographie.model";

 
export class DemographieWrapper{ 
    _embedded!: { demographies: Demographie[]}; 
}