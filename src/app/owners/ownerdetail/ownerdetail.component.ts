import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {Owner} from '../../shared/models/owner';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ownerdetail',
  templateUrl: './ownerdetail.component.html',
  styleUrls: ['./ownerdetail.component.css']
})
export class OwnerdetailComponent implements OnInit {

  constructor(private ownerservice: OwnerService, private route: ActivatedRoute) { }
owner: Owner;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.ownerservice.getById(id).subscribe(o => {
      this.owner = o; } );
  }

  delete(id: number) {
    this.ownerservice.delete(id);
  }
}
