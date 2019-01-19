package main.java.Models;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name="Time")
public class Time {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private LocalTime time;
    @Column
    private int day;
    @Column
    private int month;
    @Column
    private int year;
    @OneToMany(mappedBy="time")
    private List<Bill> bills;

    public Time() {
    }

    public Time(LocalTime time, int day, int month, int year) {
        this.time = time;
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return "Time{" +
                "id=" + id +
                ", time=" + time +
                ", day=" + day +
                ", month=" + month +
                ", year=" + year +
                '}';
    }
}
