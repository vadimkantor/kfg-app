webpackJsonp([10],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RatesProvider = (function () {
    function RatesProvider() {
    }
    RatesProvider.prototype.getCriteria = function (school) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/criteria');
    };
    RatesProvider.prototype.getUserRates = function (school, classNo, userId, eventId) {
        var ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + userId + '/' + eventId;
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref(ratesPath);
    };
    RatesProvider.prototype.getCurrentRates = function (school, classNo, eventId) {
        var ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + 'current' + '/' + eventId;
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref(ratesPath);
    };
    RatesProvider.prototype.saveUserRates = function (school, classNo, userId, eventId, rates) {
        var ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + userId + '/' + eventId;
        return new Promise(function (resolve) {
            rates.forEach(function (r) {
                var id = r.critId;
                __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref(ratesPath).child(id).set({
                    "subject": r.subject,
                    "criterion": r.criterion,
                    "rate": r.rate
                });
            });
            return resolve();
        });
    };
    RatesProvider.prototype.saveCurrentRates = function (school, classNo, eventId, rates) {
        var ratesPath = '/schools/' + school + '/rates/' + classNo + '/' + 'current' + '/' + eventId;
        return new Promise(function (resolve) {
            rates.forEach(function (r) {
                var id = r.critId;
                __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref(ratesPath).child(id).set({
                    "subject": r.subject,
                    "criterion": r.criterion,
                    "rate": r.rate,
                    "count": r.count
                });
            });
            return resolve();
        });
    };
    return RatesProvider;
}());
RatesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], RatesProvider);

//# sourceMappingURL=rates.js.map

