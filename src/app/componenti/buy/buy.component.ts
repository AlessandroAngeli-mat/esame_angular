import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{

  title!: any
  @Input() card!:string

  constructor(private route: ActivatedRoute,private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('title')!
    })
  }



}
