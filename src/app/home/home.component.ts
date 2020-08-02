import { Component, OnInit } from '@angular/core';
import { TestService } from './../test.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList = []

  myForm: FormGroup;

  constructor(private test: TestService, private FB: FormBuilder){
    let formControls = {
      firstname: new FormControl('', Validators.required)
    }
    this.myForm = this.FB.group(formControls)
  }



  ngOnInit(): void {

    this.test.getAllUser().subscribe(res => {
      this.userList = res;
    }, err => {
      console.log(err)
    })

  }

  onSubmit() {
    console.log(this.myForm.value);
    
  }



}
