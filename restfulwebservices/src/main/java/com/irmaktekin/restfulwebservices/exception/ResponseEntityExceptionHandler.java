package com.irmaktekin.restfulwebservices.exception;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.irmaktekin.restfulwebservices.user.UserNotFoundException;
 
@ControllerAdvice
public class ResponseEntityExceptionHandler {
	
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllException(Exception ex, WebRequest request){
		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(), ex.getMessage(),request.getDescription(false));
		return new ResponseEntity(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public final ResponseEntity<Object> handleUserNotFoundException(Exception ex, WebRequest request){
		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(), ex.getMessage(),request.getDescription(false));
		return new ResponseEntity(errorDetails, HttpStatus.NOT_FOUND);
	}

}
