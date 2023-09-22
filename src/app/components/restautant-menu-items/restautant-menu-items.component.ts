import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-restautant-menu-items',
  templateUrl: './restautant-menu-items.component.html',
  styleUrls: ['./restautant-menu-items.component.scss']
})
export class RestautantMenuItemsComponent {

  restaurantMenuData: any = [];
  index: number = 0;
  totalCartAmount: number = 0;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.index = params['id'];
      }
    )
    this.getRestaurantData();
  }

  getRestaurantData() {
    this.apiService.getRestaurantApi().subscribe((response: any) => {
      this.restaurantMenuData = response[this.index];
      console.log('restaurantMenuData: ', this.restaurantMenuData);
    }, (error) => {
      console.log('Error: ', error);
    })
  }

  addToCart(amount: number) {
    this.totalCartAmount = this.totalCartAmount + amount;
  }

  goToCart() {
    localStorage.setItem('totalAmount', this.totalCartAmount.toString());
    this.router.navigate(['/checkout']);
  }
}
