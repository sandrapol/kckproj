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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
@EnableAutoConfiguration
public class MagazineController {
    DBGeneric<Magazine> repo = new DBGeneric<>();

    private Magazine magazine = new Magazine();

    @RequestMapping(value = "/magazineList")
    public ResponseEntity<List<Magazine>> upload() {
        List magazineList;
        try {
            magazineList = repo.getAll(magazine);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(magazineList);
    }
    @RequestMapping(value = "/create")
    public String make() {
        Magazine magazine= new Magazine();
        magazine.setCoffeeAvailability(true);
        magazine.setSupply(100);
        magazine.setName("Magazyn");
        try {
            repo.create(magazine);
        } catch (Exception ex) {
            return "nie ok";
        }
        return "ok";
    }
}