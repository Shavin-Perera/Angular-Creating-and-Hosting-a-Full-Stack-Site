import { Component } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent {
  listings:Listing[]=[];

  constructor(){}

  ngOnInit():void{
    this.listings=fakeMyListings;
  }
  onDeleteClicked(listingId:string):void{
    alert(`Deleting your item listing with id ${listingId}`);
  }
}
