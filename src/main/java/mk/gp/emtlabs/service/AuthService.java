package mk.gp.emtlabs.service;

import mk.gp.emtlabs.model.User;

public interface AuthService {
    User login(String username, String password);
}
