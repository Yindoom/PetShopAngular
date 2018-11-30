import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {Pet} from '../../shared/models/pet';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-petdetails',
  templateUrl: './petdetails.component.html',
  styleUrls: ['./petdetails.component.css']
})
export class PetdetailsComponent implements OnInit {

  pet: Pet;
  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.petService.getById(id).subscribe(p => {
      this.pet = p; } );
  }
delete(id: number) {
    return this.petService.delete(id).subscribe(o => { this.router.navigateByUrl('/pets'); } );
  }
}
