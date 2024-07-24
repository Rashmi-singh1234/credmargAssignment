package com.application.credmerg.service;

import java.util.List;

import com.application.credmerg.entity.Vendor;

public interface VendorService {
	public Vendor save(Vendor vendor);
	public List<Vendor> findAll();
	public void sendEmailToVendors(List<String> vendorEmails);
}
