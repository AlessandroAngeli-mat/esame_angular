import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent implements OnInit{
  title!: string
  reviews:any
  video!:any
  urlLike = "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"
  urlDislike = "https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png"
  reviewform!: FormGroup
  submittato = false

  constructor(private route: ActivatedRoute,private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('title')!
    })

    this.firebase.getReviews(this.firebase.urlDb, this.title).subscribe((data:any) => {
      this.reviews = Object.values(data)
    })


    this.firebase.getData(this.firebase.urlGames).subscribe((data:any) => {
      for(let game of data){
        if(game['title'] == this.title){
          this.video = game['video']
        }
      }
    })

    this.reviewform = new FormGroup({
      user: new FormControl(null, Validators.required),
      like: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(2)])
    })
  }

  onSubmit(){
    this.firebase.insertData(this.firebase.urlDb + this.title + '.json',
    {user:this.reviewform.value.user, like:this.reviewform.value.like, description:this.reviewform.value.description}).subscribe(data => {

    })

    this.submittato = true
  }

}
