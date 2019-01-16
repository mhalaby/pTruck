import { Component, OnInit } from '@angular/core';
import { TruckService } from '../../services/truckservice';
import { Truck } from '../../model/truck';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {

  data: Truck[] = [];
  isLoadingResults = true;

  constructor(private truckService: TruckService) { }

  ngOnInit() {
    this.truckService.findAll()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
