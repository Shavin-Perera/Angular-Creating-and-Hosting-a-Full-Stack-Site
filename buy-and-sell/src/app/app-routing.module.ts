import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';

const routes: Routes = [
  {path: '', redirectTo:'/listings',pathMatch:'full'},
  {path:'listings',component:ListingsPageComponent, pathMatch:'full'},
  {path:'listings/:id',component:ListingDetailPageComponent, },
  {path:'contactPage/:id',component:ContactPageComponent,},
  {path:'editListings/id',component:EditListingPageComponent,},
  {path:'myListings',component:MyListingsPageComponent,},
  {path:'newListings',component:NewListingsPageComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
