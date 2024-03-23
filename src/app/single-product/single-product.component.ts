import { Component,Input } from '@angular/core';
import {Product} from "../interface/product"
import { Router } from '@angular/router';
import { PrivateCardComponent } from '../private-card/private-card.component';
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [PrivateCardComponent],
templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
@Input() producti! : Product;
constructor(private router:Router ){

}

redirectProductOfId(id:number){
this.router.navigate([`/private-product`, id]);
console.log(id);

}
ngOnInit(){
  //console.log(this.producti);
  
}



}
