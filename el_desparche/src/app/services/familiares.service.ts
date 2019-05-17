import { Injectable } from '@angular/core';
//Importa angular firestore para consumir la base de datos
import {AngularFirestore} from '@angular/fire/firestore';
//Importar para poder hacer el tratamiento de datos
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


  //importar anfular firestore
  constructor(private db: AngularFirestore,  public afAuth: AngularFireAuth,
    ) {

   }

    //método para obtener todos los datos
   getFamiliares(){

//*------
     let correoOwner="";
     if(this.afAuth.auth.currentUser!=null){
        correoOwner=this.afAuth.auth.currentUser.email;
     }
//------*

      //Necesario para consumir los datos, en ref se realiza el filtro
     return this.db.collection('Familiares', ref => ref.where('correoOwner','==',correoOwner) ).snapshotChanges().pipe(map(familiares =>{
          
       return familiares.map(a=>{
           //Familiar es la interface 
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
