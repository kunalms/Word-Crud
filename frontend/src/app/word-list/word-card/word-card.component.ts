import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Word} from "../../shared/models/word";
import {WordService} from "../../core/services/word.service";

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

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
  }

  editWord() {
    if (this.word) {
      this.wordService.editWord(this.word).subscribe((updatedWord) => {
        this.word = updatedWord;
        this.wordChange.emit(updatedWord);
      });
    }
  }

  deleteWord() {
    if (this.word) {
      this.wordService.deleteWord(this.word).subscribe(() => {
        this.wordDelete.emit();
      });
    }
  }
}
