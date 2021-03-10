import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public version!: number;
  constructor(private vs: VersionService) {
    this.vs.v2$.subscribe((param) => {
      this.version = param;
    });
  }

  ngOnInit(): void {}
}
