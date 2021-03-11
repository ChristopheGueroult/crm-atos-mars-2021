import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';

/**
 * this intelligent component is instancied on orders route et get orders collection
 */
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public states = Object.values(StateOrder);
  /**
   * used to display collection tab in html
   */
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  /**
   * used to display version number in page
   */
  public version!: number;
  /**
   * used to unsubscribed ou our BehavioSubject in VersionService
   */
  private sub!: Subscription;
  /**
   * used for Bindig @Input() in template fullwidth component
   */
  public title = 'List Orders';
  public headers = [
    'Type',
    'Client',
    'Nb Jours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(
    private ordersService: OrdersService,
    private versionService: VersionService,
    private ref: ChangeDetectorRef
  ) {
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.sub = this.versionService.v$.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {}

  /**
   * @function
   * this function is called to pass title in french
   * @example
   * <button (click)="changeTitle()">
   */
  public changeTitle(): void {
    this.title = 'Liste des prestations';
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((res) => {
      item.state = res.state;
      // lancer manuellement un change detection ici
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
