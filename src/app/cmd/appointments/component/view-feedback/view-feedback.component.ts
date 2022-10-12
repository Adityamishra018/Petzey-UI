import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewFeedback } from '../../Model/ViewFeedback';
import { FeedbackService } from '../../Service/feedback.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewFeedbackComponent implements OnInit {
  rating:any =[];
   feed:any
   public doctorForm=new FormGroup({
    q1: new FormControl(),
    q2: new FormControl(),
    q3: new FormControl(),
    q4: new FormControl(),
    comment: new FormControl(),
  });
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: FeedbackService,
    private activeRoute: ActivatedRoute,
    public dialog:MatDialog
  ) {}

  public formData: any;

 
  ngOnInit(): void {
    this.service.getFeedback().subscribe((data:ViewFeedback) =>{
      console.log(data);
   this.feed=data;

   this.doctorForm =new FormGroup({
    //q1:data['q1'],
      q1: new FormControl(this.feed['q1']),
      q2: new FormControl(this.feed['q2']),
     q3: new FormControl(data['q3']),
     q4: new FormControl(data['q4']),
     comment: new FormControl(data['comment']),
     // q1: ['', Validators.required],
     // q2: ['', Validators.required],
     // q3: ['', Validators.required],
     // q4: ['', Validators.required],
     // comment: ['', Validators.required],
   });
  

    });
  }
  

  onSubmit(){
    this.dialog.closeAll();
  }


}
