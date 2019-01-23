package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="City")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String voivodeship;
    @Column
    private int ZIPcode;
    @OneToMany(mappedBy="city",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Customer> customers;
    public City() {
    }

    public City(String name, String voivodeship, int ZIPcode) {
        this.name = name;
        this.voivodeship = voivodeship;
        this.ZIPcode = ZIPcode;
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

    public String getVoivodeship() {
        return voivodeship;
    }

    public void setVoivodeship(String voivodeship) {
        this.voivodeship = voivodeship;
    }

    public int getZIPcode() {
        return ZIPcode;
    }

    public void setZIPcode(int ZIPcode) {
        this.ZIPcode = ZIPcode;
    }

    @Override
    public String toString() {
        return "City{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", voivodeship='" + voivodeship + '\'' +
                ", ZIPcode=" + ZIPcode +
                '}';
    }
}
