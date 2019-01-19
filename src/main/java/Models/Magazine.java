package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Magazine")
public class Magazine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private boolean coffeeAvailability;
    @Column
    private double supply;
    @OneToMany(mappedBy="magazine")
    private List<Delivery> deliveries;
    @OneToMany(mappedBy="magazine")
    private List<Coffee> coffies;
    public Magazine() {
    }

    public Magazine(boolean coffeeAvailability, double supply) {
        this.coffeeAvailability = coffeeAvailability;
        this.supply = supply;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isCoffeeAvailability() {
        return coffeeAvailability;
    }

    public void setCoffeeAvailability(boolean coffeeAvailability) {
        this.coffeeAvailability = coffeeAvailability;
    }

    public double getSupply() {
        return supply;
    }

    public void setSupply(double supply) {
        this.supply = supply;
    }


    @Override
    public String toString() {
        return "Magazine{" +
                "id=" + id +
                ", coffeeAvailability=" + coffeeAvailability +
                ", supply=" + supply +
                '}';
    }
}
