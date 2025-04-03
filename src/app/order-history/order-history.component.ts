import {Component, inject, OnInit, signal} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Order} from '../models/Order';
import {CurrencyPipe} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-order-history',
  imports: [
    CurrencyPipe,
    TranslatePipe
  ],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent implements OnInit {
  protected authService = inject(AuthService);
  protected orderHistory = signal<Order[] | undefined>(undefined)
  protected http = inject(HttpClient);

  ngOnInit() {
    this.getOrderHistory().subscribe({
      next: data => {
        console.log(data);
        this.orderHistory.set(data);
      }
    });
  }

  protected getOrderHistory() {
    return this.http.get<Order[]>(environment.apiUrl + "/orders/me");
  }
}
