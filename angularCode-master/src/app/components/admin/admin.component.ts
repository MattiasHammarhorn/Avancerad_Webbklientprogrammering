import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  key: string;
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  this.key = this.activatedRoute.snapshot.params['key'];
  }
}
