import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddWordDialogComponent} from "../../shared/dialogs/add-word-dialog/add-word-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class AddEditWordDialogService {

  content: string = '';

  constructor(private dialog: MatDialog) {
  }

  openDialog(): MatDialogRef<AddWordDialogComponent> {
    return this.dialog.open(AddWordDialogComponent, {
      width: '250px',
      data: {content: this.content}
    });
  }
}
