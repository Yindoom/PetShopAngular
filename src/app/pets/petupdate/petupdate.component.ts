import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PetService} from '../../shared/services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Pet} from '../../shared/models/pet';
import {OwnerService} from '../../shared/services/owner.service';
import {DatePipe} from '@angular/common';
import {DateFormatterService} from '../../shared/services/date-formatter.service';
import {Owner} from '../../shared/models/owner';

@Component({
  selector: 'app-petupdate',
  templateUrl: './petupdate.component.html',
  styleUrls: ['./petupdate.component.css']
})
export class PetupdateComponent implements OnInit {
  id: number;
  updatePetForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    colour: new FormControl(''),
    previousOwner: new FormControl(''),
    price: new FormControl(''),
    birthdate: new FormControl(''),
    sellDate: new FormControl('')
  });
  constructor(private petservice: PetService, private formatter: DateFormatterService,
              private ownerservice: OwnerService,
              private router: Router,
              private route: ActivatedRoute) { }
              owner: Owner;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.petservice.getById(this.id).subscribe(
      p => {
        this.owner = p.previousOwner;
        this.updatePetForm.patchValue({
          name: p.name,
          type: p.type,
          colour: p.colour,
          previousOwner: p.previousOwner.id,
          price: p.price,
          birthdate: this.formatter.format(p.birthdate),
          sellDate: this.formatter.format(p.sellDate)
        });
        this.id = p.id;
      }
    );
  }
  save() {
    debugger;
    const pet = this.updatePetForm.value;
    const ownerid = +this.updatePetForm.value.valueOf().previousOwner;
       this.ownerservice.getById(ownerid).subscribe(o => {
        pet.previousOwner = o;
        this.petservice.UpdatePet(pet, this.id).subscribe(p => {
          this.router.navigateByUrl('/petdetails/' + p.id);
        });
    });
  }
}
