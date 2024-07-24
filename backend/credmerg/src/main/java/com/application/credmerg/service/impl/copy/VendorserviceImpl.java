package com.application.credmerg.service.impl.copy;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.credmerg.entity.Vendor;
import com.application.credmerg.repository.VendorRepository;
import com.application.credmerg.service.VendorService;

@Service
public class VendorserviceImpl implements VendorService{
    
	@Autowired
	VendorRepository dao;
	
	@Override
	public Vendor save(Vendor vendor) {
		dao.save(vendor);
		return vendor;
	}

	@Override
	public List<Vendor> findAll() {
		List<Vendor> vendorList=dao.findAll();
		return vendorList;
	}

}
