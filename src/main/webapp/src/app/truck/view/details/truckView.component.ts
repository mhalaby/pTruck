import { Component, OnInit } from '@angular/core';
import {TruckService} from '../../services/truckservice';
import { Truck } from '../../model/truck';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './truckView.component.html',
  styleUrls: ['./truckView.component.scss']
})
export class TruckViewComponent implements OnInit {
  truck: Truck;
  isLoadingResults = true;

  constructor(private api: TruckService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.api.findOne(id).subscribe(res => {
      this.truck = res;
      console.log(this.truck);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
