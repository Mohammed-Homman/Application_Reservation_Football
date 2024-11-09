package com.reservation.projet.j2ee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reservation.projet.j2ee.entity.Utilisateur;
import com.reservation.projet.j2ee.service.UtilisateurService;

@RestController
@RequestMapping("/utilisateurs")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping
    public List<Utilisateur> getAllUsers() {
        return utilisateurService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Utilisateur> getUserById(@PathVariable Long userId) {
        return utilisateurService.getUserById(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/verifier")
    public Utilisateur login(@RequestBody Utilisateur utilisateur) {
        Utilisateur user = utilisateurService.authenticate(utilisateur.getEmail(), utilisateur.getPassword());
        if (user!=null) {

            return user;
        } else {
            return null;
        }
    }
  @PostMapping
    public Utilisateur createUser(@RequestBody Utilisateur user) {
        return utilisateurService.createUser(user);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Utilisateur> updateUser(@PathVariable Long userId, @RequestBody Utilisateur user) {
        user.setId(userId);
        return ResponseEntity.ok(utilisateurService.updateUser(user));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        utilisateurService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
}
