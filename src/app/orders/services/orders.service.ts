import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // change state item
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = { ...item };
    obj.state = state;
    // item.state = state;
    return this.update(obj);
  }

  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // add item in collection

  // delete item in collection

  // get item by id in collection
}
