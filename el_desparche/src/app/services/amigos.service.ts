import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Amigo{
  nombreAmigo:String
  correoAmigo:String
  celularAmigo:String
  correoOwner:String

}

@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  constructor(private db: AngularFirestore,  public afAuth: AngularFireAuth) { }

  getAmigos(){
    let correoOwner="";
    if(this.afAuth.auth.currentUser!=null){
       correoOwner=this.afAuth.auth.currentUser.email;
    }
     
    return this.db.collection('Amigos', ref => ref.where('correoOwner','==',correoOwner) ).snapshotChanges().pipe(map(amigos =>{

      return amigos.map(a=>{
          
          const data = a.payload.doc.data() as Amigo;
          return data;
      })
    }));
  }

  setAmigo(nombreAmigo,celularAmigo,correoAmigo,correoOwner){
    this.db.collection('Amigos').add({
      celularAmigo,correoAmigo,nombreAmigo,correoOwner
    });
}
}
