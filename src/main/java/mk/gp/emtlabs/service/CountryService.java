package mk.gp.emtlabs.service;

import mk.gp.emtlabs.model.Country;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    Optional<Country> save(String name, String continent);
    List<Country> findAll();
    Optional<Country> findById(Long id);
}
