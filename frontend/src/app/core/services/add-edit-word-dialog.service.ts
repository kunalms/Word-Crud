import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddWordDialogComponent} from "../../shared/dialogs/add-word-dialog/add-word-dialog.component";
import {Word} from "../../shared/models/word";

@Injectable({
  providedIn: 'root'
})
export class AddEditWordDialogService {

  constructor(private dialog: MatDialog) {
  }

  openDialog(): MatDialogRef<AddWordDialogComponent> {
    return this.dialog.open(AddWordDialogComponent, {
      width: '250px',
      data: {content: '', title: 'Add Word'}
    });
  }

  openEditDialog(word: Word): MatDialogRef<AddWordDialogComponent> {
    return this.dialog.open(AddWordDialogComponent, {
      width: '250px',
      data: {
        content: word.content,
        id: word.id,
        title: 'Edit Word'
      }
    });
  }
}
