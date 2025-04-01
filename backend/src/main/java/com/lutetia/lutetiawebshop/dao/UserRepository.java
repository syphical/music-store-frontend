package com.lutetia.lutetiawebshop.dao;

import com.lutetia.lutetiawebshop.models.CustomUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<CustomUser, Long> {
    CustomUser findByEmail(String email);
}
