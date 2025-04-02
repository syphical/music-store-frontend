package com.lutetia.lutetiawebshop.dto;

import com.lutetia.lutetiawebshop.models.CustomUser;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public class OrderDTO {
    public double totalAmount;
    public List<OrderItemDTO> products;
    public LocalDate orderDate;

    public OrderDTO() {
    }

    public OrderDTO(double totalAmount, List<OrderItemDTO> products, LocalDate orderDate) {
        this.totalAmount = totalAmount;
        this.products = products;
        this.orderDate = orderDate;
    }
}
