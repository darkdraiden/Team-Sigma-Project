package com.bookManagement.Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@SpringBootApplication
@ComponentScan({"com.bookManagement.Backend.service","com.bookManagement.Backend.controller","com.bookManagement.Backend.security","com.bookManagement.Backend.config","com.bookManagement.Backend.repository"})
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
