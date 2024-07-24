package com.application.credmerg.service.impl.copy;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.credmerg.entity.Email;
import com.application.credmerg.entity.Vendor;
import com.application.credmerg.repository.EmailRepository;
import com.application.credmerg.repository.VendorRepository;
import com.application.credmerg.service.VendorService;

@Service
public class VendorserviceImpl implements VendorService{
    
	@Autowired
	VendorRepository dao;
	
	@Autowired
	EmailRepository emaildao;
	
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
	
	@Override
	public void sendEmailToVendors(List<String> vendorEmails) {
		for (String email : vendorEmails) {
            Vendor vendor = dao.findByEmail(email);
            if (vendor != null) {
                String emailContent = String.format("Sending payments to vendor %s at UPI %s", vendor.getName(), vendor.getUpi());
                Email sentEmail=new Email();
                sentEmail.setRecipient(email);
                sentEmail.setSubject("Payment Notification");
                sentEmail.setBody(emailContent);
                sentEmail.setSentAt(LocalDateTime.now());
                emaildao.save(sentEmail);
                System.out.println("Email: " + email);
                System.out.println("Content: " + emailContent);
            } else {
                System.out.println("Vendor with email " + email + " not found.");
            }
        }
		
	}

}
