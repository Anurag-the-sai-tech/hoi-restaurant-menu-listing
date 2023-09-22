import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  restaurantData: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getRestaurantData();
  }

  getRestaurantData() {
    this.apiService.getRestaurantApi().subscribe((response: any) => {
      console.log('Response: ', response);
      this.restaurantData = response;
    }, (error) => {
      console.log('Error: ', error);
    })
  }
}
