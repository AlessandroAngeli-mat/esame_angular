import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ServizioProvaService } from './servizi/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'corso-angular';

  constructor(private servizioProva: ServizioProvaService){}

  ngOnInit(){

  }
}
