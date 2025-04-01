package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.models.CustomUser;
import com.lutetia.lutetiawebshop.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomUser(CustomUser customUser);
}
