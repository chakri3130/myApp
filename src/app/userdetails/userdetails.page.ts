import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonLabel, IonAccordionGroup, IonAccordion, IonNote, IonIcon, IonText, IonBadge, IonContent } from '@ionic/angular/standalone';
import { user } from '../model/user.model';
import { addIcons } from 'ionicons';
import { personOutline, mailOutline, callOutline, locationOutline, chevronDownOutline, refreshOutline } from 'ionicons/icons';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonAccordionGroup, IonAccordion, IonNote, IonIcon, IonText, IonBadge, CommonModule, FormsModule]
})
export class UserdetailsPage implements OnInit, OnChanges {
  @Input() users: user[] = [];
  
  private renderCount = 0;

  constructor(private cdr: ChangeDetectorRef) {
    addIcons({ personOutline, mailOutline, callOutline, locationOutline, chevronDownOutline, refreshOutline });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      const prev = changes['users'].previousValue;
      const current = changes['users'].currentValue;
      const isReferenceSame = prev === current;
      
      console.log('%c[OnChanges Triggered]', 'background: #222; color: #bada55; padding: 2px 5px;');
      console.log('Reference is Same:', isReferenceSame);
      console.log('Previous Array:', prev);
      console.log('Current Array:', current);
    }
  }

  get renderInfo() {
    this.renderCount++;
    console.log(`[Userdetails] Render #${this.renderCount} at ${new Date().toLocaleTimeString()}`);
    return { count: this.renderCount, time: new Date().toLocaleTimeString() };
  }

  ngOnInit() {
  }
}
