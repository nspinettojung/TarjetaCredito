import { Injectable } from '@angular/core';
import { TarjetaCredito } from '../models/TarjetaCredito';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
private tarjeta$ = new Subject<any>();
 constructor(private firestore: AngularFirestore){ }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    return this.firestore.collection('tarjetas').add(tarjeta);
  }

  obtenerTarjetas(): Observable<any> {
   return this.firestore.collection('tarjetas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarTarjeta(id: string): Promise<any> {
    return this.firestore.collection('tarjetas').doc(id).delete();
  }

  editarTarjeta(id: string, tarjeta: any): Promise<any> {
    return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
  }

  addTarjetaEdit(tarjeta: TarjetaCredito){
    this.tarjeta$.next(tarjeta);
  }

  getTarjetaEdit(): Observable<TarjetaCredito>{
    return this.tarjeta$.asObservable();
  }
 
}
