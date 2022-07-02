import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    //render form
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  public onLoginSubmit() {
    // console.log(this.loginForm.value);
    const loginCredentials: { email: string; password: string } =
      this.loginForm.value;
    //call the login Api
    this.subs.add(
      this.apiService.login(loginCredentials).subscribe(
        (res) => {
          console.log('Login Success! Access token saved in localStorage');
          this.router.navigate(['/dashboard']);
          return res;
        },
        (err) => {
          console.log(err);
          alert(err);
        }
      )
    );

    //save access token to localstorage/cookies

    //redirect to dashboard
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
