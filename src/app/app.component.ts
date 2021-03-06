import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Torocy','torocy45@gmail.com', 700903286 , 'default', 'morning' ,true );

//inject it
  constructor(private _enrollmentService: EnrollmentService){}
  //set the error flag
  topicHasError = true;
  //define method
  validateTopic(value){
    if (value === 'default'){
      this.topicHasError = true;
    }else
    this.topicHasError = false;
  }
  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data =>console.log('success!', data),
        error =>console.error('Error!', error)
      )
  }
}
