package org.fawez.inventory_service.repository;


import org.fawez.inventory_service.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, String> {
}
