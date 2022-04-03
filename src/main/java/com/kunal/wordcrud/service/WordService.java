package com.kunal.wordcrud.service;

import com.kunal.wordcrud.entity.Word;
import com.kunal.wordcrud.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WordService {

    @Autowired
    private WordRepository wordRepository;


    public List<Word> getAllWords(){
        Iterable<Word> it = this.wordRepository.findAll();

        List<Word> words = new ArrayList<Word>();
        it.forEach(word -> words.add(word));

        return words;
    }


    public Word getWord(Long id){
        Optional<Word> optionalWord = this.wordRepository.findById(id);
        Word word = null;
        if (optionalWord.isPresent()) {
            word = optionalWord.get();
        };

        return word;
    }


    public Word save(Word word) {
        return this.wordRepository.save(word);
    }

    public Optional<Word> edit(long id, Word word) {
        return this.wordRepository.findById(id)
                .map(oldItem -> {
                    return this.wordRepository.save(word);
                });
    }

    public void deleteWord(long id) {
        this.wordRepository.deleteById(id);
    }
}