/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_main__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyDHm8_PhwCJKfmvuEFouVU-PSLEoS-0egw",
            authDomain: "schooladvisor-prod.firebaseapp.com",
            databaseURL: "https://schooladvisor-prod.firebaseio.com",
            projectId: "schooladvisor-prod",
            storageBucket: "schooladvisor-prod.appspot.com"
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (_this.auth.isAuthenticated()) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["a" /* Auth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_slidebox_slideprovider__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainPage = (function () {
    function MainPage(navCtrl, auth, slideboxProvider) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.slideboxProvider = slideboxProvider;
        this.userName = '';
        this.school = '';
        this.isSchoolAdmin = false;
        this.isClassAdmin = false;
    }
    MainPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.getUserData().on('value', function (snapshot) {
            _this.userName = snapshot.val().name;
            _this.isSchoolAdmin = snapshot.val().isSchoolAdmin;
            _this.isClassAdmin = snapshot.val().isClassAdmin;
            _this.school = snapshot.val().school;
        });
        this.slideboxProvider.getSlidebox(this.school)
            .on('value', function (snapshot) {
            _this.slides = [];
            snapshot.forEach(function (snap) {
                _this.slides.push(snap.val());
                return false;
            });
        });
    };
    MainPage.prototype.logout = function () {
        this.auth.logoutUser();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MainPage.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MainPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    MainPage.prototype.isUserSchoolAdmin = function () {
        return this.isSchoolAdmin;
    };
    MainPage.prototype.isUserClassAdmin = function () {
        return this.isClassAdmin;
    };
    MainPage.prototype.goToAdmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_admin__["a" /* AdminPage */]);
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-main',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/main/main.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      School-Advisor\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p>Hallo, <strong>{{ userName }}</strong>!</p>\n\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button (click)="goToHome()" color="primary">Überspringen</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/schooladvisor-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">Bereit zu bewerten?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="goToHome()">\n        Weiter\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n\n\n</ion-content>\n\n<ion-menu [content]="mycontent" type="overlay">\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="goToHome()">\n        <ion-icon name="star-half"></ion-icon>\n        Bewerten\n      </button>\n      <button ion-item (click)="goToProfile()">\n        <ion-icon name="person"></ion-icon>\n        Benutzer\n      </button>\n      <button *ngIf="isUserClassAdmin()===true || isUserSchoolAdmin()===true" ion-item (click)="goToAdmin()">\n        <ion-icon name="settings"></ion-icon>\n        Administrieren\n      </button>\n      <button ion-item (click)="logout()">\n        <ion-icon name="exit"></ion-icon>\n        Abmelden\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent></ion-nav>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_slidebox_slideprovider__["a" /* SlideboxProvider */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, authProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__main_main__["a" /* MainPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push('signup');
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push('reset-password');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'login'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Anmeldung\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Deine Email Adresse"\n                 [class.invalid]="!loginForm.controls.email.valid && loginForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="!loginForm.controls.email.valid  && loginForm.controls.email.dirty">\n      <p>Gib eine valide Email Addresse ein</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Kennwort</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Dein Kennwort"\n                 [class.invalid]="!loginForm.controls.password.valid && loginForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message"\n              *ngIf="!loginForm.controls.password.valid  && loginForm.controls.password.dirty">\n      <p>Das Kennwort muss mindestens 6 Zeichen haben</p>\n    </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n      Anmelden\n    </button>\n\n  </form>\n\n  <button ion-button block clear (click)="goToSignup()">\n    Registrieren\n  </button>\n\n  <button ion-button block clear (click)="goToResetPassword()">\n    Das Kennwort vergessen\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultPage = (function () {
    function ResultPage(navCtrl, navParams, auth, ratesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.ratesProvider = ratesProvider;
        this.classNo = '';
        this.school = '';
        this.eventId = '';
        this.eventName = '';
        this.eventDate = '';
        this.eventId = this.navParams.get("eventId");
        this.eventName = this.navParams.get("eventName");
        this.eventDate = this.navParams.get("eventDate");
    }
    ResultPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.getUserData().on('value', function (snapshot) {
            _this.classNo = snapshot.val().classNo;
            _this.school = snapshot.val().school;
        });
        this.ratesProvider.getCurrentRates(this.school, this.classNo, this.eventId).on('value', function (snapshot) {
            _this.results = [];
            _this.avg = 0;
            var i = 0;
            var sum = 0;
            snapshot.forEach(function (snap) {
                i = i + 1;
                sum = sum + snap.val().rate;
                _this.results.push({
                    "criterion": snap.val().criterion,
                    "rate": snap.val().rate,
                    "count": snap.val().count
                });
                _this.avg = sum / i;
                return false;
            });
        });
    };
    return ResultPage;
}());
ResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-result',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/result/result.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ergebnisse</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list  no-lines="false">\n    <p><strong>{{eventName}} am {{eventDate | date: \'dd.MM.yyyy\'}}</strong></p>\n    <ion-grid>\n      <ion-row>\n        <ion-col><strong>Kriterium</strong></ion-col>\n        <ion-col col-2><strong>Erg.</strong></ion-col>\n        <ion-col col-2><strong>Anz.</strong></ion-col>\n      </ion-row>\n      <ion-item *ngFor="let r of results" text-wrap>\n        <ion-row>\n          <ion-col>{{r.criterion}}</ion-col>\n          <ion-col col-2>\n            <ion-badge color="star" item-end>{{r.rate | number:\'1.2-2\'}}</ion-badge>\n          </ion-col>\n          <ion-col col-2>\n            <ion-badge item-end>{{r.count}}</ion-badge>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-row>\n        <ion-col><strong>Mittelwert</strong></ion-col>\n        <ion-col col-3>\n          <ion-badge color="star" item-end>{{avg | number:\'1.2-2\'}}</ion-badge>\n          </ion-col>\n        <ion-col col-4></ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/result/result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */]])
], ResultPage);

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_rate__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events_events__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rates_rates__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pipes_src_app_pipes_array_reverse__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pipes_src_app_pipes_array_reverse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_pipes_src_app_pipes_array_reverse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, eventsProvider, ratesProvider, auth, datepipe, reversePipe) {
        this.navCtrl = navCtrl;
        this.eventsProvider = eventsProvider;
        this.ratesProvider = ratesProvider;
        this.auth = auth;
        this.datepipe = datepipe;
        this.reversePipe = reversePipe;
        this.userId = '';
        this.classNo = '';
        this.school = '';
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.getUserData().on('value', function (snapshot) {
            _this.userId = snapshot.val().id;
            _this.classNo = snapshot.val().classNo;
            _this.school = snapshot.val().school;
        });
        this.eventsProvider.getEvents(this.school, this.classNo)
            .on('value', function (snapshot) {
            _this.eventList = [];
            snapshot.forEach(function (snap) {
                if (snap.val().hidden !== true) {
                    _this.eventList.push({
                        id: snap.key,
                        name: snap.val().name,
                        date: snap.val().date,
                        dateTo: snap.val().dateTo
                    });
                }
                ;
                return false;
            });
        });
    };
    HomePage.prototype.goToRate = function (event) {
        var readOnly = this.isRated(event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rate_rate__["a" /* RatePage */], {
            'eventId': event.id,
            'eventDate': event.date,
            'eventDateTo': event.dateTo,
            'eventName': event.name,
            'eventReadOnly': readOnly
        });
    };
    HomePage.prototype.goToResult = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_result__["a" /* ResultPage */], {
            'eventId': event.id,
            'eventName': event.name,
            'eventDate': event.date
        });
    };
    HomePage.prototype.isRated = function (event) {
        var exists = false;
        this.ratesProvider.getUserRates(this.school, this.classNo, this.userId, event.id).on('value', function (snapshot) {
            if (snapshot.val() !== null) {
                exists = true;
            }
        });
        return exists;
    };
    HomePage.prototype.isRateable = function (event) {
        var curDate = new Date();
        if (!event.date || typeof event.date === 'undefined' || !event.dateTo || typeof event.dateTo === 'undefined') {
            return false;
        }
        var eventDate = new Date(event.date);
        var eventDateTo = new Date(event.dateTo);
        return curDate >= eventDate && curDate < eventDateTo;
    };
    HomePage.prototype.isResultable = function (event) {
        var curDate = new Date();
        if (!event.dateTo || typeof event.dateTo === 'undefined') {
            return false;
        }
        var eventDateTo = new Date(event.dateTo);
        return curDate >= eventDateTo;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bewertungen\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let event of eventList | reverse" text-wrap>\n      <ion-card>\n        <ion-card-header>\n          <strong>{{event?.name}}</strong>\n          <p>Klasse: <strong>{{classNo}}</strong></p>\n          <p>Datum: <strong>{{event?.date |  date: \'dd.MM.yyyy\'}}</strong></p>\n          <p>Bewertung bis: <strong>{{event?.dateTo |  date: \'dd.MM.yyyy\'}}</strong></p>\n          <div *ngIf="isRated(event)===true">Status: bewertet\n            <ion-icon name="md-checkbox-outline"></ion-icon>\n          </div>\n          <div *ngIf="isRated(event)!==true">Status: noch nicht bewertet</div>\n        </ion-card-header>\n        <ion-card-content>\n          <button *ngIf="isRated(event)===true" ion-button color="secondary" icon-left (click)="goToRate(event)"\n          >\n            Ansehen\n          </button>\n          <button *ngIf="isRated(event)!==true" ion-button [disabled]="!isRateable(event)" icon-left color="secondary"\n                  (click)="goToRate(event)"\n          >\n            Bewerten\n          </button>\n          <button ion-button color="primary" icon-right (click)="goToResult(event)"\n                  [disabled]="!isResultable(event)">\n            Ergebnisse\n          </button>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8_ngx_pipes_src_app_pipes_array_reverse__["ReversePipe"]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_events_events__["a" /* EventsProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_rates_rates__["a" /* RatesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_8_ngx_pipes_src_app_pipes_array_reverse__["ReversePipe"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SubjectsProvider = (function () {
    function SubjectsProvider() {
    }
    SubjectsProvider.prototype.getSubjects = function (school) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/subjects');
    };
    return SubjectsProvider;
}());
SubjectsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SubjectsProvider);

