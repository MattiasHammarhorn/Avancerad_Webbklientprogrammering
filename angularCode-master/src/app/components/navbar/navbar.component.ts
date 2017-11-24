import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;
  public authorizationCollapsed = true;
  public user: any;
  public userObservable: any;

  loginFormGroup = new FormGroup( {
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private modalService: NgbModal,
    private userService: UserService
    
  ) { }

  ngOnInit() {

    // Just for testing. Make sure to remove later.
    this.loginFormGroup.reset({
      email: 'mattias@hammarhorn.se',
      password: 'Storflakis573'
    })
  }

  open(content) {
    this.modalService.open(content);
  }

  login() {
    this.userService.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password);
    this.userObservable = this.userService.getUserObservable().onAuthStateChanged( user => {
      if (user) {
        this.user = user;
        console.log(user);
        console.log(user.email);
        
      } else {
        alert('login function says: not logged in');
      }
    });
  }

  logOut() {
    this.userService.logOut();
  }
}
