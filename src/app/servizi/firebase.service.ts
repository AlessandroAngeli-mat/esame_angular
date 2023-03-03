import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  urlGames = 'https://per-poveri-default-rtdb.europe-west1.firebasedatabase.app/games.json'
  urlDb = 'https://per-poveri-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private http:HttpClient) { }

  insertData(url:string, body:{}){
    return this.http.post(url, body);
  }

  getData(url:string){
    return this.http.get(url)
  }

  getReviews(url:string, title:string){
    return this.getData(url + title + '.json')
  }
}
