package com.example.sbfm.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sbfm.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, UUID> {}
