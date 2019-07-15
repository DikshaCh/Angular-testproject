import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { SongsDataService } from '../../services/songs-data.service';

@Component({
  selector: 'app-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.css']
})
export class AlbumListingComponent implements OnInit {
  albums: any[];
  @Output() albumEvent = new EventEmitter<object>();
  constructor(private SongsDataService: SongsDataService) { }

  ngOnInit() {
  	this.loadAlbums();
  }
  loadAlbums() {
    this.SongsDataService.getArtistAlbums().subscribe(result => {
      this.albums = result;
      console.log(this.albums)
    });
  }
}
