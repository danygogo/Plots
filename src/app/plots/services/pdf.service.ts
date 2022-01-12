import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  createPDF(report: HTMLElement){
    html2canvas(report).then(canvas => {
          
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      let position = 0;
      
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      
      PDF.save('myReport.pdf');
    });    

  }



}
