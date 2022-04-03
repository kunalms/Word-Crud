package com.kunal.wordcrud.repository;

import com.kunal.wordcrud.entity.Word;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends CrudRepository<Word, Long> {}

