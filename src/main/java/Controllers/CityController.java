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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
            ResponseFactory.ResponseError("Failed", "Cannot add city");
        }
        return ResponseEntity.ok().header("Success").build();
    }
}
