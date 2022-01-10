import { EventEmitter, Injectable } from '@angular/core';
import {PieInterface} from "../interfaces/pieInterface"

@Injectable({
  providedIn: 'root'
})
export class PieService {


  data$ = new EventEmitter<PieInterface>();
  constructor() { }
}

/*
en el servicio
 data$ = new EventEmitter<colocartipo>();    el símbolo de dolar indica que es un observable

*/


//En el hijo que lee la info inyectar el servicio
/*
inicializar la propiedad y colocarla en el html con {{}}
nombreSubscripcion = suscribirse a los cambios y recibir la data 

en las variables 
nombreSubscripcion: Subscription de rxjs

en el ngondestroy
this.nombreSubscripcion.unsubscribe

*/



/*
En el formulario
inyectar el servicio
en el boton hacer
this.service.observable$.emit(data)

*/