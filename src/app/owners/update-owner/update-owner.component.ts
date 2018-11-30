import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DateFormatterService} from '../../shared/services/date-formatter.service';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.css']
})
export class UpdateOwnerComponent implements OnInit {
  id: number;
  updateOwnerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    birthdate: new FormControl(''),
  });
  constructor(private formatter: DateFormatterService,
              private service: OwnerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe(o => {
      this.updateOwnerForm.patchValue({
        firstName: o.firstName,
        lastName: o.lastName,
        email: o.email,
        birthdate: this.formatter.format(o.birthdate)
      });
      this.id = o.id;
    });
  }
  save() {
    const owner = this.updateOwnerForm.value;
    this.service.updateOwner(owner, this.id).subscribe(o => { this.router.navigateByUrl('/ownerdetail/' + o.id); } );
  }
}
