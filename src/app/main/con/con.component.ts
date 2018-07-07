import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-con',
  templateUrl: './con.component.html',
  styleUrls: ['./con.component.css']
})
export class ConComponent implements OnInit {

  itemRef: AngularFireObject<any>;
  conductivityReading: number;
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('CON');
    this.itemRef.valueChanges()
    .subscribe(
      (conductivityData: number) => {
        this.conductivityReading = conductivityData;
      }
    )
  }
  ngOnInit() {
  }

}
