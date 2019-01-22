package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Magazine;
import main.java.Utils.ResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
@EnableAutoConfiguration
public class MagazineController {
    DBGeneric<Magazine> repo = new DBGeneric<>();
    DBGeneric<Coffee> repoCoffee = new DBGeneric<>();

    private Magazine magazine = new Magazine();
    private Coffee coffee= new Coffee();

    @RequestMapping(value = "/magazineList")
    public ResponseEntity<List<Magazine>> getMagazines() {
        List magazineList;
        try {
            magazineList = repo.getAll(magazine);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(magazineList);
    }

    @RequestMapping(value = "/magazineSortBy")
    public ResponseEntity<List<Magazine>> sortBy(String field) {
        List magazineList;
        try {
            if (field.contains("Other")) {
                field=field.replace("Other","");
                magazineList= repo.descSortBy(field,magazine);
            } else {
                magazineList = repo.sortBy(field, magazine);
            }
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(magazineList);
    }

    @RequestMapping(value = "/addMagazine")
    public ResponseEntity<String> addMagazine(String mName, double mSupply, boolean mAvailability) {
        Magazine magazine = new Magazine();
        magazine.setCoffeeAvailability(mAvailability);
        magazine.setSupply(mSupply);
        magazine.setName(mName);
        try {
            repo.create(magazine);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add magazine");
        }
        return ResponseEntity.ok().header("Success").build();
    }
   /* @RequestMapping(value = "/addCoffeeToMagazine")
    public ResponseEntity<String> addCoffeeToMagazine(Long coffeeId, Long magazineId) {
        Magazine magazine1;
        Coffee coffee1;
        try {
            coffee1=repoCoffee.getById(coffeeId,coffee);
            magazine1=repo.getById(magazineId,magazine);
            magazine1.addCoffee(coffee1);
            repo.update(magazine1);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add coffe to magazine");
        }
        return ResponseEntity.ok().header("Success").build();
    }*/

    @RequestMapping(value = "/detailsMagazine")
    public ResponseEntity<Magazine> getMagazineById(Long id) {
        Magazine magazineDetails;
        try {
            magazineDetails = repo.getById(id, magazine);
            System.out.println(magazineDetails.toString());
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find magazine");
        }
        return ResponseEntity.ok(magazineDetails);
    }

    @RequestMapping(value = "/deleteMagazine")
    public ResponseEntity<List<Magazine>> deleteMagazine(Long id) {
        List magazineList;
        try {
            repo.delete(id, magazine);
            magazineList = repo.getAll(magazine);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete magazine");
        }
        return ResponseEntity.ok(magazineList);
    }

    @RequestMapping(value = "/updateMagazine", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Magazine> updateMagazine(@RequestBody Magazine magazineUp) {
        System.out.println(magazineUp.toString());
        try {
            repo.update(magazineUp);
            magazineUp = repo.getById(magazineUp.getId(), magazine);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot update magazine");
        }
        return ResponseEntity.ok(magazineUp);
    }
}
