import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-word-dialog',
  templateUrl: './add-word-dialog.component.html',
  styleUrls: ['./add-word-dialog.component.scss']
})
export class AddWordDialogComponent implements OnInit {

  wordForm = this.fb.group({
    content: [null, Validators.required],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { content: String }, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.wordForm.get('content')?.setValue(this.data.content);
  }
}
