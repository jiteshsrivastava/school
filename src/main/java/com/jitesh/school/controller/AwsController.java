package com.jitesh.school.controller;

import com.jitesh.school.service.AmazonS3ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/files")
public class AwsController {

	@Autowired
	private AmazonS3ClientService amazonS3ClientService;

	@PostMapping
	public Map<String, String> uploadFile(@RequestPart(value = "file") MultipartFile file, @RequestParam(value = "file_type") String file_type ) {
		String dir ="";
		if(file_type.equals("image")){
			dir= "static/images/";
		}else if(file_type.equals("document")){
			dir= "static/document/";
		}

		Map<String, String> response = new HashMap<>();

		if(!dir.isBlank()) {
			this.amazonS3ClientService.uploadFileToS3Bucket(file, true, dir);
			response.put("message", "file [" + file.getOriginalFilename() + "] uploading request submitted successfully.");
		}else{
			response.put("message", "file_type should be:  image | document ");
		}
		return response;
	}

	@DeleteMapping
	public Map<String, String> deleteFile(@RequestParam("file_name") String fileName) {
		this.amazonS3ClientService.deleteFileFromS3Bucket(fileName);

		Map<String, String> response = new HashMap<>();
		response.put("message", "file [" + fileName + "] removing request submitted successfully.");

		return response;
	}

	 @GetMapping
	public List<String> getAllFile() {
        return this.amazonS3ClientService.getAllFilesFromS3Bucket();
	}
}