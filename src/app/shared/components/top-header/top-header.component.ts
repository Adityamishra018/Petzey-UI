// import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
// //import { MsalService } from '@azure/msal-angular';  //by pooja
// import { UserModel } from '../../Model/user-model.model';
// import { LoginService } from '../../Service/login.service';
// import { SharedService } from '../../Service/shared.service';


// @Component({
//   selector: 'app-top-header',
//   templateUrl: './top-header.component.html',
//   styleUrls: ['./top-header.component.scss'],
// })
// export class TopHeaderComponent implements OnInit {
//   @Input('compName') compName: string = '';

//   user!: UserModel;
//   // username: string;
//   value: any = {};
//   arr: any[] = [];
//   username!: string;
//   activePageName: any;
 
//   constructor(
//     //private authService: MsalService, //by pooja
//     private router: Router,
//     private sharedService: SharedService,
//     private data:LoginService
//   ) {
//     this.user=new UserModel();
//   }

//   ngOnInit(): void {
//     this.activePageName = localStorage.getItem("activePageName")
//     this.getUser();
//   }
//   logOutApplication(selectedValue: string) {
//     //console.log(selectedValue);
//     if (selectedValue == 'logout') {
//       console.log('Logout');
//       //this.authService.logout(); //by pooja
//       this.router.navigate(['../CMD/login']);
//       localStorage.clear();
//       sessionStorage.clear();
//     }
//   }
//   select(value:String){
//     console.log("hi")
//     this.router.navigate(['/landing']);
//   }
//   getUser() {
//    // console.log(this.authService.getAccount().name); //by pooja
//     //this.username = this.authService.getAccount().name; //by pooja

//     this.data.getData().subscribe((value: any) => {
//       this.value = value;
//       console.log(this.value);
//       for (let i = 0; i < this.value.length; i++) {
//         // this.arr.push(this.value[i]);
//         if (this.value[i].username === this.username) {
//           console.log(this.value[i].username);
//           localStorage.setItem('activePageName', 'dashboard');
//           localStorage.setItem('doctor_id', this.value[i].id);
//           localStorage.setItem('doctor_name', this.value[i].doctor_name);
//           localStorage.setItem(
//             'doctor_email_id',
//             this.value[i].doctor_email_id
//           );

//           localStorage.setItem('username', this.value[i].doctor_email_id);
//         }
//       }
//       var username = localStorage.getItem('doctor_id');
//     this.sharedService.getDoctor(username).subscribe((res: any) => {
//       this.user = res;
//     });
//     });

//     //console.log(this.authService.getAccount.name);
//     // console.log(this.authService.getAccount().name);

//     // console.log(this.authService.getAccount().sid);
//     // console.log(this.authService.getAccount().userName);
//     // console.log(this.authService.getAccount().accountIdentifier);
//     // console.log(this.authService.getAccount().homeAccountIdentifier);
//     // console.log(this.authService.getAccount().idToken);
//     // console.log(this.authService.getAccount().idTokenClaims);
//     // console.log(this.authService.getAccount().environment);

//     // var username = localStorage.getItem('doctor_id');
//     // this.sharedService.getDoctor(username).subscribe((res: any) => {
//     //   this.user = res;
//     // });
//   }
// }

import { Component, OnInit } from '@angular/core';

import { faBell,faChevronDown } from '@fortawesome/free-solid-svg-icons';



@Component({

  selector: 'app-top-header',

  templateUrl: './top-header.component.html',

  styleUrls: ['./top-header.component.scss']

})

export class TopHeaderComponent implements OnInit {

  img:any='https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png';

  dropdwon='dropdwon'

  faBell=faBell

  faChevronDown=faChevronDown

  constructor() { }

 ngOnInit(): void {

  }

  drop(dropdwon:string){



    if(dropdwon===''){

     console.log(dropdwon)

      this.dropdwon='dropdwon'
 }

    else{

      console.log(dropdwon)

      this.dropdwon=''

    }

  }

}
