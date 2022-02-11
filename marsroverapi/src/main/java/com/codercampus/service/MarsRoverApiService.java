package com.codercampus.service;

import com.codercampus.response.MarsRoverApiResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MarsRoverApiService {
    
    private static final String API_KEY = "ZCNvteFnebHwsm1saQ6aLa11bKq5hznKbIFsnQ3q";
    
    public MarsRoverApiResponse getRoverData(String rover, Integer marsSol) {
        RestTemplate rt = new RestTemplate();
        
        ResponseEntity<MarsRoverApiResponse> response = rt.getForEntity("https://api.nasa.gov/mars-photos/api/v1/rovers/"+ rover +"/photos?sol="+ marsSol +"&api_key="+ API_KEY, MarsRoverApiResponse.class);
        
        return response.getBody();
    }
}
