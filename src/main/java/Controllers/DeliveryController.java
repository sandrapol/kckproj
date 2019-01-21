package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Delivery;
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
public class DeliveryController {
    DBGeneric<Delivery> repo = new DBGeneric<>();

    private Delivery delivery = new Delivery();

    @RequestMapping(value = "/deliveryList")
    public ResponseEntity<List<Delivery>> upload() {
        List deliveryList;
        try {
            deliveryList = repo.getAll(delivery);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(deliveryList);
    }
    @RequestMapping(value = "/addDelivery")
    public ResponseEntity<String> addDelivery(String mConveyance) {
        Delivery delivery= new Delivery();
        delivery.setConveyance(mConveyance);
        try {
            repo.create(delivery);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add delivery");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsDelivery")
    public ResponseEntity<Delivery> getDeliveryById(Long id) {
        Delivery details= null;
        try {
            details=repo.getById(id,delivery);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find delivery");
        }
        return ResponseEntity.ok(details);
    }
    @RequestMapping(value = "/deleteDelivery")
    public ResponseEntity<List<Delivery>> deleteDelivery(Long id) {
        List list;
        try {
            repo.delete(id,delivery);
            list = repo.getAll(delivery);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete Delivery");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateDelivery", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Delivery> updateDelivery(@RequestBody Delivery delivery1) {
        try {
            repo.update(delivery1);
            delivery1=repo.getById(delivery1.getId(), delivery1);
        } catch (Exception ex) {
             return ResponseFactory.ResponseError("Failed", "Cannot update Delivery");
        }
        return ResponseEntity.ok(delivery1);
    }
}
