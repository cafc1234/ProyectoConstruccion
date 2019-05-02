import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';


export interface Invitacion{
  local:String
  invitados:String[]
  correoOwner:String

}


@Injectable({
  providedIn: 'root'
})
export class InvitacionesService {
  public listadoInvitados:any[]=[];
  constructor(private db: AngularFirestore,  public afAuth: AngularFireAuth) { }

  getInvitaciones(){
    let correoOwner="";
    if(this.afAuth.auth.currentUser!=null){
       correoOwner=this.afAuth.auth.currentUser.email;
    }
     
    return this.db.collection('InvitacionesFamiliar', ref => ref.where('correoOwner','==',correoOwner) ).snapshotChanges().pipe(map(invitaciones =>{

      return invitaciones.map(a=>{
          
          const data = a.payload.doc.data() as Invitacion;
          return data;
      })
    }));
  }




  setInvitacion(local,invitados:String[],correoOwner){
    this.db.collection('InvitacionesFamiliar').add({
      local,invitados,correoOwner
    });
}


}
