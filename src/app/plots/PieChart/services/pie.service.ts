import { EventEmitter, Injectable } from '@angular/core';
import {PieInterface} from "../interfaces/pieInterface"

@Injectable({
  providedIn: 'root'
})
export class PieService {


  data$ = new EventEmitter<PieInterface>();
  constructor() { }
}
