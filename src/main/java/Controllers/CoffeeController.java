package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Coffee;
import main.java.Utils.ResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
@EnableAutoConfiguration
public class CoffeeController {
    DBGeneric<Coffee> repo = new DBGeneric<>();

    private Coffee coffee = new Coffee();

    @RequestMapping(value = "/coffeeList")
    public ResponseEntity<List<Coffee>> upload() {
        List coffeeList = new ArrayList<Coffee>();
        /*coffee.setType("ziarnista");
        coffee.setSpecies("arabica");
        coffee.setPrice(101);
        coffee.setName("kawka");
        repo.create(coffee);*/
        try {
            coffeeList = repo.getAll(coffee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(coffeeList);
    }
}
