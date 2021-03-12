import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$: Subject<Order[]> = new Subject<Order[]>();
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshSubject();
  }

  // get collection
  get collection(): Subject<Order[]> {
    return this.collection$;
  }

  public refreshSubject() {
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe((data) => {
      this.collection$.next(data);
    });
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
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // delete item in collection
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`);
  }

  // get item by id in collection
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
