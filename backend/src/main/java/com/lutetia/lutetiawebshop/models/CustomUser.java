package com.lutetia.lutetiawebshop.models;

import jakarta.persistence.*;

@Entity(name = "Users")
public class CustomUser {
    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "role", nullable = false)
    private String role = "ROLE_USER"; // anders ROLE_ADMIN

    @Column(name = "street_address", nullable = false)
    private String streetAddress;

    @Column(name = "house_number", nullable = false)
    private String houseNumber;

    @Column(name = "zip_code", nullable = false)
    private String zipcode;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "province", nullable = false)
    private String province;

    public CustomUser() {
    }

    public CustomUser(String email, String password, String firstName, String lastName, String phoneNumber, String streetAddress, String houseNumber, String zipcode, String city, String province) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.role = "ROLE_USER";
        this.streetAddress = streetAddress;
        this.houseNumber = houseNumber;
        this.zipcode = zipcode;
        this.city = city;
        this.province = province;
    }

    public CustomUser(String email, String password) {
        this.email = email;
        this.password = password;
        this.role = "ROLE_USER";
        this.firstName = "User";
        this.lastName = "Account";
        this.streetAddress = "Street Address";
        this.houseNumber = "HouseNumber";
        this.zipcode = "ZipCode";
        this.city = "City";
        this.province = "Province";
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String username) {
        this.email = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {

        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }
}
