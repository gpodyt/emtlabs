package mk.gp.emtlabs.web;

import mk.gp.emtlabs.model.User;
import mk.gp.emtlabs.model.exceptions.InvalidUserCredentialsException;
import mk.gp.emtlabs.service.AuthService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/login")
public class LoginController {

    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping
    public String getLoginPage() {
        return "login";
    }

    @PostMapping
    public String login(HttpServletRequest request, Model model) {
        User user;
        try{
            user = this.authService.login(request.getParameter("username"),
                                        request.getParameter("password"));
            request.getSession().setAttribute("user", user);
            return "redirect:/";
        }
        catch (InvalidUserCredentialsException exception) {
            model.addAttribute("hasError", true);
            model.addAttribute("error", exception.getMessage());
            return "login";
        }
    }
}
