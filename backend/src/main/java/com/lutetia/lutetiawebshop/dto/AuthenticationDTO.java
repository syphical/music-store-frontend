package com.lutetia.lutetiawebshop.dto;

public class AuthenticationDTO {
    public String email;
    public String password;
    public String firstName;
    public String middleName;
    public String lastName;
    public String phoneNumber;
    public String streetAddress;
    public String houseNumber;
    public String zipcode;
    public String city;
    public String province;

    public AuthenticationDTO(String email, String password, String firstName, String middleName, String lastName, String phoneNumber, String streetAddress, String houseNumber, String zipcode, String city, String province) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.streetAddress = streetAddress;
        this.houseNumber = houseNumber;
        this.zipcode = zipcode;
        this.city = city;
        this.province = province;
    }
}
