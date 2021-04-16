package mk.gp.emtlabs.service.implementation;

import mk.gp.emtlabs.model.Author;
import mk.gp.emtlabs.model.exceptions.CountryNotFoundException;
import mk.gp.emtlabs.repository.AuthorRepository;
import mk.gp.emtlabs.repository.CountryRepository;
import mk.gp.emtlabs.service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public Optional<Author> save(String name, String surname, Long countryId) {
        return Optional.of(authorRepository.save(new Author(name, surname, countryRepository.findById(countryId).orElseThrow(CountryNotFoundException::new))));
    }

    @Override
    public List<Author> findAll() {
        return authorRepository.findAll();
    }

    @Override
    public Optional<Author> findById(Long id) {
        return authorRepository.findById(id);
    }
}
