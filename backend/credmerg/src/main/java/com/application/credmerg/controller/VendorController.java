package com.application.credmerg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.credmerg.entity.Vendor;
import com.application.credmerg.service.VendorService;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {
	
	@Autowired
    private VendorService service;

    @PostMapping("/add")
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return service.save(vendor);
    }

    @GetMapping
    public List<Vendor> getAllVendors() {
        return service.findAll();
    }
}
