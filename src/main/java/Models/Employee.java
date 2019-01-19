package main.java.Models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String name;
    @Column
    private String forename;
    @Column
    private String position;
    @Column
    private double salary;
    @Column
    private double bonus;
    @OneToMany(mappedBy="employee")
    private List<Bill> bills;
    @ManyToOne
    @JoinColumn(name = "regularPost_id", foreignKey = @ForeignKey(name = "EMPLOYEE_REGULARPOST_ID_FK"))
    private RegularPost regularPost;

    public Employee() {
    }

    public Employee(String name, String forename, String position, double salary, double bonus, RegularPost regularPost) {
        this.name = name;
        this.forename = forename;
        this.position = position;
        this.salary = salary;
        this.bonus = bonus;
        this.regularPost = regularPost;
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

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public double getBonus() {
        return bonus;
    }

    public void setBonus(double bonus) {
        this.bonus = bonus;
    }

    public RegularPost getRegularPost() {
        return regularPost;
    }

    public void setRegularPost(RegularPost regularPost) {
        this.regularPost = regularPost;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", forename='" + forename + '\'' +
                ", position='" + position + '\'' +
                ", salary=" + salary +
                ", bonus=" + bonus +
                ", regularPost=" + regularPost +
                '}';
    }
}
