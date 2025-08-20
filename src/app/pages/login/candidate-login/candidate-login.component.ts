import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './candidate-login.component.html'
})
export class CandidateLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

 onSubmit() {
  if (this.loginForm.valid) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const { email, password } = this.loginForm.value;

    const found = users.find((u: any) => u.email === email && u.password === password);

    if (found) {
      alert('Login successful!');
      this.router.navigate(['/dashboard']); // or home page
    } else {
      alert('Invalid credentials!');
    }
  }
}


  goToRegister() {
    this.router.navigate(['/register']);
  }
}
