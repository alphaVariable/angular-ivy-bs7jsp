import { Component, OnInit } from '@angular/core';
import { ApicallerService } from '../apicaller.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  apiresponse: any = {};
  constructor(
    private _apicaller: ApicallerService
  ) { }

  ngOnInit(): void {
    // get data from api using service
    this._apicaller.getData().subscribe(
      (data) => {
        this.apiresponse = data;
      }
    );
  }

}
