package com.ptruck;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class PTruckApplication {

    public static void main(String[] args) {
        SpringApplication.run(PTruckApplication.class, args);
    }

}

