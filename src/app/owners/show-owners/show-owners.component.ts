import { Component, OnInit } from '@angular/core';
import {Owner} from '../../shared/models/owner';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-show-owners',
  templateUrl: './show-owners.component.html',
  styleUrls: ['./show-owners.component.css']
})
export class ShowOwnersComponent implements OnInit {

  constructor(private service: OwnerService) { }
owners: Owner[];
  ngOnInit() {
    this.service.getOwners().subscribe(list => {this.owners = list; } );
  }

}
