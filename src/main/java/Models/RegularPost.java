package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="RegularPost")
public class RegularPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String startTime;
    @Column
    private String endTime;
    @Column
    private int daysNumber;
    @OneToMany(mappedBy="regularPost",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Employee> employees;
    public RegularPost() {
    }

    public RegularPost(String startTime, String endTime, int daysNumber) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.daysNumber = daysNumber;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public int getDaysNumber() {
        return daysNumber;
    }

    public void setDaysNumber(int daysNumber) {
        this.daysNumber = daysNumber;
    }

    @Override
    public String toString() {
        return "RegularPost{" +
                "id=" + id +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", daysNumber=" + daysNumber +
                '}';
    }
}
