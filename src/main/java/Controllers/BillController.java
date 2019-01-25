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

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
@EnableAutoConfiguration
public class BillController {
    DBGeneric<Time> repoTime = new DBGeneric<>();
    DBGeneric<Bill> repo = new DBGeneric<>();
    DBGeneric<Sale> repoSale = new DBGeneric<>();
    DBGeneric<Customer> repoCust = new DBGeneric<>();
    DBGeneric<Employee> repoEmp = new DBGeneric<>();
    DBGeneric<Payment> repoPay = new DBGeneric<>();

    private Bill bill = new Bill();
    private Time timeEx= new Time();
    private Sale saleEx= new Sale();
    private Customer customer=new Customer();
    private Employee employee= new Employee();
    private Payment payment= new Payment();

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

    @RequestMapping(value = "/billSortBy")
    public ResponseEntity<List<Bill>> sortBy(String field) {
        List billList;
        try {
            if (field.contains("Other")) {
                field = field.replace("Other", "");
                billList = repo.descSortBy(field, bill);
            } else {
                billList = repo.sortBy(field, bill);
            }
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(billList);
    }


    @RequestMapping(value = "/addBill", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> addBill(@RequestBody BillAdd newBill) {
        Bill bill = new Bill();
        Long timeId =Long.valueOf(generateTime());

        bill.setDiscount(newBill.getmDiscount());
        bill.setGrossValue(newBill.getmGrossValue());
        bill.setNetValue(newBill.getmGrossValue() * (0.77));
        bill.setVatValue(newBill.getmGrossValue() * (0.23));
        try {
            Time time = repoTime.getById(timeId, timeEx);
            bill.setTime(time);
            Customer cust= repoCust.getById(newBill.getCustId(),customer);
            bill.setCustomer(cust);
            Employee emp= repoEmp.getById(newBill.getCustId(),employee);
            bill.setEmployee(emp);
            Payment newPay= repoPay.getById(newBill.getPaymentId(), payment);
            bill.setPayment(newPay);
            Long billId =Long.valueOf(repo.createAndGet(bill));
            bill=repo.getById(billId, bill);
            Sale[] sales=newBill.addBill(bill);
            for (Sale sale : sales) {
                repoSale.create(sale);
            }
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add bill");
        }
        return ResponseEntity.ok().header("Success").build();
    }

    @RequestMapping(value = "/detailsBill")
    public ResponseEntity<Bill> getBillById(Long id) {
        Bill details = null;
        try {
            details = repo.getById(id, bill);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find bill");
        }
        return ResponseEntity.ok(details);
    }

    @RequestMapping(value = "/deleteBill")
    public ResponseEntity<List<Bill>> deleteBill(Long id) {
        List list;
        try {
            repo.delete(id, bill);
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
            billUp = repo.getById(billUp.getId(), billUp);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot update bill");
        }
        return ResponseEntity.ok(billUp);
    }

    int generateTime() {
        Time time = new Time();
        ZoneId zone1 = ZoneId.of("Europe/Warsaw");
        LocalTime now = LocalTime.now(zone1);
        LocalDate today = LocalDate.now();
        time.setTime(now);
        time.setDay(today.getDayOfMonth());
        time.setMonth(today.getMonth().getValue());
        time.setYear(today.getYear());
        int id = repoTime.createAndGet(time);
        return id;
    }
}

class BillAdd {
    Double mDiscount;
    Double mGrossValue;
    Sale[] sales;
    Long custId;
    Long employeeId;
    Long paymentId;

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public BillAdd() {
    }
    public Sale[] addBill(Bill bill){
        for (Sale sale : sales) {
            sale.setBill(bill);
        }
        return sales;
    }

    public Double getmDiscount() {
        return mDiscount;
    }

    public void setmDiscount(Double mDiscount) {
        this.mDiscount = mDiscount;
    }

    public Double getmGrossValue() {
        return mGrossValue;
    }

    public void setmGrossValue(Double mGrossValue) {
        this.mGrossValue = mGrossValue;
    }

    public Sale[] getSales() {
        return sales;
    }

    public void setSales(Sale[] sales) {
        this.sales = sales;
    }

    public Long getCustId() {
        return custId;
    }

    public void setCustId(Long custId) {
        this.custId = custId;
    }

    @Override
    public String toString() {
        return "BillAdd{" +
                "mDiscount=" + mDiscount +
                ", mGrossValue=" + mGrossValue +
                ", sales=" + Arrays.toString(sales) +
                ", custId=" + custId +
                '}';
    }
}
