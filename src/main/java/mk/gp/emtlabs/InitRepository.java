package mk.gp.emtlabs;

import mk.gp.emtlabs.model.Author;
import mk.gp.emtlabs.model.Country;
import mk.gp.emtlabs.repository.AuthorRepository;
import mk.gp.emtlabs.repository.CountryRepository;
import mk.gp.emtlabs.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class InitRepository {

    @Autowired
    private AuthorService authorService;
    @Autowired
    private CountryRepository countryRepository;

    @PostConstruct
    private void postConstruct() {
        Country unitedKingdom = countryRepository.save(new Country("United Kingdom", "Europe"));
        Country america = countryRepository.save(new Country("United States of America", "North America"));
        Country belgium = countryRepository.save(new Country("Belgium", "Europe"));
        Country japan = countryRepository.save(new Country("Japan", "Asia"));
        Country russia = countryRepository.save(new Country("Russia", "Asia/Europe"));
        authorService.save("William", "Shakespeare", unitedKingdom.getId());
        authorService.save("Danielle", "Steel", america.getId());
        authorService.save("Georges", "Simenon", belgium.getId());
        authorService.save("Eiichiro", "Oda", japan.getId());
        authorService.save("Leo", "Tolstoy", russia.getId());
    }
}
