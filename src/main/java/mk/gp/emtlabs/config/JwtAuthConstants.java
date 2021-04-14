package mk.gp.emtlabs.config;

public class JwtAuthConstants {
    public static final long EXPIRATION_TIME = 864000000; //10 days
    public static final String SECRET = "s3cr3tkey";
    public static final String HEADER_STRING = "Authorization";
    public static final String TOKEN_PREFIX = "Bearer ";
}
