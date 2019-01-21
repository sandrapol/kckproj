package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.City;
import main.java.Models.Coffee;
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
public class CityController{
    DBGeneric<City> repo = new DBGeneric<>();

    private City city = new City();

    @RequestMapping(value = "/cityList")
    public ResponseEntity<List<City>> upload() {
        List cityList;
        try {
            cityList = repo.getAll(city);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(cityList);
    }
    @RequestMapping(value = "/addCity")
    public ResponseEntity<String> addPlantation(String mName,
                                                String mVovoideship,
                                                int mZipCde) {
        City city= new City();
        city.setName(mName);
        city.setVoivodeship(mVovoideship);
        city.setZIPcode(mZipCde);

        try {
            repo.create(city);
        } catch (Exception ex) {
            return   ResponseFactory.ResponseError("Failed", "Cannot add city");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsCity")
    public ResponseEntity<City> getCityById(Long id) {
        City details= null;
        try {
            details=repo.getById(id,city);
        } catch (Exception ex) {
            return  ResponseFactory.ResponseError("Failed", "Cannot find coffee");
        }
        return ResponseEntity.ok(details);
    }
    @RequestMapping(value = "/deleteCity")
    public ResponseEntity<List<City>> deleteCity(Long id) {
        List list;
        try {
            repo.delete(id,city);
            list = repo.getAll(city);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete city");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateCity", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<City> updateCity(@RequestBody City cityUp) {
        try {
            repo.update(cityUp);
            cityUp=repo.getById(cityUp.getId(), cityUp);
        } catch (Exception ex) {
           return ResponseFactory.ResponseError("Failed", "Cannot update city");
        }
        return ResponseEntity.ok(cityUp);
    }
}
