import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() route!: string;
  @Input() label!: string;
  @Input() hrefLink!: string;
  @Input() action!: boolean;
  @Output() submited: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public doAction(): void {
    this.submited.emit();
  }
}
