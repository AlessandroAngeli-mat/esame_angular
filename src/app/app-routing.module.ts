import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componenti/contact/contact.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { GiocoComponent } from './componenti/gioco/gioco.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gioco', component: ContactComponent, children: [
    {path: ':title', component: GiocoComponent}
  ]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
