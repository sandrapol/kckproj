package main.java.Models;

import javax.persistence.*;

@Entity
@Table(name="Delivery")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String conveyance;
    @ManyToOne
    @JoinColumn(name = "plantation_id", foreignKey = @ForeignKey(name = "DELIVERY_PLANTATION_ID_FK"))
    private Plantation plantation;
    @ManyToOne
    @JoinColumn(name = "magazine_id", foreignKey = @ForeignKey(name = "DELIVERY_MAGAZINE_ID_FK"))
    private Magazine magazine;

    public Delivery() {
    }

    public Delivery(String conveyance, Plantation plantation, Magazine magazine) {
        this.conveyance = conveyance;
        this.plantation = plantation;
        this.magazine = magazine;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getConveyance() {
        return conveyance;
    }

    public void setConveyance(String conveyance) {
        this.conveyance = conveyance;
    }

    public Plantation getPlantation() {
        return plantation;
    }

    public void setPlantation(Plantation plantation) {
        this.plantation = plantation;
    }

    public Magazine getMagazine() {
        return magazine;
    }

    public void setMagazine(Magazine magazine) {
        this.magazine = magazine;
    }

    @Override
    public String toString() {
        return "Delivery{" +
                "id=" + id +
                ", conveyance='" + conveyance + '\'' +
                ", plantation=" + plantation +
                ", magazine=" + magazine +
                '}';
    }
}
