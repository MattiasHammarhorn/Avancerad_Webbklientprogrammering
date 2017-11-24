import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
// Look up rxjs Observable on your own if you want to know more
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbService {

  experienceListRef: AngularFireList<Experience>;
  experienceObjectRef: AngularFireObject<Experience>;

  firebase: any;

  constructor( private db: AngularFireDatabase
  ) {
    this.experienceListRef = db.list('experiences');
    this.experienceObjectRef = db.object('experiences');
    this.firebase = firebase;
   }

   public addExperience(exp: Experience) {
     this.experienceListRef.push(exp);
   }

   public getExperiences() {
     return this.experienceListRef.valueChanges();
   }

   public getExperiencesIncludingKey() {
    // Use snapshotChanges().map() to store the key

    return this.experienceListRef.snapshotChanges().map( changes => {
       return changes.map(c => ({
        // Attacj the key to our experience object ( using... )
        key: c.payload.key, ...c.payload.val()
       }));
     });
   }

   public getExperienceByKey(key : string) {
    return this.db.object('experiences/' + key).valueChanges();
  }

  public deleteExp(key : string){
    this.experienceListRef.remove(key);
    }

  updateExperience(key: string, formData: any): void {
    const promise = this.db.object('experiences/' + key).set(formData);
    promise.then(_ => alert('success'))
      .catch(err => alert(err));
  }
}

interface Experience  {
  company: string;
  dateFrom: FormattedDate;
  dateTo: FormattedDate;
  position: string;
  assignments: string;
  techniques: string;
}

interface FormattedDate {
  year: number;
  month: number;
  day: number;
}
