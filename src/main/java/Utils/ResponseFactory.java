package main.java.Utils;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;

/**
 * Created by Sandra on 2018-11-03.
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ResponseFactory {
    private static final String ERROR = "error";
    private static final String ERROR_DETAILS = "error_details";

    public static <T> ResponseEntity<T> ResponseError(String msg, String detail) {
        return ResponseEntity.badRequest()
                .header(ERROR, msg)
                .header(ERROR_DETAILS, detail)
                .build();
    }
}
