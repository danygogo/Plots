import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }
  name: string = ""


  ngOnInit(): void {
    this.name = this.authService.userName()

  }


  logOut(){
    sessionStorage.clear();
    this.router.navigateByUrl("/auth/login");

  }

}
