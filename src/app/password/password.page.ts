import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  public loginForm: FormGroup;
  public usuarios: any;
  public user: any;

  constructor(public router: Router,
              private route: ActivatedRoute,
              public formBuilder: FormBuilder,
              private storage: Storage) {
    this.user = this.route.snapshot.paramMap.get('user');
    this.usuarios = {
      username: 'admin',
      password: '1234'
    };
    this.loginForm = formBuilder.group({
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    if (this.usuarios.password === this.loginForm.value.password) {
      this.storage.set('user', this.user);
      this.storage.set('active', 1);
      this.router.navigate(['/tabs/']);
    } else {
      alert('contraseña incorrecta');
    }


  }

  ngOnInit() {
  }

}
