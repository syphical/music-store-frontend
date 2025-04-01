package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.models.Order;
import com.lutetia.lutetiawebshop.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    List<OrderItem> findByOrder(Order order);
}
