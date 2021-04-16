package mk.gp.emtlabs.service.implementation;

import mk.gp.emtlabs.model.Book;
import mk.gp.emtlabs.model.enums.BookCategory;
import mk.gp.emtlabs.model.exceptions.AuthorNotFoundException;
import mk.gp.emtlabs.model.exceptions.BookNotFoundException;
import mk.gp.emtlabs.repository.AuthorRepository;
import mk.gp.emtlabs.repository.BookRepository;
import mk.gp.emtlabs.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Optional<Book> save(String name, BookCategory category, Long authorId, Integer availableCopies) {
        return Optional.of(bookRepository.save(new Book(name, category, authorRepository.findById(authorId).orElseThrow(AuthorNotFoundException::new), availableCopies)));
    }

    @Override
    public Optional<Book> edit(Long id, String name, BookCategory category, Long authorId, Integer availableCopies) {
        Book book = bookRepository.findById(id).orElseThrow(BookNotFoundException::new);
        book.setName(name);
        book.setCategory(category);
        book.setAvailableCopies(availableCopies);
        book.setAuthor(authorRepository.findById(authorId).orElseThrow(AuthorNotFoundException::new));
        return Optional.of(bookRepository.save(book));
    }

    @Override
    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void markAsTaken(Long id) {
        Book book = bookRepository.findById(id).orElseThrow(BookNotFoundException::new);
        if(book.getAvailableCopies()!=0)
            book.setAvailableCopies(book.getAvailableCopies()-1);
        bookRepository.save(book);
    }
}
