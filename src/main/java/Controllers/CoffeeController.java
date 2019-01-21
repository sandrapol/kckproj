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
    public ResponseEntity<List<Coffee>> addCoffee() {
        List coffeeList = new ArrayList<Coffee>();
        try {
            coffeeList = repo.getAll(coffee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(coffeeList);
    }
    @RequestMapping(value = "/addCoffee")
    public ResponseEntity<String> addCoffee(String mName,
                                            double mPrice,
                                            String mSpecies,
                                            String mType) {
        Coffee coffee= new Coffee();
        coffee.setName(mName);
        coffee.setPrice(mPrice);
        coffee.setSpecies(mSpecies);
        coffee.setType(mType);
        try {
            repo.create(coffee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add coffee");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsCoffee")
    public ResponseEntity<Coffee> getCoffeeById(Long id) {
        Coffee details= null;
        try {
            details=repo.getById(id,coffee);
        } catch (Exception ex) {
            return  ResponseFactory.ResponseError("Failed", "Cannot find coffee");
        }
        return ResponseEntity.ok(details);
    }
}
