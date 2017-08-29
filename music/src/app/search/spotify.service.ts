import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";

@Injectable()
export class SpotifyService{
  static  BASE_URL: string = 'https://api.spotify.com/v1/search';

  constructor(public http:Http){

  }

  searchByTrack(query:string){
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join("&");
    let queryURL: string = `${SpotifyService.BASE_URL}/${params}`;
    return this.http.request(queryURL).map(res => res.json());
  }
}
