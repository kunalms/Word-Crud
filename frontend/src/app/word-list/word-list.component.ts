import {Component, OnInit} from '@angular/core';
import {WordService} from "../core/services/word.service";
import {Word} from "../shared/models/word";

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent implements OnInit {

  words: Word[] = []

  constructor(private wordService: WordService) {
  }

  ngOnInit(): void {
    this.wordService.getAllWords().subscribe((words) => {
      this.words = words;
    })
  }
}
