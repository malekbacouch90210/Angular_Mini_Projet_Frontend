import { Demographie } from "./demographie.model";

export class Manga {
    idManga! : number;
    nomManga! : string;
    Mangaka! : string;
    prixManga! : number;
    dateCreation! : Date ;
    demographie! : Demographie;
    email!: string ;
    password!:string;
}