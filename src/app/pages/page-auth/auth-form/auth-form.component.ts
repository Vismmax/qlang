import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthData } from '../page-auth.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() type: 'login' | 'registration' | undefined;

  @Output() submit: EventEmitter<AuthData> = new EventEmitter();
  @Output() cancel: EventEmitter<null> = new EventEmitter();

  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  handleSubmit() {
    this.submit.emit(this.authForm.value);
  }

  handleCancel() {
    this.cancel.emit();
  }
}