//# sourceMappingURL=subjects.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RatePage = (function () {
    function RatePage(navCtrl, navParams, auth, ratesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.ratesProvider = ratesProvider;
        this.eventId = '';
        this.eventName = '';
        this.eventDate = '';
        this.userId = '';
        this.classNo = '';
        this.school = '';
        this.eventId = this.navParams.get("eventId");
        this.eventDate = this.navParams.get("eventDate");
        this.eventName = this.navParams.get("eventName");
        this.eventReadOnly = this.navParams.get("eventReadOnly");
    }
    RatePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.getUserData().on('value', function (snapshot) {
            _this.userId = snapshot.val().id;
            _this.classNo = snapshot.val().classNo;
            _this.school = snapshot.val().school;
        });
        this.currentRates = [];
        this.criteriaWithRates = [];
        this.ratesProvider.getCriteria(this.school).on('value', function (criteriaSnapshot) {
            criteriaSnapshot.forEach(function (criteriaSnap) {
                var rateVal = 0;
                var subjectName;
                _this.ratesProvider.getUserRates(_this.school, _this.classNo, _this.userId, _this.eventId).on('value', function (ratesSnapshot) {
                    ratesSnapshot.forEach(function (ratesSnap) {
                        if (ratesSnap.key === criteriaSnap.key) {
                            rateVal = ratesSnap.val().rate;
                        }
                        return false;
                    });
                });
                _this.criteriaWithRates.push({
                    critId: criteriaSnap.key,
                    criterion: criteriaSnap.val().criterion,
                    description: criteriaSnap.val().description,
                    rate: rateVal,
                    subject: _this.eventName
                });
                return false;
            });
        });
        this.ratesProvider.getCurrentRates(this.school, this.classNo, this.eventId).on('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                _this.currentRates.push(snap.val());
                return false;
            });
        });
    };
    RatePage.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    RatePage.prototype.saveRates = function () {
        this.ratesProvider.saveUserRates(this.school, this.classNo, this.userId, this.eventId, this.criteriaWithRates);
        for (var i = 0; i < this.criteriaWithRates.length; i++) {
            var curRate = 0;
            var count = 0;
            if (typeof this.currentRates[i] === 'undefined') {
                curRate = this.criteriaWithRates[i].rate;
            }
            else {
                curRate = this.currentRates[i].rate;
                count = this.currentRates[i].count;
            }
            this.currentRates[i] = this.criteriaWithRates[i];
            this.currentRates[i].rate = ((curRate + this.criteriaWithRates[i].rate) / 2.0);
            this.currentRates[i].count = count + 1;
        }
        this.ratesProvider.saveCurrentRates(this.school, this.classNo, this.eventId, this.criteriaWithRates);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return RatePage;
}());
RatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'rate',
        segment: 'rate/:eventId'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rate',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/rate/rate.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bewertung</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>{{eventName}}. Datum: {{eventDate}}</ion-list-header>\n    <ion-item-sliding *ngFor="let c of criteriaWithRates">\n      <ion-item text-wrap>\n        <h2>{{c.criterion}}</h2>\n        <h3>{{c.description}}</h3>\n        <rating [(ngModel)]="c.rate"\n                readOnly="false"\n                max="5"\n                emptyStarIconName="star-outline"\n                halfStarIconName="star-half"\n                starIconName="star"\n                nullable="true"\n        >\n        </rating>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n  <button *ngIf="eventReadOnly!==true" ion-button round full (click)="saveRates()">Senden</button>\n</ion-content>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/rate/rate.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */]])
], RatePage);

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(alertCtrl, profileProvider) {
        this.alertCtrl = alertCtrl;
        this.profileProvider = profileProvider;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.name = userProfileSnapshot.val().name;
            _this.school = userProfileSnapshot.val().school;
            _this.classNo = userProfileSnapshot.val().classNo;
        });
    };
    ProfilePage.prototype.save = function (name, school, classNo) {
        var _this = this;
        this.profileProvider.updateProfile(name, school.toUpperCase(), classNo.toUpperCase()).then(function () {
            var alert = _this.alertCtrl.create({
                message: "Profil geändert",
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'profile'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Benutzer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Benutzerdaten\n    </ion-list-header>\n\n\n    <ion-item>\n      <ion-label stacked>Name</ion-label>\n      <ion-input [(ngModel)]="name" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Schule</ion-label>\n      <ion-input [(ngModel)]="school" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Klasse</ion-label>\n      <ion-input [(ngModel)]="classNo" ></ion-input>\n    </ion-item>\n\n    <button ion-button block (click)="save(name,school,classNo)">\n      Speichern\n    </button>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_subjects_subjects__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateEventPage = (function () {
    function CreateEventPage(navCtrl, eventsProvider, subjectsProvider, auth, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.eventsProvider = eventsProvider;
        this.subjectsProvider = subjectsProvider;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.classNo = '';
        this.school = '';
        this.createEventForm = formBuilder.group({
            eventName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            eventDate: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            eventDateTo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
    }
    CreateEventPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.getUserData().on('value', function (snapshot) {
            _this.classNo = snapshot.val().classNo;
            _this.school = snapshot.val().school;
        });
        this.subjectsProvider.getSubjects(this.school)
            .on('value', function (snapshot) {
            _this.subjects = [];
            snapshot.forEach(function (snap) {
                _this.subjects.push(snap.val());
                return false;
            });
        });
    };
    CreateEventPage.prototype.createEvent = function () {
        var _this = this;
        this.eventsProvider.createEvent(this.createEventForm.value.eventName, this.school, this.classNo, this.createEventForm.value.eventDate, this.createEventForm.value.eventDateTo).then(function () {
            _this.createdSuccessful();
        }).catch(function (err) { return _this.createdFailed(); });
    };
    CreateEventPage.prototype.createdSuccessful = function () {
        var alert = this.alertCtrl.create({
            message: "Klassenarbeit erstellt",
            buttons: [
                {
                    text: "Ok",
                    role: 'cancel'
                }
            ]
        });
        alert.present();
        this.navCtrl.pop();
    };
    CreateEventPage.prototype.createdFailed = function () {
        var alert = this.alertCtrl.create({
            message: "Klassenarbeit konnte nicht erstellt werden",
            buttons: [
                {
                    text: "Ok",
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    return CreateEventPage;
}());
CreateEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: 'create-event'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-create-event',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/create-event/create-event.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Neue Klassenarbeit</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="createEventForm" (submit)="createEvent()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Name</ion-label>\n      <ion-select formControlName="eventName" type="text" placeholder="Name der Klassenarbeit">\n        <ion-option *ngFor="let subject of subjects">{{subject}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Datum</ion-label>\n      <ion-datetime displayFormat="DD.MM.YYYY" pickerFormat="DD MMM YYYY" min="2017" max="2020-12-31"\n                    formControlName="eventDate">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Bewertungsschlussdatum</ion-label>\n      <ion-datetime displayFormat="DD.MM.YYYY" pickerFormat="DD MMM YYYY" min="2017" max="2020-12-31"\n                    formControlName="eventDateTo">\n      </ion-datetime>\n    </ion-item>\n\n    <button type="submit" ion-button block [disabled]="!createEventForm.valid">\n      Erstellen\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/create-event/create-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_subjects_subjects__["a" /* SubjectsProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CreateEventPage);

//# sourceMappingURL=create-event.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_subjects_subjects__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangeEventPage = (function () {
    function ChangeEventPage(navParams, eventsProvider, auth, subjectsProvider, alertCtrl) {
        this.navParams = navParams;
        this.eventsProvider = eventsProvider;
        this.auth = auth;
        this.subjectsProvider = subjectsProvider;
        this.alertCtrl = alertCtrl;
        this.classNo = '';
        this.school = '';
        this.eventId = '';
        this.eventName = '';
        this.eventDate = '';
        this.eventDateTo = '';
    }
    ChangeEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getUserData().on('value', function (snapshot) {
            _this.school = snapshot.val().school;
            _this.classNo = snapshot.val().classNo;
        });
        this.eventId = this.navParams.get("eventId");
        this.eventName = this.navParams.get("eventName");
        this.eventDate = this.navParams.get("eventDate");
        this.eventDateTo = this.navParams.get("eventDateTo");
        this.subjectsProvider.getSubjects(this.school)
            .on('value', function (snapshot) {
            _this.subjects = [];
            snapshot.forEach(function (snap) {
                console.log(snap.val(), snap.key);
                _this.subjects.push(snap.val());
                return false;
            });
        });
    };
    ChangeEventPage.prototype.changeEvent = function () {
        var _this = this;
        this.eventsProvider.changeEvent(this.eventId, this.eventName, this.school, this.classNo, this.eventDate, this.eventDateTo).then(function () {
            var alert = _this.alertCtrl.create({
                message: "Klassenarbeit geändert",
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
        });
    };
    return ChangeEventPage;
}());
ChangeEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-change-event',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/change-event/change-event.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Klassenarbeit</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label stacked>Name</ion-label>\n    <ion-select [(ngModel)]="eventName"  placeholder="Name der Klassenarbeit">\n      <ion-option *ngFor="let subject of subjects" [value]="subject">{{subject}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Datum</ion-label>\n    <ion-datetime displayFormat="DD.MM.YYYY" pickerFormat="DD MMM YYYY" min="2017" max="2020-12-31" [(ngModel)]="eventDate">\n    </ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Bewertungsschlussdatum</ion-label>\n    <ion-datetime displayFormat="DD.MM.YYYY" pickerFormat="DD MMM YYYY" min="2017" max="2020-12-31" [(ngModel)]="eventDateTo">\n    </ion-datetime>\n  </ion-item>\n\n  <button ion-button block (click)="changeEvent(eventName, eventDate, eventDateTo)">\n    Speichern\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/change-event/change-event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_subjects_subjects__["a" /* SubjectsProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ChangeEventPage);

//# sourceMappingURL=change-event.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events_events__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_result__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_event_create_event__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_event_change_event__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminPage = (function () {
    function AdminPage(navCtrl, auth, eventsProvider) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.eventsProvider = eventsProvider;
        this.userName = '';
        this.classNo = '';
        this.school = '';
    }
    AdminPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.auth.getUserData().on('value', function (snapshot) {
            _this.userName = snapshot.val().name;
            _this.school = snapshot.val().school;
            _this.classNo = snapshot.val().classNo;
        });
        this.eventsProvider.getEvents(this.school, this.classNo).endAt('date').limitToLast(50).on('value', function (snapshot) {
            _this.eventList = [];
            snapshot.forEach(function (snap) {
                _this.eventList.push({
                    id: snap.key,
                    name: snap.val().name,
                    date: snap.val().date,
                    dateTo: snap.val().dateTo,
                    hidden: snap.val().hidden
                });
                return false;
            });
        });
    };
    AdminPage.prototype.goToResult = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__result_result__["a" /* ResultPage */], {
            'eventId': event.id,
            'eventName': event.name,
            'eventDate': event.date
        });
    };
    AdminPage.prototype.goToCreateEventPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__create_event_create_event__["a" /* CreateEventPage */]);
    };
    AdminPage.prototype.goToChangeEvent = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__change_event_change_event__["a" /* ChangeEventPage */], {
            'eventId': event.id,
            'eventDate': event.date,
            'eventDateTo': event.dateTo,
            'eventName': event.name
        });
    };
    AdminPage.prototype.isHidden = function (event) {
        return event.hidden;
    };
    AdminPage.prototype.hideEvent = function (event) {
        this.eventsProvider.hideEvent(this.school, this.classNo, event.id);
    };
    AdminPage.prototype.unhideEvent = function (event) {
        this.eventsProvider.unhideEvent(this.school, this.classNo, event.id);
    };
    return AdminPage;
}());
AdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-admin',template:/*ion-inline-start:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/admin/admin.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Administrieren\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item text-wrap><strong>{{ userName }}</strong>, Du bist ein Administrator der Klasse {{ classNo }}!</ion-item>\n\n  <ion-row center>\n    <ion-col text-center>\n      <button ion-button color="primary" (click)="goToCreateEventPage()">\n        <ion-icon name="add-circle"></ion-icon>\n        Neue Klassenarbeit erstellen\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item *ngFor="let event of eventList" text-wrap>\n      <ion-card>\n        <ion-card-header>\n          <strong>{{event?.name}}</strong>\n          <p>Klasse: <strong>{{classNo}}</strong></p>\n          <p>Datum: <strong>{{event?.date | date: \'dd.MM.yyyy\'}}</strong></p>\n          <p>Bewertung bis: <strong>{{event?.dateTo | date: \'dd.MM.yyyy\'}}</strong></p>\n        </ion-card-header>\n        <ion-card-content>\n          <button ion-button color="dark" (click)="goToChangeEvent(event)">\n            <ion-icon name="settings"></ion-icon>\n          </button>\n          <button [disabled]="isHidden(event)===true" ion-button color="danger" (click)="hideEvent(event)">\n            <ion-icon name="eye-off"></ion-icon>\n          </button>\n          <button [disabled]="isHidden(event)!==true" ion-button color="secondary" (click)="unhideEvent(event)">\n            <ion-icon name="eye"></ion-icon>\n          </button>\n          <button ion-button color="primary" (click)="goToResult(event)">\n            Ergebnisse\n          </button>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kantor/Documents/workspace/schooladvisor/src/pages/admin/admin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_events_events__["a" /* EventsProvider */]])
], AdminPage);

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		1090,
		9
	],
	"../pages/change-event/change-event.module": [
		1089,
		8
	],
	"../pages/create-event/create-event.module": [
		1088,
		7
	],
	"../pages/login/login.module": [
		1092,
		6
	],
	"../pages/main/main.module": [
		1091,
		5
	],
	"../pages/profile/profile.module": [
		1087,
		4
	],
	"../pages/rate/rate.module": [
		1085,
		3
	],
	"../pages/reset-password/reset-password.module": [
		1093,
		1
	],
	"../pages/result/result.module": [
		1086,
		2
	],
	"../pages/signup/signup.module": [
		1094,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 284;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("/userProfiles/" + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.updateProfile = function (name, school, classNo) {
        return this.userProfile.update({
            name: name,
            classNo: classNo,
            school: school
        });
    };
    ProfileProvider.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.EmailAuthProvider
            .credential(this.currentUser.email, password);
        return this.currentUser.reauthenticateWithCredential(credential).then(function (user) {
            _this.currentUser.updateEmail(newEmail).then(function (user) {
                _this.userProfile.update({ email: newEmail });
            });
        });
    };
    ProfileProvider.prototype.updatePassword = function (newPassword, oldPassword) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.EmailAuthProvider
            .credential(this.currentUser.email, oldPassword);
        return this.currentUser.reauthenticateWithCredential(credential).then(function (user) {
            _this.currentUser.updatePassword(newPassword).then(function (user) {
                console.log("Password Changed");
            }, function (error) {
                console.log(error);
            });
        });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideboxProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SlideboxProvider = (function () {
    function SlideboxProvider() {
    }
    SlideboxProvider.prototype.getSlidebox = function (school) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/slidebox');
    };
    return SlideboxProvider;
}());
SlideboxProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SlideboxProvider);

