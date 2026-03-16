package com.example.sbfm.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.sbfm.model.Supplier;
import com.example.sbfm.repository.SupplierRepository;

@Service
public class SupplierService {
    private final SupplierRepository supplierRepository;

    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> list() {
        return supplierRepository.findAll();
    }

    public Supplier create(Supplier supplier) {
        return supplierRepository.save(supplier);
    }
}
