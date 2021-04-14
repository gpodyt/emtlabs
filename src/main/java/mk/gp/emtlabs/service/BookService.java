package mk.gp.emtlabs.service;

import mk.gp.emtlabs.model.Book;
import mk.gp.emtlabs.model.enums.BookCategory;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> save(String name, BookCategory category, Long authorId, Integer availableCopies);

    Optional<Book> edit(Long id, String name, BookCategory category, Long authorId, Integer availableCopie);

    void deleteById(Long id);
}
