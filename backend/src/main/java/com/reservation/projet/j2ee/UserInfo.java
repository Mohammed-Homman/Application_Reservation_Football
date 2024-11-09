package com.reservation.projet.j2ee;

import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {
    private Long utilisateur;
    private ResponseEntity<?> responseEntity;
}
