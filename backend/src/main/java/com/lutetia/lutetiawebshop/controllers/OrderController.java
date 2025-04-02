package com.lutetia.lutetiawebshop.controllers;

import com.lutetia.lutetiawebshop.dao.OrderDAO;
import com.lutetia.lutetiawebshop.dto.OrderDTO;
import com.lutetia.lutetiawebshop.dto.OrderItemDTO;
import com.lutetia.lutetiawebshop.models.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://s1157305.student.inf-hsleiden.nl:17305"})
@RequestMapping("/orders")
public class OrderController {
  private OrderDAO orderDAO;

  public OrderController(OrderDAO orderDAO) {
    this.orderDAO = orderDAO;
  }

  @GetMapping("/me")
  public ResponseEntity<List<Order>> getOrdersByUser() {
    List<Order> orders = orderDAO.getOrdersByUser();
    return ResponseEntity.ok(orders);
  }

  @PostMapping
  public ResponseEntity<String> createOrder(@RequestBody OrderDTO orderDTO) {
    orderDAO.createOrder(orderDTO);
    return ResponseEntity.ok("");
  }
}
