import { Component } from '@angular/core';
import { fakeListings } from '../fake-data';
import { ActivatedRoute,Router } from '@angular/router';
import { Listing } from '../types';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  listing?: Listing;
  email:string='';
  messege:string='';
constructor(
  private route:ActivatedRoute,
  private router:Router,
){}
ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.listing = fakeListings.find(listing => listing.id === id);
  this.messege=`hey I am Interested in your ${this.listing?.name.toLocaleLowerCase()}!`
}
sendMessege():void{
  alert('Your messege has been sent');
  this.router.navigateByUrl('/listings');
}
}
