import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Word} from "../../shared/models/word";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private readonly WORD_API_ENDPOINT = '/api/word/';

  constructor(private httpClient: HttpClient) { }

  getAllWords(): Observable<Word[]>{
    return this.httpClient.get<Word[]>(this.WORD_API_ENDPOINT + 'all');
  }

  addWord(word:Word): Observable<Word>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<Word>(this.WORD_API_ENDPOINT + 'add', word, {headers: headers});
  }

  editWord(word: Word) {
    return this.httpClient.put<Word>(this.WORD_API_ENDPOINT + 'edit/' +word.id, word);
  }

  deleteWord(word: Word): Observable<void> {
    return this.httpClient.delete<void>(this.WORD_API_ENDPOINT + word.id);
  }
}
