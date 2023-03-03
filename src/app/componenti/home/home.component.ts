import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private firebase: FirebaseService) {}

  dati!: any
  events: string[] = [];
  opened!: boolean;

  ngOnInit(): void{
    this.firebase.getData(this.firebase.urlGames).subscribe((data:any) => {
      this.dati = data
    })
  }

}
