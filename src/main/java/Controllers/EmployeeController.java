package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.Employee;
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
public class EmployeeController {
    DBGeneric<Employee> repo = new DBGeneric<>();

    private Employee employee = new Employee();

    @RequestMapping(value = "/employeeList")
    public ResponseEntity<List<Employee>> upload() {
        List employeeList;
        try {
            employeeList = repo.getAll(employee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(employeeList);
    }
    @RequestMapping(value = "/employeeSortBy")
    public ResponseEntity<List<Employee>> sortBy(String field) {
        List employeeList;
        try {
            employeeList = repo.sortBy(field,employee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(employeeList);
    }

    @RequestMapping(value = "/addEmployee")
    public ResponseEntity<String> addEmployee(String mName,
                                            String mForename,
                                            String mPosition,
                                            double mSalary,
                                            double mBonus) {
        Employee employee= new Employee();
        employee.setName(mName);
        employee.setSalary(mSalary);
        employee.setPosition(mPosition);
        employee.setBonus(mBonus);
        employee.setForename(mForename);

        try {
            repo.create(employee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot add employee");
        }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsEmployee")
    public ResponseEntity<Employee> getEmployeeById(Long id) {
        Employee details= null;
        try {
            details=repo.getById(id,employee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find employee");
        }
        return ResponseEntity.ok(details);
    }
    @RequestMapping(value = "/deleteEmployee")
    public ResponseEntity<List<Employee>> deleteEmployee(Long id) {
        List list;
        try {
            repo.delete(id,employee);
            list = repo.getAll(employee);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete Employee");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateEmployee", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Employee> updateDelivery(@RequestBody Employee employee1) {
        try {
            repo.update(employee1);
            employee1=repo.getById(employee1.getId(), employee1);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot update Employee");
        }
        return ResponseEntity.ok(employee1);
    }
}
