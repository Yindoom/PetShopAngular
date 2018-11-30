import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {Pet} from '../../shared/models/pet';

@Component({
  selector: 'app-showpets',
  templateUrl: './showpets.component.html',
  styleUrls: ['./showpets.component.css']
})
export class ShowpetsComponent implements OnInit {

  pets: Pet[];
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getAllPets().subscribe(petList => { this.pets = petList; });
  }

}
