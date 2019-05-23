import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';


export interface Invitacion{
  id:String
  valorVaca:number
  local:String
  invitados:String[]
  correoOwner:String

}


@Injectable({
  providedIn: 'root'
})
export class InvitacionesVacaService {
  public listadoInvitados:any[]=[];
  public valorVaca:number;

  constructor(private db: AngularFirestore,  public afAuth: AngularFireAuth) { }


  getInvitaciones(){
    let correoOwner="";
    if(this.afAuth.auth.currentUser!=null){
       correoOwner=this.afAuth.auth.currentUser.email;
    }
     
    return this.db.collection('InvitacionesAmigos', ref => ref.where('correoOwner','==',correoOwner) ).snapshotChanges().pipe(map(invitaciones =>{

      return invitaciones.map(a=>{
          
          const data = a.payload.doc.data() as Invitacion;
          data.id=a.payload.doc.id;
          return data;
      })
    }));
  }


  setInvitacion(local,invitados:String[],correoOwner,estado,valorVaca){
    this.db.collection('InvitacionesAmigos').add({
      local,invitados,correoOwner,estado,valorVaca
    });
}

  deleteInvitacion(idInvitacion){
    this.db.collection('InvitacionesAmigos').doc(idInvitacion).delete();
  }


}
