package com.thoughtspot.backend.controller;

import com.thoughtspot.backend.Views;
import com.thoughtspot.backend.service.ViewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping(value = "/views", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
public class ViewsController {

    @Autowired
    ViewsService viewsService;
    RestTemplate restTemp = new RestTemplate();

    // Retrieve all views
    @GetMapping("/all")
    public List<Views> getAllData() {
        return viewsService.getAllData();
    }
//    @GetMapping("/all")
//    public ResponseEntity<?> getAllData() {
//        try {
//            String url = "http://api.worldbank.org/v2/country";
//
//            String result = restTemp.getForObject(url, String.class);
//
//            return new ResponseEntity<>(result, HttpStatus.OK);
//
//        }catch (Exception e){
//            e.printStackTrace();
//            return new ResponseEntity<>("ERROR!", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    // Insert view
    @PostMapping("/insert")
    public String addData(@RequestBody Views data) {
        return viewsService.addData(data);

    }

    // Fetch view by id
    @GetMapping("category/{id}")
    public List<Views> getDataById(@PathVariable("id") int id) {
        return viewsService.getDataById(id);
    }
//
    // Delete view
    @DeleteMapping("/delete/{id}")
    public void deleteData(@PathVariable int id){
        viewsService.deleteData(id);
    }
//
    // Update view
    @PutMapping("/edit/{id}")
    public Views updateData(@PathVariable int id, @RequestBody Views v) {
        viewsService.updateData(id, v);
        return v;
    }
}
