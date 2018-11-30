import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {OwnerService} from '../../shared/services/owner.service';
import {Owner} from '../../shared/models/owner';
import {Pet} from '../../shared/models/pet';

@Component({
  selector: 'app-petadd',
  templateUrl: './petadd.component.html',
  styleUrls: ['./petadd.component.css']
})
export class PetaddComponent implements OnInit {
  addPetForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    colour: new FormControl(''),
    previousOwner: new FormControl(''),
    price: new FormControl(''),
    birthdate: new FormControl(''),
    selldate: new FormControl('')
  });

  constructor(private petservice: PetService,
              private  router: Router, private ownerservice: OwnerService) {
  }

  ngOnInit() {
  }

  save() {
    const pet = this.addPetForm.value;
    this.ownerservice.getById(this.addPetForm.controls['previousOwner'].value).subscribe(o => {
      pet.previousOwner = o;
      this.petservice.AddPet(pet).subscribe(p => {
          this.router.navigateByUrl('/petdetails/' + p.id);
        });
    });
  }
}
