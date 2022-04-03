import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Word} from "../../shared/models/word";
import {WordService} from "../../core/services/word.service";
import {AddEditWordDialogService} from "../../core/services/add-edit-word-dialog.service";

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss']
})
export class WordCardComponent implements OnInit {

  @Input() word: Word | null = null;
  @Output() wordChange =  new EventEmitter<Word>();
  @Output() wordDelete =  new EventEmitter<null>();

  isHovering: boolean = false;

  constructor(private wordService: WordService, private addEditWordDialogService: AddEditWordDialogService) { }

  ngOnInit(): void {
  }

  editWord() {
    this.addEditWordDialogService.openEditDialog(this.word as Word).afterClosed().subscribe((updateWord: Word) => {
      if (updateWord && (updateWord.content != this.word?.content)) {
        this.wordService.editWord(updateWord).subscribe((word) => {
          this.word = word;
          this.wordChange.emit(word);
        });
      }
    })
  }

  deleteWord() {
    if (this.word) {
      this.wordService.deleteWord(this.word).subscribe(() => {
        this.wordDelete.emit();
      });
    }
  }
}
