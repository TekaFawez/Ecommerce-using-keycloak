import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(public keycklock:KeycloakService){}
  profile: any;
  ngOnInit(): void {
    if(this.keycklock.isLoggedIn()){
      this.keycklock.loadUserProfile().then(profile=> {
        this.profile=profile
      })

    }
  }

handleLogout() {
this.keycklock.logout(window.location.origin)
}
async handleLogin() {
await this.keycklock.login({
  redirectUri:window.location.origin
})
}
  title = 'ecom-app-angular';
}
