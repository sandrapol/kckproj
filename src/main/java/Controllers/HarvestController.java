package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.*;
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
public class HarvestController {
    DBGeneric<Harvest> repo = new DBGeneric<>();
    DBGeneric<Plantation> repoPlantation = new DBGeneric<>();

    private Harvest harvest = new Harvest();
    private Plantation plantation = new Plantation();

    @RequestMapping(value = "/harvestList")
    public ResponseEntity<List<Harvest>> upload() {
        List harvestList;
        try {
            harvestList = repo.getAll(harvest);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(harvestList);
    }
    @RequestMapping(value = "/addHarvest")
    public ResponseEntity<String> addHarvest(String mQuality,
                                             double mQuantity,
                                             long plantationId) {

       Harvest harvest= new Harvest();
        harvest.setQuality(mQuality);
        harvest.setQuantity(mQuantity);
        try {
            Plantation plantationAdd= repoPlantation.getById(plantationId,plantation);
            harvest.setPlantation(plantationAdd);
            repo.create(harvest);
        } catch (Exception ex) {
            return  ResponseFactory.ResponseError("Failed", "Cannot add harvest");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsHarvest")
    public ResponseEntity<Harvest> getHarvestById(Long id) {
        Harvest details= null;
        try {
            details=repo.getById(id,harvest);
        } catch (Exception ex) {
            return  ResponseFactory.ResponseError("Failed", "Cannot find harvest");
        }
        return ResponseEntity.ok(details);
    }
    @RequestMapping(value = "/deleteHarvest")
    public ResponseEntity<List<Harvest>> deleteHarvest(Long id) {
        List list;
        try {
            repo.delete(id,harvest);
            list = repo.getAll(harvest);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete Harvest");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateHarvest", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Harvest> updateHarvest(@RequestBody Harvest harvest1) {
        try {
            repo.update(harvest1);
            harvest1=repo.getById(harvest1.getId(), harvest1);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot update Harvest");
        }
        return ResponseEntity.ok(harvest1);
    }
}