//# sourceMappingURL=slideprovider.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = (function () {
    function AuthProvider() {
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth();
        this.userProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/userProfiles');
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (name, school, classNo, email, password, isSchoolAdmin, isClassAdmin) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            _this.userProfileRef.child(newUser.uid).set({
                id: newUser.uid,
                email: email,
                name: name,
                classNo: classNo,
                school: school,
                isSchoolAdmin: isSchoolAdmin,
                isClassAdmin: isClassAdmin
            });
        });
    };
    AuthProvider.prototype.getUserData = function () {
        return this.userProfileRef.child(this.fireAuth.currentUser.uid);
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        this.userProfileRef.child(this.fireAuth.currentUser.uid).off();
        return this.fireAuth.signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(662);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(1080);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rate_rate__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_result_result__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_events_events__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_subjects_subjects__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic2_rating__ = __webpack_require__(1081);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rates_rates__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_main_main__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_profile_profile__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_create_event_create_event__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_pipes__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_change_event_change_event__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_slidebox_slideprovider__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var cloudSettings = {
    'core': {
        'app_id': 'c33774e3'
    }
};
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (err) {
        window.Ionic.handleNewError(err);
    };
    return AppErrorHandler;
}());

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_rate_rate__["a" /* RatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_result_result__["a" /* ResultPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin__["a" /* AdminPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_event_create_event__["a" /* CreateEventPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_change_event_change_event__["a" /* ChangeEventPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/rate/rate.module#RatePageModule', name: 'rate', segment: 'rate/:eventId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-event/create-event.module#CreateEventPageModule', name: 'create-event', segment: 'create-event', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change-event/change-event.module#ChangeEventPageModule', name: 'ChangeEventPage', segment: 'change-event', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'reset-password', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'signup', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__["b" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_14_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_22_ngx_pipes__["a" /* NgPipesModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_rate_rate__["a" /* RatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_result_result__["a" /* ResultPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin__["a" /* AdminPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_event_create_event__["a" /* CreateEventPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_change_event_change_event__["a" /* ChangeEventPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: AppErrorHandler },
            __WEBPACK_IMPORTED_MODULE_11__providers_events_events__["a" /* EventsProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_rates_rates__["a" /* RatesProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common__["c" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_12__providers_subjects_subjects__["a" /* SubjectsProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_slidebox_slideprovider__["a" /* SlideboxProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventsProvider = (function () {
    function EventsProvider() {
    }
    EventsProvider.prototype.createEvent = function (name, school, classNo, date, dateTo) {
        var newEvent = {
            "name": name,
            "date": date,
            "dateTo": dateTo,
            "hidden": false,
            "sortid": '-' + date
        };
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/events/' + classNo).push(newEvent);
    };
    EventsProvider.prototype.changeEvent = function (eventId, name, school, classNo, date, dateTo) {
        return new Promise(function (resolve) {
            var ref = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/events/' + classNo + '/' + eventId);
            ref.child("name").set(name);
            ref.child("date").set(date);
            ref.child("dateTo").set(dateTo);
            ref.child("sortid").set("-" + date);
            return resolve();
        });
    };
    EventsProvider.prototype.getEvents = function (school, classNo) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/events/' + classNo).orderByChild('sortid');
    };
    EventsProvider.prototype.hideEvent = function (school, classNo, eventId) {
        var ref = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/events/' + classNo + '/' + eventId + '/hidden');
        ref.set(true);
    };
    EventsProvider.prototype.unhideEvent = function (school, classNo, eventId) {
        var ref = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/schools/' + school + '/events/' + classNo + '/' + eventId + '/hidden');
        ref.set(false);
    };
    return EventsProvider;
}());
EventsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EventsProvider);

//# sourceMappingURL=events.js.map

/***/ })

},[657]);
//# sourceMappingURL=main.js.map