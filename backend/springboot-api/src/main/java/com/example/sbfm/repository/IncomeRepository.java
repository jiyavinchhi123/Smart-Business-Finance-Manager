package com.example.sbfm.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sbfm.model.Income;

public interface IncomeRepository extends JpaRepository<Income, UUID> {}
