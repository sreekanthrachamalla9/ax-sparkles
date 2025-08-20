import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './candidate-register.component.html',
})
export class CandidateRegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onFileSelected(event: any) {
    // Handle file selection
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(this.registerForm.value);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!');
      this.router.navigate(['/login']);  // ✅ works with correct import
    }
  }
}
