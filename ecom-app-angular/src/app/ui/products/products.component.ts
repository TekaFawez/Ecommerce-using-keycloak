import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public products:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get("http://localhost:8087/api/products")
    .subscribe({
      next:value =>{
        this.products=value

      },
      error:err=>{
        console.error(err);
        
      }
    })
 
  }

}
