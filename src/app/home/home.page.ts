import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { user } from '../model/user.model';
import { UserdetailsPage } from '../userdetails/userdetails.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, UserdetailsPage],
})
export class HomePage implements OnInit {
  userList: user[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8901',
      address: {
        street: '123 Maple Ave',
        locality: 'Downtown',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 345 678 9012',
      address: {
        street: '456 Oak Lane',
        locality: 'Greenwich',
        city: 'San Francisco',
        state: 'CA',
        zip: '94103'
      }
    },
    {
      id: 3,
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      phone: '+1 456 789 0123',
      address: {
        street: '789 Pine Rd',
        locality: 'Westside',
        city: 'Chicago',
        state: 'IL',
        zip: '60611'
      }
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '+1 567 890 1234',
      address: {
        street: '321 Elm St',
        locality: 'Uptown',
        city: 'Seattle',
        state: 'WA',
        zip: '98101'
      }
    },
    {
      id: 5,
      name: 'Michael Wilson',
      email: 'michael.wilson@example.com',
      phone: '+1 678 901 2345',
      address: {
        street: '654 Birch Ct',
        locality: 'Shoreline',
        city: 'Miami',
        state: 'FL',
        zip: '33101'
      }
    },

  ];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.userList[4].address.street = "update" + Math.random().toString();
    }, 1000);
  }

  updateAddressData() {
    const randomIndex = Math.floor(Math.random() * this.userList.length);
    const updatedUserList = [...this.userList];
    const userToUpdate = updatedUserList[randomIndex];

    // Modify a piece of address data
    userToUpdate.address = {
      ...userToUpdate.address,
      street: `Updated ${Math.floor(Math.random() * 999)} Avenue`
    };

    updatedUserList[randomIndex] = { ...userToUpdate };

    // Update the reference so that OnPush picks up the change
    this.userList = updatedUserList;
    console.log('UserList updated at:', new Date().toLocaleTimeString());
  }
}
