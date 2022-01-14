import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  name: string = ""
  uid: string =""

  ngOnInit(): void {
    this.uid = this.authService.userID
    console.log(this.uid)

    if(this.uid){
      this.name = sessionStorage.getItem(this.uid)!
    }

  }

}
