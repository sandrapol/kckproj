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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
            ResponseFactory.ResponseError("Failed", "Cannot add bill");
        }
        return ResponseEntity.ok().header("Success").build();
    }
}
