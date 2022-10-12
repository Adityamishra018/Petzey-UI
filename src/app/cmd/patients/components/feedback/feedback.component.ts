import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FeedbackFormService } from '../../services/feedbackform.service';
import { ViewPatientsAppoinmentsComponent } from '../view-patients-appoinments/view-patients-appoinments.component';



@Component({
selector: 'app-feedback',
templateUrl: './feedback.component.html',
styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
@Input() issEdit: any;
@Input() feedBackData: any;



onSubmit(dataForm1: any) {



console.warn(dataForm1);



}





public doctorForm1 = this.formBuilder.group({
q1: [parseInt(''), Validators.required],
q2: [parseInt(''), Validators.required],
q3: [parseInt(''), Validators.required],
q4: [parseInt(''), Validators.required],
comment: ['', Validators.required]



})
public class1 = "main";
public class2 = "radio-inline";
public class3 = "color";
public class4 = "para";
public class5 = "button";
public class6 = "section";



public onedit = false;
public formTest = true;
public data!: any
public flag: boolean = true
private url!: String
public getid:any;
public uniqueData:any;




constructor(private formBuilder: FormBuilder, private router: Router,
private service: FeedbackFormService, private activeRoute: ActivatedRoute, public isEditedForm: ViewPatientsAppoinmentsComponent, public getFeedBackData: ViewPatientsAppoinmentsComponent) { }



dataForm1: object = {
q1: null,
q2: null,
q3: null,
q4: null,
Comment: 'string',
uniqueId:null
};



isEdited: boolean = false;
isEdit: any = this.isEditedForm
Q1: any;
Q2: any;
Q3: any;
Q4: any;
disableState: any = null;
textarea: any = document.querySelector('textarea');
feedbackComment: any = "";
feedBackValue: any;
getFeedBackValue: any;
formName:any;


submitform() {



this.isEdited = true;

// if (this.url === 'create') {
if (this.doctorForm1.valid) {
const keys = ["q1", "q2", "q3", "q4", "comment"]
const demo2: any = {}
Object.values(this.doctorForm1.value).map((a: any, i) => {
demo2[keys[i]] = keys[i] !== "comment" ? parseInt(a) : a
})
this.uniqueData = Math.random();
demo2.uniqueId = this.uniqueData

let data = this.doctorForm1.value
this.service.create(demo2).subscribe(response => {
console.log(response, "from database")
this.getid=response.id;
localStorage.setItem("id", JSON.stringify(this.getid))

this.getFeedBackValue = response.data;
this.formTest = response;

},

error => { console.log(error, "from database error") })
this.formTest = false

alert("Your Feedback will be submitted")





this.router.navigate(["/viewpatientsapp"])
} else {
alert("Please fill answers for all the questions")
}



}
editForm(){
this.disableState=null
}



onUpdate(comment: string){
const keys = ["q1", "q2", "q3", "q4", "comment"]
const updateData: any = {}
this.feedbackComment=comment;
Object.values(this.doctorForm1.value).map((a: any, i) => {
updateData[keys[i]] = keys[i] !== "comment" ? parseInt(a) : a
})
updateData.comment=comment;
debugger
this.service.update(updateData, JSON.parse(localStorage.getItem("id") || "{}")).subscribe(response => {
console.log(response, "from database")
this.getFeedBackValue = response.data;
this.formTest = response;
})
alert("Your Feedback will be submitted")
}



ngOnInit(): void {
this.url = this.router.url.slice(1)
if (this.url === 'edit') {
this.onedit = true;
}
if (this.url === 'view') {
this.flag = false;
this.onedit = true;
}




if(this.issEdit){
console.log(this.feedBackData);
this.disableState=this.issEdit
debugger
this.service.view(JSON.parse(localStorage.getItem("id") || "{}")).subscribe(response => {
  this.formName = null;
console.log(this.formTest,"view")
this.feedBackValue = response;
this.Q1=response.q1;
this.Q2=response.q2;
this.Q3=response.q3;
this.Q4=response.q4;
this.feedbackComment = response.comment;
this.formName=null;
});



}else {
this.disableState=null
this.dataForm1 = {};
this.Q1=null;
this.Q2=null;
this.Q3=null;
this.Q4=null;
this.feedbackComment = "";
this.formName="comment";
}



}
}