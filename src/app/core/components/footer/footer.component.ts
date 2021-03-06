import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as moment from 'moment';
import { VersionService } from '../../services/version.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public version!: number;
  public date = moment().format('dd/mm/YYYY');
  public date2 = dayjs().format('dd/mm/YYYY');
  constructor(private vs: VersionService) {
    this.vs.v$.subscribe((param) => {
      this.version = param;
    });
  }

  ngOnInit(): void {}
}
