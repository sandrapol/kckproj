package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Customer;
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
public class CustomerController {
    DBGeneric<Customer> repo = new DBGeneric<>();

    private Customer customer = new Customer();

    @RequestMapping(value = "/customerList")
    public ResponseEntity<List<Customer>> upload() {
        List customerList;
        try {
            customerList = repo.getAll(customer);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(customerList);
    }
    @RequestMapping(value = "/addCustomer")
    public ResponseEntity<String> addCustomer(String mName,
                                              String mForename,
                                              String mStreet,
                                              int mHouseNumber,
                                              long mPhoneNumber) {
        Customer customer= new Customer();
        customer.setName(mName);
        customer.setForename(mForename);
        customer.setHouseNumber(mHouseNumber);
        customer.setStreet(mStreet);
        customer.setTelephoneNumber(mPhoneNumber);

        try {
            repo.create(customer);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add customer");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsCustomer")
    public ResponseEntity<Customer> getCustomerById(Long id) {
        Customer details= null;
        try {
            details=repo.getById(id,customer);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find customer");
        }
        return ResponseEntity.ok(details);
    }
}
