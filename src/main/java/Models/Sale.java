package main.java.Models;

import javax.persistence.*;

@Entity
@Table(name="Sale")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private double quantityInKg;
    @Column
    private double howMuchToPay;
    @ManyToOne
    @JoinColumn(name = "cofee_id", foreignKey = @ForeignKey(name = "SALE_COFFEE_ID_FK"))
    private Coffee coffee;
    @ManyToOne
    @JoinColumn(name = "bill_id", foreignKey = @ForeignKey(name = "SALE_BILL_ID_FK"))
    private Bill bill;

    public Sale() {
    }

    public Sale(double quantityInKg, Coffee coffee, Employee employee, Bill bill) {
        this.quantityInKg = quantityInKg;
        this.coffee = coffee;
        this.bill = bill;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getQuantityInKg() {
        return quantityInKg;
    }

    public void setQuantityInKg(double quantityInKg) {
        this.quantityInKg = quantityInKg;
    }

    public Coffee getCoffee() {
        return coffee;
    }

    public void setCoffee(Coffee coffee) {
        this.coffee = coffee;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    @Override
    public String toString() {
        return "Sale{" +
                "id=" + id +
                ", quantityInKg=" + quantityInKg +
                ", coffee=" + coffee +
                ", bill=" + bill +
                '}';
    }
}
