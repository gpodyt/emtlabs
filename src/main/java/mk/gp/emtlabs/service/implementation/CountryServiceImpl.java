package mk.gp.emtlabs.service.implementation;

import mk.gp.emtlabs.model.Country;
import mk.gp.emtlabs.repository.CountryRepository;
import mk.gp.emtlabs.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public Optional<Country> save(String name, String continent) {
        return Optional.of(countryRepository.save(new Country(name, continent)));
    }

    @Override
    public List<Country> findAll() {
        return countryRepository.findAll();
    }

    @Override
    public Optional<Country> findById(Long id) {
        return countryRepository.findById(id);
    }
}
