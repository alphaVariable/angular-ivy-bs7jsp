import { Component, OnInit } from '@angular/core';
import { ApicallerService } from '../apicaller.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  apiresponse: any;
  editRes: any;
  constructor(private _apicaller: ApicallerService) {}

  ngOnInit(): void {
    // get data from api using service
    this._apicaller.getData().subscribe(
      (data: any[]) => {
      this.apiresponse = data;
    });
  }
}
