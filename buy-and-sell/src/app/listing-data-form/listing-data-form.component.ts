import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit{
  @Input() buttonText;
  name:string='';
  description:string='';
  price:string='';
  
  constructor(
    private router:Router,
  ){}
  
  ngOnInit():void{
  
  }
  onSubmit():void{
    alert(`Creating a new Listing...`);
    this.router.navigateByUrl('/myListings')
  }
}
