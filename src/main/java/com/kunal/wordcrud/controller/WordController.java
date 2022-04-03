package com.kunal.wordcrud.controller;

import com.kunal.wordcrud.entity.Word;
import com.kunal.wordcrud.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/word")
public class WordController {

    @Autowired
    private WordService wordService;

    @GetMapping("/all")
    public List<Word> getAllWords() {
        return this.wordService.getAllWords();
    }

    @GetMapping("/{id}")
    public Word getWord(@PathVariable("id") long id) {
        return this.wordService.getWord(id);
    }

    @PostMapping("/add")
    public Word addWord(@RequestBody Word word) {
        return wordService.save(word);
    }

    @PutMapping("/edit/{id}")
    public Optional<Word> updateWord(@PathVariable("id") long id, @RequestBody Word word) {
        return this.wordService.edit(id, word);
    }

    @DeleteMapping("{id}")
    public void deleteWord(@PathVariable("id") long id) {
        this.wordService.deleteWord(id);
    }
}
