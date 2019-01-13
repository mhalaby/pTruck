package com.ptruck.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.client.HttpClientErrorException;

public class HttpNotFoundException extends HttpClientErrorException {

    public HttpNotFoundException(String statusText) {
        super(HttpStatus.NOT_FOUND, statusText);
    }
}
