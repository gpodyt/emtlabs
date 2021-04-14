package mk.gp.emtlabs.model.enums;

import org.springframework.security.core.GrantedAuthority;

public enum UserRoles implements GrantedAuthority {
    CUSTOMER,
    LIBRARIAN;

    @Override
    public String getAuthority() {
        return name();
    }
}
