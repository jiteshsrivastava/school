package com.jitesh.school;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SchoolApplication {

	public static void main(String[] args) {
		System.out.println("Spring boot loading..");
		SpringApplication.run(SchoolApplication.class, args);
	}

}
