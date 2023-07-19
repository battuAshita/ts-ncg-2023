package com.thoughtspot.backend.dao;

import com.thoughtspot.backend.Views;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ViewsDao extends JpaRepository <Views, Integer> {
    List<Views> findById(int id);
}
