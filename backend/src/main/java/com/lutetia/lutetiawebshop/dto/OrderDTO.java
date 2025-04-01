package com.lutetia.lutetiawebshop.dto;

import com.lutetia.lutetiawebshop.models.CustomUser;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public class OrderDTO {
    public Long id;
    public LocalDate orderDate;
    public BigDecimal totalAmount;
    public CustomUser customUser;
    public List<OrderItemDTO> items;

    public OrderDTO() {
    }

    public OrderDTO(Long id, LocalDate orderDate, BigDecimal totalAmount, CustomUser customUser, List<OrderItemDTO> items) {
        this.id = id;
        this.orderDate = orderDate;
        this.totalAmount = totalAmount;
        this.customUser = customUser;
        this.items = items;
    }
}
