import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {

  firebase: any;
  public userEmail: string;
  user: any;
  
  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.firebase = firebase;
   }

  public login(email, password) {
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ...
    //   console.log(errorCode + ', ' + errorMessage);
    // });
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log(errorCode + ', ' + errorMessage);
    });
  }

  public logOut() {
    // firebase.auth().signOut().then(function() {
    //   // Sign-ut successful.
    //   alert('logged out successfull');
    // }).catch( error => {
    //   // An error happened.
    //   alert('error logging out');
    // });
    return this.afAuth.auth.signOut();    
    
  }

  getUserObservable() {
    // 
    return this.afAuth.auth.signOut();    
  }
}
