package main.java;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Projekt {
    public static void main(String[] args) {
        HibernateUtil.getSessionFactory();
        HibernateUtil.getSessionFactory().close();
        SpringApplication.run(Projekt.class, args);
        //System.exit(1);
    }
}
