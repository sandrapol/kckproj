package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Coffee;
import main.java.Models.Magazine;
import main.java.Utils.ResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @RequestMapping(value = "/coffeeSortBy")
    public ResponseEntity<List<Coffee>> sortBy(String field) {
        List coffeeList;
        try {
            coffeeList = repo.sortBy(field,coffee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(coffeeList);
    }

    @RequestMapping(value = "/coffeeSortByDesc")
    public ResponseEntity<List<Coffee>> sortByDesc(String field) {
        List coffeeList;
        try {
            coffeeList = repo.sortByDesc(field,coffee);
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
    @RequestMapping(value = "/deleteCoffee")
    public ResponseEntity<List<Coffee>> deleteCoffee(Long id) {
        List list;
        try {
            repo.delete(id,coffee);
            list = repo.getAll(coffee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete coffee");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateCoffee", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Coffee> updateCoffee(@RequestBody Coffee coffee1) {
        try {
            repo.update(coffee1);
            coffee1=repo.getById(coffee1.getId(), coffee1);
        } catch (Exception ex) {
           return ResponseFactory.ResponseError("Failed", "Cannot update coffee");
        }
        return ResponseEntity.ok(coffee1);
    }
}
