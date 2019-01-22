package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Customer;
import main.java.Models.Magazine;
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

    @RequestMapping(value = "/customerSortBy")
    public ResponseEntity<List<Customer>> sortBy(String field) {
        List customerList;
        try {
            if (field.contains("Other")) {
                field=field.replace("Other","");
                customerList= repo.descSortBy(field,customer);
            } else {
                customerList = repo.sortBy(field, customer);
            }
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
    @RequestMapping(value = "/deleteCustomer")
    public ResponseEntity<List<Customer>> deleteMagazine(Long id) {
        List list;
        try {
            repo.delete(id,customer);
            list = repo.getAll(customer);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete customer");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateCustomer", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Customer> updateMagazine(@RequestBody Customer customer1) {
        try {
            repo.update(customer1);
            customer1=repo.getById(customer1.getId(), customer1);
        } catch (Exception ex) {
          return   ResponseFactory.ResponseError("Failed", "Cannot update customer");
        }
        return ResponseEntity.ok(customer1);
    }
}
