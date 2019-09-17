import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public usuarios: any;
  public userlog: any;
  public usersta: any;

  constructor(
      public router: Router,
      public formBuilder: FormBuilder,
      private faio: FingerprintAIO,
      private storage: Storage
      ) {
    this.storage.get('user').then((result) => {
      console.log(result);
      this.userlog = result;
      this.processFetchedData();
    });
    this.storage.get('active').then((result) => {
      console.log(result);
      this.usersta = result;
      this.login();
      this.processFetchedData();
    });
    this.usuarios = {
      username: 'admin',
      password: 1234
    };
    this.loginForm = formBuilder.group({
      username: ['', Validators.required]
    });

  }

  login() {
    if (this.usersta === 1) {
      this.router.navigate(['/tabs/']);
    }
  }

  processFetchedData() {
    console.log(this.userlog); // check the console
  }


  onSignIn() {

    if (this.usuarios.username === this.loginForm.value.username || this.storage.get('user')) {

      console.log(this.loginForm.value.username);

      this.faio.isAvailable().then(resultado => {
        console.log(resultado);
        this.faio.show({
          clientId: 'Fingerprint-Demo', // Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
          clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Necessary for Android encrpytion of keys. Use random secret key.
          disableBackup: true,  // Only for Android(optional)
          localizedFallbackTitle: 'Use Pin', // Only for iOS
          localizedReason: 'Please authenticate' // Only for iOS
        }).then(result => { this.router.navigate(['/tabs/']); })
            .catch((error: any) => console.log(error));
      }).catch((error: any) => console.log(error));

      let x = this.userlog ? this.userlog : this.loginForm.value.username;

      this.router.navigate(['/password/' + x]);
    } else {
      alert('usuario incorrecto');
    }


  }

  otherac() {
    this.storage.remove('user');
    this.userlog = null;
  }

  ngOnInit() {
  }

}
