import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  name: string
  password: string
  confirmPassword: string

  constructor(
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }
    
  signUp() {
    const user = {
      name: this.name,
      confirmPassword: this.confirmPassword, 
      password: this.password,
    }

    if(!user.name) {
      this._flashMessagesService.show('ТОЧНО ВСЁ ЗАПОЛНИЛ?', 
      { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    else if(!user.password) {
      this._flashMessagesService.show('ТОЧНО ВСЁ ЗАПОЛНИЛ?', 
      { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    else if(!user.confirmPassword) {
      this._flashMessagesService.show('ТОЧНО ВСЁ ЗАПОЛНИЛ?', 
      { cssClass: 'alert-danger', timeout: 3000 });
      return false
    }
    
    
  }

}
