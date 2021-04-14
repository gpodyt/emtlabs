package mk.gp.emtlabs.model.dto;

import lombok.Data;
import mk.gp.emtlabs.model.User;
import mk.gp.emtlabs.model.enums.UserRoles;

@Data
public class UserDetailsDto {
    private String username;
    private UserRoles role;

    public static UserDetailsDto of(User user){
        UserDetailsDto details = new UserDetailsDto();
        details.username = user.getUsername();
        details.role = user.getRole();
        return details;
    }
}
