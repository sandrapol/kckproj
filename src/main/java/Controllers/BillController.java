package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Utils.ResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
@EnableAutoConfiguration
public class BillController {
    DBGeneric<Bill> repo = new DBGeneric<>();

    private Bill bill = new Bill();

    @RequestMapping(value = "/billList")
    public ResponseEntity<List<Bill>> upload() {
        List billList;
        try {
            billList = repo.getAll(bill);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(billList);
    }

    @RequestMapping(value = "/addBill")
    public ResponseEntity<String> addBill(double mDiscount, double mGrossValue) {
        Bill bill = new Bill();
        bill.setDiscount(mDiscount);
        bill.setGrossValue(mGrossValue);
        bill.setNetValue(mGrossValue * (0.77));
        bill.setVatValue(mGrossValue * (0.23));
        try {
            repo.create(bill);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add bill");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsBill")
    public ResponseEntity<Bill> getBillById(Long id) {
        Bill details= null;
        try {
            details=repo.getById(id,bill);
        } catch (Exception ex) {
            return  ResponseFactory.ResponseError("Failed", "Cannot find bill");
        }
        return ResponseEntity.ok(details);
    }
    @RequestMapping(value = "/deleteBill")
    public ResponseEntity<List<Bill>> deleteBill(Long id) {
        List list;
        try {
            repo.delete(id,bill);
            list = repo.getAll(bill);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete bill");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateBill", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Bill> updateBill(@RequestBody Bill billUp) {
        try {
            repo.update(billUp);
            billUp=repo.getById(billUp.getId(), billUp);
        } catch (Exception ex) {
           return ResponseFactory.ResponseError("Failed", "Cannot update bill");
        }
        return ResponseEntity.ok(billUp);
    }
}
