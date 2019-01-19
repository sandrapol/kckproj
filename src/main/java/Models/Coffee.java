package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Coffee")
public class Coffee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String species;
    @Column
    private String type;
    @Column
    private double price;
    @ManyToOne
    @JoinColumn(name = "magazine_id", foreignKey = @ForeignKey(name = "COFFEE_MAGAZINE_ID_FK"))
    private Magazine magazine;
    @OneToMany(mappedBy="coffee")
    private List<Sale> sales;
    public Coffee() {
    }

    public Coffee(String name, String species, String type, double price, Magazine magazine) {
        this.name = name;
        this.species = species;
        this.type = type;
        this.price = price;
        this.magazine = magazine;
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

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Magazine getMagazine() {
        return magazine;
    }

    public void setMagazine(Magazine magazine) {
        this.magazine = magazine;
    }

    @Override
    public String toString() {
        return "Coffee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", species='" + species + '\'' +
                ", type='" + type + '\'' +
                ", price=" + price +
                ", magazine=" + magazine +
                '}';
    }
}
