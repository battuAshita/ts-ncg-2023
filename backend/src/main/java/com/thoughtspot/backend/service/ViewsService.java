package com.thoughtspot.backend.service;

import com.thoughtspot.backend.Views;
import com.thoughtspot.backend.dao.ViewsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViewsService {

    @Autowired
    ViewsDao viewsDao;
    public String addData(Views data) {
        viewsDao.save(data);
        return "Success";
    }

    public List<Views> getDataById(int id) {
        return viewsDao.findById(id);
    }
//
    public void deleteData(int id) {
        viewsDao.deleteById(id);
    }
//
    public void updateData(int id, Views v) {
        Views views = viewsDao.getReferenceById(id);

        views.setName(v.getName());
        views.setCountry(v.getCountry());
        views.setChart_type(v.getChart_type());
        views.setIndicator(v.getIndicator());
        views.setStart_date(v.getStart_date());
        views.setEnd_date(v.getEnd_date());

        viewsDao.save(views);
    }

    public List<Views> getAllData() {
        return viewsDao.findAll();
    }
}
