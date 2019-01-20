package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Payment;
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
public class PaymentController {
    DBGeneric<Payment> repo = new DBGeneric<>();

    private Payment payment = new Payment();

    @RequestMapping(value = "/paymentList")
    public ResponseEntity<List<Payment>> upload() {
        List paymentList;
        try {
            paymentList = repo.getAll(payment);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(paymentList);
    }
    @RequestMapping(value = "/addPayment")
    public ResponseEntity<String> addPayment(boolean mProofOfPayment,
                                                String mTypeOfPaymnet) {
        Payment payment= new Payment();
        payment.setProofOfPayment(mProofOfPayment);
        payment.setTypeOfPayment(mTypeOfPaymnet);

        try {
            repo.create(payment);
        } catch (Exception ex) {
            ResponseFactory.ResponseError("Failed", "Cannot add payment");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsPayment")
    public ResponseEntity<Payment> getPaymentById(Long id) {
        Payment details= null;
        try {
            details=repo.getById(id,payment);
        } catch (Exception ex) {
            ResponseFactory.ResponseError("Failed", "Cannot find payment");
        }
        return ResponseEntity.ok(details);
    }
}
