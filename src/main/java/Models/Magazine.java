package main.java.Models;

import javax.persistence.*;
import java.util.ArrayList;
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
    @OneToMany(mappedBy="magazine",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Delivery> deliveries;
    @OneToMany(mappedBy="magazine",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Coffee> coffies;
    public Magazine() {
        deliveries= new ArrayList<>();
        coffies= new ArrayList<>();
    }

    public Magazine(boolean coffeeAvailability, double supply) {
        this.coffeeAvailability = coffeeAvailability;
        this.supply = supply;
        deliveries= new ArrayList<>();
        coffies= new ArrayList<>();
    }
    public void addCoffee(Coffee coffee){
        this.coffies.add(coffee);
    }
    public void removeCoffee(Coffee coffee){
        this.coffies.remove(coffee);
    }
    public void addDelivery(Delivery delivery){
        this.deliveries.add(delivery);
    }
    public void removeDelivery(Delivery delivery){
        this.deliveries.remove(delivery);
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
