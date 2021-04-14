package mk.gp.emtlabs.service;

import mk.gp.emtlabs.model.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    Optional<Author> save(String name, String surname, Long countryId);
    List<Author> findAll();
    Optional<Author> findById(Long id);
}
