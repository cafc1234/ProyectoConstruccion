import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FamiliaresService {

  constructor(private db: AngularFirestore) {

   }

   getFamiliares(){
     return this.db.collection('Familiares').snapshotChanges();
   }
}
