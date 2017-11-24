import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-start',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  experiences: Observable<any[]>;
  constructor( private dbService: DbService
  ) {
   }

  ngOnInit() {

    this.experiences = this.dbService.getExperiences();
  }

}
