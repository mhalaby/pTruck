import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruckService } from '../../services/truckservice';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-truck-create',
  templateUrl: './create-view.component.html',
  styleUrls: ['./create-view.component.scss']
})
export class TruckCreateComponent implements OnInit {

  truckForm: FormGroup;
  truck_name: string;
  truck_desc: string;
  isLoadingResults = false;

  constructor(private router: Router, private truckService: TruckService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.truckForm = this.formBuilder.group({
      'name': [],
      'description': []
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.truckService.create(form)
      .subscribe(res => {
        const id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
