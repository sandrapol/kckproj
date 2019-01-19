package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Plantation")
public class Plantation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="Country")
    private String Country;
    @Column(name="Region")
    private String Region;
    @OneToMany(mappedBy="plantation")
    private List<Harvest> harvestes;
    @OneToMany(mappedBy="plantation")
    private List<Delivery> deliveries;
    public Plantation() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String country) {
        Country = country;
    }

    public String getRegion() {
        return Region;
    }

    public void setRegion(String region) {
        Region = region;
    }

    public Plantation(String country, String region) {
        Country = country;
        Region = region;
    }

    @Override
    public String toString() {
        return "Plantation{" +
                "id=" + id +
                ", Country='" + Country + '\'' +
                ", Region='" + Region + '\'' +
                '}';
    }
}
