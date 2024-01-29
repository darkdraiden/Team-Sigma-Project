package com.bookManagement.Backend.repository;

import com.bookManagement.Backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface OrderRepo extends JpaRepository<Order,Integer> {

}
