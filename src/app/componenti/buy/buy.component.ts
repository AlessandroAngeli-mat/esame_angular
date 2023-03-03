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
  price!: number
  purchased = false

  constructor(private route: ActivatedRoute,private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('title')!
    })
  }

  onPurchase(){
    this.firebase.getData(this.firebase.urlGames).subscribe((data:any) => {
      for(let dato of data){
        if(dato['title'] == this.title){
          this.price = dato['price']
          this.purchased = true
        }
      }
    })
  }



}
