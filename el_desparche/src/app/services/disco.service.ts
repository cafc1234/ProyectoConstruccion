import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Disco{
  tipo:String
  nombre:String
  localidad:String
  genero:String
}

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  constructor(private db: AngularFirestore,  public afAuth: AngularFireAuth) { }

  getDisco(genero){

     
    return this.db.collection('Disco', ref => ref.where('genero','==',genero) ).snapshotChanges().pipe(map(disco =>{

      return disco.map(a=>{
          
          const data = a.payload.doc.data() as Disco;
          return data;
      })
    }));
  }
  
  setAmigo(tipo,nombre,localidad,genero){
    this.db.collection('Disco').add({
        tipo,nombre,localidad,genero
    });
}
}
