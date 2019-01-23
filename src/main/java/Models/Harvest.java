package main.java.Models;

import javax.persistence.*;

@Entity
@Table(name="Harvest")
public class Harvest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String quality;
    @Column
    private double quantity;
    @ManyToOne
    @JoinColumn(name = "plantation_id", foreignKey = @ForeignKey(name = "HARVEST_PLANTATION_ID_FK"))
    private Plantation plantation;

    public Harvest() {
    }

    public Harvest(String quality, double quantity, Plantation plantation) {
        this.quality = quality;
        this.quantity = quantity;
        this.plantation = plantation;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuality() {
        return quality;
    }

    public void setQuality(String quality) {
        this.quality = quality;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public Plantation getPlantation() {
        return plantation;
    }

    public void setPlantation(Plantation plantation) {
        this.plantation = plantation;
    }

    @Override
    public String toString() {
        return "Harvest{" +
                "id=" + id +
                ", quality='" + quality + '\'' +
                ", quantity=" + quantity +
                ", plantation=" + plantation +
                '}';
    }
}
