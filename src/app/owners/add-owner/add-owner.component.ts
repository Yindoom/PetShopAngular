import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Owner} from '../../shared/models/owner';
import {OwnerService} from '../../shared/services/owner.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  addOwnerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    birthdate: new FormControl(''),
  });
  constructor(private service: OwnerService, private router: Router) { }

  ngOnInit() {
  }
save() {
    const owner = this.addOwnerForm.value;
    this.service.addOwner(owner).subscribe( o => {this.router.navigateByUrl(
      '/ownerdetails/' + o.id); } );
}
}
