package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String name;
    @Column
    private String forename;
    @Column
    private long telephoneNumber;
    @Column
    private String street;
    @Column
    private int houseNumber;
    @ManyToOne
    @JoinColumn(name = "city_id", foreignKey = @ForeignKey(name = "CUSTOMER_CITY_ID_FK"))
    private City city;
    @OneToMany(mappedBy="customer")
    private List<Bill> bills;
    public Customer() {
    }

    public Customer(String name, String forename, long telephoneNumber, String street, int houseNumber, City city) {
        this.name = name;
        this.forename = forename;
        this.telephoneNumber = telephoneNumber;
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getForename() {
        return forename;
    }

    public void setForename(String forename) {
        this.forename = forename;
    }

    public long getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(long telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(int houseNumber) {
        this.houseNumber = houseNumber;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", forename='" + forename + '\'' +
                ", telephoneNumber=" + telephoneNumber +
                ", street='" + street + '\'' +
                ", houseNumber=" + houseNumber +
                ", city=" + city +
                '}';
    }
}
