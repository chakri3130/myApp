import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonIcon, IonButton, IonGrid, IonRow, IonCol, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, lockClosedOutline, planet } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonIcon,
    IonButton, IonGrid, IonRow, IonCol, IonInputPasswordToggle
  ]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {
    addIcons({ personOutline, lockClosedOutline, planet });
  }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['/home'])
  }


}
