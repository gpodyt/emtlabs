package mk.gp.emtlabs.model.dto;

import lombok.Data;

@Data
public class BookDto {
    String name;
    String category;
    Long author;
    Integer availableCopies;

    public BookDto() {
    }

    public BookDto(String name, String category, Long author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
}
