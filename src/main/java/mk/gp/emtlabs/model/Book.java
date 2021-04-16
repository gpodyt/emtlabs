package mk.gp.emtlabs.model;

import lombok.Data;
import mk.gp.emtlabs.model.enums.BookCategory;

import javax.persistence.*;

@Data
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @Enumerated(value = EnumType.STRING)
    BookCategory category;
    @ManyToOne
    Author author;
    Integer availableCopies;

    public Book() {
    }

    public Book(String name, BookCategory category, Author author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}
