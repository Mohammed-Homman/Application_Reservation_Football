import { Terrain } from "./Terrain.model";
import { Utilisateur } from "./utilisateur.model";

export interface Resrevation{
    id_reservation:number;
    dateReservation:string;
    heure_reservation:string;
    terrain:Terrain;
    statut:string;
    utilisateur:Utilisateur;
}