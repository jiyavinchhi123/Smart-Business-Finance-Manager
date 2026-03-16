package com.example.sbfm.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.sbfm.model.Customer;
import com.example.sbfm.repository.CustomerRepository;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> list() {
        return customerRepository.findAll();
    }

    public Customer create(Customer customer) {
        return customerRepository.save(customer);
    }
}
