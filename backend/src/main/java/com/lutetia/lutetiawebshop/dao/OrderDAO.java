package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.dto.OrderDTO;
import com.lutetia.lutetiawebshop.dto.OrderItemDTO;
import com.lutetia.lutetiawebshop.models.CustomUser;
import com.lutetia.lutetiawebshop.models.Order;
import com.lutetia.lutetiawebshop.models.OrderItem;
import com.lutetia.lutetiawebshop.models.Product;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Observable;
import java.util.Optional;

@Component
public class OrderDAO {
  private OrderRepository orderRepository;
  private UserRepository userRepository;
  private ProductRepository productRepository;
  private OrderItemRepository orderItemRepository;

  public OrderDAO(OrderRepository orderRepository, UserRepository userRepository , ProductRepository productRepository, OrderItemRepository orderItemRepository) {
    this.orderRepository = orderRepository;
    this.userRepository = userRepository;
    this.productRepository = productRepository;
    this.orderItemRepository = orderItemRepository;
  }

  public List<Order> getOrdersByUser() {
    String user = SecurityContextHolder.getContext().getAuthentication().getName();
    CustomUser identifiedUser = this.userRepository.findByEmail(user);

    if (identifiedUser == null) {
      throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "");
    }

    List<Order> orders = orderRepository.findByCustomUser(identifiedUser);

    return orders;
  }

  public void createOrder(OrderDTO orderDTO) {
    List<OrderItem> orderList = new ArrayList<>();
    double totalPrice = 0;

    for (OrderItemDTO product : orderDTO.products) {
      OrderItem item = new OrderItem();
      item.setProductName(product.productName);
      item.setQuantity(product.quantity);
      item.setProductPrice(product.productPrice);
      totalPrice += product.quantity * product.productPrice;
      Optional<Product> productOptional = this.productRepository.findById(product.productId);
      if (productOptional.isPresent()) {
        item.setProduct(productOptional.get());
        orderList.add(item);
      } else {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
      }
    }

    Order order = new Order();
    CustomUser customUser = this.userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
    if (customUser == null) {
      throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "");
    }

    order.setCustomUser(customUser);
    order.setOrderItems(orderList);
    order.setOrderDate(LocalDate.now());
    order.setTotalAmount(totalPrice);

    this.orderRepository.save(order);

    for (OrderItem orderItem : orderList) {
      orderItem.setOrder(order);
      this.orderItemRepository.save(orderItem);
    }
  }
}
