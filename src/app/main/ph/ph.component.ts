import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-ph',
  templateUrl: './ph.component.html',
  styleUrls: ['./ph.component.css']
})
export class PhComponent {

  itemRef: AngularFireObject<any>;
  phReading: number;
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('PH');
    this.itemRef.valueChanges()
    .subscribe(
      (phData: number) => {
        this.phReading = phData;
      }
    );
  }
}
