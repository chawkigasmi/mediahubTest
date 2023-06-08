import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../core";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading!: boolean;
  errorMessage!: string;

  constructor(private router: Router, private formBuilder: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    // Initialize the login form with empty fields and required validators
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onLogin() {
    this.isLoading = true;
    this.errorMessage = '';
    if (this.loginForm.valid) {
      // Call the authentication service to perform the login
      this.authService.login(this.loginForm.value).subscribe(
        data => {
          if (data) {
            // Redirect to the '/list-film' page if the login is successful
            this.router.navigate(['/list-film']);
          }
        },
        error => {
          // Handle the error in case of login failure
          this.errorMessage = "Erreur lors de la connexion.";
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }
}
