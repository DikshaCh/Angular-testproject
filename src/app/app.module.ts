import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './staticpages/about/about.component';
import { HomeComponent } from './staticpages/home/home.component';
import { MainComponent } from './layouts/main/main.component';
import { AlbumsComponent } from './artists/albums/albums.component';
import { ArtistInfoComponent } from './artists/artist-info/artist-info.component';
import { SongInfoComponent } from './artists/song-info/song-info.component';
import { AlbumListingComponent } from './artists/album-listing/album-listing.component';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { CustomPipeComponent } from './staticpages/custom-pipe/custom-pipe.component';
import { DirectivesComponent } from './staticpages/directives/directives.component';
import { UnderlineDirective } from './directives/underline.directive';
import { TempateFormsComponent } from './forms/tempate-forms/tempate-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MainComponent,
    AlbumsComponent,
    ArtistInfoComponent,
    SongInfoComponent,
    AlbumListingComponent,
    ReverseStrPipe,
    CustomPipeComponent,
    DirectivesComponent,
    UnderlineDirective,
    TempateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
