import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DbService } from '../../services/db.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-experiences',
  templateUrl: './list-experiences.component.html',
  styleUrls: ['./list-experiences.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListExperiencesComponent implements OnInit {

  experiences: any;
  keyArray: any;
  experienceToEdit: any;
  exp: any;

  constructor( private dbService: DbService) { }

  ngOnInit() {
    this.experiences = this.dbService.getExperiencesIncludingKey();
  }
  
  deleteExp(key) {
    this.dbService.deleteExp(key);
  }
}
