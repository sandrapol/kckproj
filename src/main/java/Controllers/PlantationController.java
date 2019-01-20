package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Plantation;
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
public class PlantationController {
    DBGeneric<Plantation> repo = new DBGeneric<>();

    private Plantation plantation = new Plantation();

    @RequestMapping(value = "/plantationList")
    public ResponseEntity<List<Plantation>> upload() {
        List plantationList;
        try {
            plantationList = repo.getAll(plantation);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(plantationList);
    }
    @RequestMapping(value = "/addPlantation")
    public ResponseEntity<String> addPlantation(String mName,
                                              String mCountry,
                                              String mRegion) {
       Plantation plantation= new Plantation();
        plantation.setName(mName);
        plantation.setCountry(mCountry);
        plantation.setRegion(mRegion);

        try {
            repo.create(plantation);
        } catch (Exception ex) {
            ResponseFactory.ResponseError("Failed", "Cannot add plantation");
        }
        return ResponseEntity.ok().header("Success").build();
    }
}
