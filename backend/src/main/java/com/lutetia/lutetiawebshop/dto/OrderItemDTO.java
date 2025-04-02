package com.lutetia.lutetiawebshop.dto;

import com.lutetia.lutetiawebshop.models.Order;
import com.lutetia.lutetiawebshop.models.Product;

import java.math.BigDecimal;

public class OrderItemDTO {
    public String productName;
    public double productPrice;
    public int quantity;
    public Long productId;

    public OrderItemDTO() {
    }

    public OrderItemDTO(String productName, double productPrice, int quantity, Long productId) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.productId = productId;
    }
}
