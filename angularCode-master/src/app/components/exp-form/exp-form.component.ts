import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-exp-form',
  templateUrl: './exp-form.component.html',
  styleUrls: ['./exp-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ExpFormComponent implements OnInit {
  @Input() passedKey: string;

  // Reative form. One form group contains all our Form Controls
  // Remember to write Angular Form with HTML

  experience: any;
  buttonText: any;

  expFormGroup = new FormGroup( {
    company: new FormControl(),
    dateFrom: new FormControl(),
    dateTo: new FormControl(),
    position: new FormControl(),
    assignments: new FormControl(),
    techniques: new FormControl(),
  });

  constructor(
    private dbService: DbService
  ) {
    this.buttonText = this.expFormGroup.status;
   }

  ngOnInit() {
    console.log(this.passedKey);
    if ( typeof this.passedKey !== 'undefined') {
      
      this.dbService.getExperienceByKey(this.passedKey).subscribe( exp => {
        
        this.experience = exp;

        this.expFormGroup.reset({
          company: this.experience.company,
          dateFrom: this.experience.dateFrom,
          dateTo: this.experience.dateTo,
          position: this.experience.position,
          assignments: this.experience.assignments,
          techniques: this.experience.techniques,
        });
      });
    } else {
      alert('undefined key');
    }
  }

  addFormValue() {
    // Call addExperience method in our Dependancy Injection service, DbService 
    if (this.expFormGroup.status === 'VALID') {
      if ( typeof this.passedKey !== 'undefined') {
        this.dbService.updateExperience(this.passedKey, this.expFormGroup.value);
      } else {
        alert('funkar');
        this.dbService.addExperience(this.expFormGroup.value);      
      }
    }
  }

  getBool() {
    if (this.expFormGroup.status === 'VALID') {
      return true;
    } else {
      return false;
    }
  }
}
