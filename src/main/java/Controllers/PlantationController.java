package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Magazine;
import main.java.Models.Plantation;
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

    @RequestMapping(value = "/plantationSortBy")
    public ResponseEntity<List<Plantation>> sortBy(String field) {
        List plantationList;
        try {
            if (field.contains("Other")) {
                field=field.replace("Other","");
                plantationList= repo.descSortBy(field,plantation);
            } else {
                plantationList = repo.sortBy(field, plantation);
            }
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
            return  ResponseFactory.ResponseError("Failed", "Cannot add plantation");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsPlantation")
    public ResponseEntity<Plantation> getSaleById(Long id) {
        Plantation plantationDetails= null;
        try {
            plantationDetails=repo.getById(id,plantation);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find magazine");
        }
        return ResponseEntity.ok(plantationDetails);
    }
    @RequestMapping(value = "/deletePlantation")
    public ResponseEntity<List<Plantation>> deleteDelivery(Long id) {
        List list;
        try {
            repo.delete(id,plantation);
            list = repo.getAll(plantation);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete Plantation");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updatePlantation", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Plantation> updatePlantation(@RequestBody Plantation plantation1) {
        try {
            repo.update(plantation1);
            plantation1=repo.getById(plantation1.getId(), plantation1);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot update Plantation");
        }
        return ResponseEntity.ok(plantation1);
    }
}
