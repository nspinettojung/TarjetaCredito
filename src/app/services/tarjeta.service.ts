import { Injectable } from '@angular/core';
import { TarjetaCredito } from '../models/TarjetaCredito';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

 constructor(private firestore: AngularFirestore){ }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any> {
    return this.firestore.collection('tarjetas').add(tarjeta);
  }
 
}
