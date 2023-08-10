package com.irmaktekin.restfulwebservices.jpa;

import com.irmaktekin.restfulwebservices.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Integer>

{

}
