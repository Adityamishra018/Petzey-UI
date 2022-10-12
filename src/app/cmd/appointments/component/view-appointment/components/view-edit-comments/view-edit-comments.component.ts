import { Component, OnInit } from '@angular/core';
import { CommentserviceService } from 'src/app/cmd/appointments/Service/commentservice.service';
import { Subscriber } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-edit-comments',
  templateUrl: './view-edit-comments.component.html',
  styleUrls: ['./view-edit-comments.component.scss']
})
export class ViewEditCommentsComponent implements OnInit {

  comment: any = [];
  appointmentId:any;
  constructor(private _commentservice:CommentserviceService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentId=this._Activatedroute.snapshot.paramMap.get('id');
    this._commentservice.getComment(this.appointmentId).subscribe(comm=>
      {
      console.log("anjali"+comm);
      
      this.comment=comm;
  });
  }
  //comment:String="patient has high cholestrol";

  //comment1:String="no comments";
  isReadonly:boolean=false;
  editable:boolean=false;
  editclick()
  {
    this.isReadonly=false;
   this.editable=true;
    console.log(this.isReadonly);
  }
  saveclick()
  {
    this._commentservice.saveComment(this.comment);
    this.isReadonly=true;
    this.editable=false;
  }

}
