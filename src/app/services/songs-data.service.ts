import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsDataService {

  apiUrl: string = environment.API_ENDPOINT;

  artistId: number = 16586443;
  constructor( private http: HttpClient ) { }

  getArtistAlbums(): Observable<any> {
    console.log(this.apiUrl);
     return this.http.get<any>(`${this.apiUrl}/?id=${this.artistId}&entity=album`);
  }

}
