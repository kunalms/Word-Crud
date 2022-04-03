import {Component, OnInit} from '@angular/core';
import {WordService} from "../core/services/word.service";
import {Word} from "../shared/models/word";
import {AddEditWordDialogService} from "../core/services/add-edit-word-dialog.service";

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent implements OnInit {

  words: Word[] = []

  constructor(private wordService: WordService, private addEditWordDialogService: AddEditWordDialogService) {
  }

  ngOnInit(): void {
    this.wordService.getAllWords().subscribe((words) => {
      this.words = words;
    })
  }

  addWord(): void {
    console.log('clicked');
    this.addEditWordDialogService.openDialog().afterClosed().subscribe((word: Word) => {
      console.log(word);
      if (word && word.content) {
        this.wordService.addWord(word).subscribe(word => this.words.push(word));
      }
    });
  }
}
