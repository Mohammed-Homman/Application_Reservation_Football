import { Component } from '@angular/core';
import { TerrainService } from '../terrain.service';
import { Terrain } from '../model/Terrain.model';


@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent {
terrains:Array<Terrain>=[];
  constructor(private terrainService:TerrainService){
  
  }
  ngOnInit(){
    this.terrainService.getTerrain().subscribe({
      next:response=>{
        this.terrains=response;
        
        console.log(this.terrains[1]);
        
      }
    })
  }
}
