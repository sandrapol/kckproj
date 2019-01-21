package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Plantation;
import main.java.Models.Sale;
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
public class SaleController {
    DBGeneric<Sale> repo = new DBGeneric<>();

    private Sale sale = new Sale();

    @RequestMapping(value = "/saleList")
    public ResponseEntity<List<Sale>> upload() {
        List saleList;
        try {
            saleList = repo.getAll(sale);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(saleList);
    }
    @RequestMapping(value = "/addSale")
    public ResponseEntity<String> addSale(double mQuantity,double mHowMuch){

        Sale sale= new Sale();
        sale.setQuantityInKg(mQuantity);
        try {
            repo.create(sale);
        } catch (Exception ex) {
            return  ResponseFactory.ResponseError("Failed", "Cannot add sale");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsSale")
    public ResponseEntity<Sale> getSaleById(Long id) {
        Sale saleDetails= null;
        try {
            saleDetails=repo.getById(id,sale);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find sale");
        }
        return ResponseEntity.ok(saleDetails);
    }
    @RequestMapping(value = "/deleteSale")
    public ResponseEntity<List<Sale>> deleteSale(Long id) {
        List list;
        try {
            repo.delete(id,sale);
            list = repo.getAll(sale);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete Sale");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateSale", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Sale> updateSale(@RequestBody Sale sale1) {
        try {
            repo.update(sale1);
            sale1=repo.getById(sale1.getId(), sale1);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot update Sale");
        }
        return ResponseEntity.ok(sale1);
    }
}
