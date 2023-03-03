import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-installa',
  templateUrl: './installa.component.html',
  styleUrls: ['./installa.component.css']
})
export class InstallaComponent {
  given:boolean = false
  feedbackform!: FormGroup

  constructor(private firebase: FirebaseService, private http: HttpClient) {}

  onClick() {
    this.given = true
  }
}

