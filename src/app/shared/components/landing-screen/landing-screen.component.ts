import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Service/login.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss'],
})
export class LandingScreenComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  isLoginFailed:boolean=false;
  errorMessage: any;

  constructor(private fb: FormBuilder, private router: Router,private service:LoginService) {}
  cmd: boolean = true;
  // constructor(private router: Router) { }

  ngOnInit(): void {}
  display() {
    this.cmd = !this.cmd;
  }
  form: any = {
    username: null,
    password: null
  };

data:any=[];
  onSubmit() {
    console.warn(this.loginForm.value);
   // alert('login Successful');
   const { username, password } = this.form;
    this.service.login(username,password)
    .subscribe(response=>{
      this.data=response;
      console.log(this.data);
      this.isLoginFailed = false;

      localStorage.setItem('user',this.loginForm.value)
      this.router.navigate(['/viewallappointments'])
      //this.data.username
      if(response!=null){
        alert('login Successful');
      }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
}

  
  nav() {
    //this.router.navigateByUrl('/CMD/appointment/adda');
    this.router.navigateByUrl('/CMD/appointment/viewallappointments');
  }

  // getData(){

  // }
}



