import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getRestaurantApi() {
    return this.httpClient.get("assets/json/restaurant-api.json");
  }
}
