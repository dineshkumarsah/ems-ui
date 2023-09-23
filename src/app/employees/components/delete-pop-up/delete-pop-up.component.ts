import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.scss']
})
export class DeletePopUpComponent {
  constructor(public dialogCloseRef: MatDialogRef<DeletePopUpComponent>){

  }
  close(){
    this.dialogCloseRef.close();
  }
  delete(){
    this.dialogCloseRef.close(true); 

  }

}
