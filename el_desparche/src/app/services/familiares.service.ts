import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';



export interface Familiar{
  nombreFamiliar:String
  correo:String
  celular:String
  correoOwner:String

}

@Injectable({
  providedIn: 'root'
})


export class FamiliaresService {



  constructor(private db: AngularFirestore,  public afAuth: AngularFireAuth,
    ) {

   }


   getFamiliares(){
     let correoOwner="";
     if(this.afAuth.auth.currentUser!=null){
        correoOwner=this.afAuth.auth.currentUser.email;
     }
      
     return this.db.collection('Familiares', ref => ref.where('correoOwner','==',correoOwner) ).snapshotChanges().pipe(map(familiares =>{
          
       return familiares.map(a=>{
           
           const data = a.payload.doc.data() as Familiar;
           return data;
       })
     }));
   }

   setFamiliar(nombreFamiliar,celular,correo,correoOwner){
        this.db.collection('Familiares').add({
          celular,correo,nombreFamiliar,correoOwner
        });
   }
}
