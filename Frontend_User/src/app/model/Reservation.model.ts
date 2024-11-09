import { Terrain } from "./Terrain.model";
import { User } from "./user.model";

export interface Resrevation{
    id:number;
    date_reservation:string;
    heure_reservation:number;
    terrain:Terrain;
    user:User;
}