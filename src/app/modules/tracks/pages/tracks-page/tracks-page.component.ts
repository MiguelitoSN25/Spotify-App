import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit , OnDestroy {
  trackTrending: Array<TrackModel> = []
  tracksRandom:Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService : TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()

  }
  
async loadDataAll(): Promise<any>{
 this.trackTrending = await this.trackService.getAllTracks$().toPromise()
}

  loadDataRandom():void{
    this.trackService.getAllRandom$()
    .subscribe((Response: TrackModel[]) => {
     this.tracksRandom = Response
    })
  }
  ngOnDestroy():void{
  }

}
