package mk.gp.emtlabs.service;

import mk.gp.emtlabs.model.User;
import mk.gp.emtlabs.model.enums.UserRoles;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    User register(String username, String password, String repeatPassword, String name, String surname, UserRoles role);
}
