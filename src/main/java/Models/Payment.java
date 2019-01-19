package main.java.Models;

import javax.persistence.*;

@Entity
@Table(name="Payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String typeOfPayment;
    @Column
    private boolean proofOfPayment;

    public Payment() {
    }

    public Payment(String typeOfPayment, boolean proofOfPayment) {
        this.typeOfPayment = typeOfPayment;
        this.proofOfPayment = proofOfPayment;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTypeOfPayment() {
        return typeOfPayment;
    }

    public void setTypeOfPayment(String typeOfPayment) {
        this.typeOfPayment = typeOfPayment;
    }

    public boolean isProofOfPayment() {
        return proofOfPayment;
    }

    public void setProofOfPayment(boolean proofOfPayment) {
        this.proofOfPayment = proofOfPayment;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", typeOfPayment='" + typeOfPayment + '\'' +
                ", proofOfPayment=" + proofOfPayment +
                '}';
    }
}
