package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Bill")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="netValue")
    private double netValue;
    @Column(name="grossValue")
    private double grossValue;
    @Column(name="vatValue")
    private double vatValue;
    @Column(name="discount")
    private double discount;
    @OneToMany(mappedBy="bill",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Sale> sales;
    @ManyToOne
    @JoinColumn(name = "employee_id", foreignKey = @ForeignKey(name = "BILL_EMPLOYEE_ID_FK"))
    private Employee employee;
    @ManyToOne
    @JoinColumn(name = "payment_id", foreignKey = @ForeignKey(name = "BILL_PAYMENT_ID_FK"))
    private Payment payment;
    @ManyToOne
    @JoinColumn(name = "time_id", foreignKey = @ForeignKey(name = "BILL_TIME_ID_FK"))
    private Time time;
    @ManyToOne
    @JoinColumn(name = "customer_id", foreignKey = @ForeignKey(name = "BILL_CUSTOMER_ID_FK"))
    private Customer customer;

    public Bill() {
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Bill(double netValue, double grossValue, double vatValue, double discount, Payment payment, Time time, Customer customer) {
        this.netValue = netValue;
        this.grossValue = grossValue;
        this.vatValue = vatValue;
        this.discount = discount;
        this.payment = payment;
        this.time = time;
        this.customer = customer;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getNetValue() {
        return netValue;
    }

    public void setNetValue(double netValue) {
        this.netValue = netValue;
    }

    public double getGrossValue() {
        return grossValue;
    }

    public void setGrossValue(double grossValue) {
        this.grossValue = grossValue;
    }

    public double getVatValue() {
        return vatValue;
    }

    public void setVatValue(double vatValue) {
        this.vatValue = vatValue;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Bill{" +
                "id=" + id +
                ", netValue=" + netValue +
                ", grossValue=" + grossValue +
                ", vatValue=" + vatValue +
                ", discount=" + discount +
                ", payment=" + payment +
                ", time=" + time +
                ", customer=" + customer +
                '}';
    }
}
