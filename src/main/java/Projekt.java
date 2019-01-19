package main.java;

import main.java.Utils.HibernateUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Projekt {
    public static void main(String[] args) {
      //  HibernateUtil.getSessionFactory();
        SpringApplication.run(Projekt.class, args);
       // HibernateUtil.getSessionFactory().close();
        //System.exit(1);
    }
}
