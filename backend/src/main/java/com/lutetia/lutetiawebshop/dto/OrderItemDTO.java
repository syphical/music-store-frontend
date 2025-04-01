package com.lutetia.lutetiawebshop.dto;

import com.lutetia.lutetiawebshop.models.Order;
import com.lutetia.lutetiawebshop.models.Product;

import java.math.BigDecimal;

public class OrderItemDTO {
    public Long id;
    public String productName;
    public BigDecimal productPrice;
    public int quantity;
    public Long productId;
    public Long orderId;

    public OrderItemDTO() {
    }

    public OrderItemDTO(Long id, String productName, BigDecimal productPrice, int quantity, Long productId, Long orderId) {
        this.id = id;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.productId = productId;
        this.orderId = orderId;
    }
}
