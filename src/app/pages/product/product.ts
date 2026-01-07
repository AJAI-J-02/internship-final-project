import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservices } from '../../apiservices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true,
})
export class Product {
  products:any[]=[];
  loading=true;

  constructor(private apiservice:Apiservices,private cdr:ChangeDetectorRef){}

  ngOnInit():void // for loading the page to angular
  {
    this.apiservice.getproduct().subscribe((data:any) =>{//for getting the data from apiservice function and store(subscribing in the data) in the data
    console.log('API RESPONSE:', data); 
    this.products = data.products;  
    this.loading=false;
    this.cdr.detectChanges()
      
     

    });

}

}
