import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class formService {
    getFeedback() {
      throw new Error('Method not implemented.');
    }

    public editflag = new BehaviorSubject<boolean | null>(false)
}