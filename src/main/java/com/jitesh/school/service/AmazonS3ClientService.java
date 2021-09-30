package com.jitesh.school.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AmazonS3ClientService
{
    void uploadFileToS3Bucket(MultipartFile multipartFile, boolean enablePublicReadAccess, String dir);
    
    void deleteFileFromS3Bucket(String fileName);
    
    List<String> getAllFilesFromS3Bucket();
}
