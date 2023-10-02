import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-ujlako',
  templateUrl: './ujlako.component.html',
  styleUrls: ['./ujlako.component.css']
})
export class UjlakoComponent {
allat:any={}
lakohelyek:any
gondozok:any

constructor(private base:BaseService, private router:Router){

  // this.base.getData('allatok').subscribe(
  //   (adatok)=>this.allatok=adatok
  // )

  this.base.getData('lakhelyek').subscribe(
    (adatok)=>this.lakohelyek=adatok
  )
  this.base.getData('gondozok').subscribe(
    (adatok)=>this.gondozok=adatok
  )
}

kuldApi(){
  this.base.newAnimal(this.allat).subscribe(
  {
    next:()=> this.router.navigate(['/allataink']),
    error:(e)=>console.log(e)
  }
  )
}

}
