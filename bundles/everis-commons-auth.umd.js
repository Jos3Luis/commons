(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('everiscore'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('everiscommons/auth', ['exports', '@angular/common/http', 'everiscore', '@angular/core'], factory) :
    (factory((global.everis = global.everis || {}, global.everis.commons = global.everis.commons || {}, global.everis.commons.auth = {}),global.ng.common.http,global['everiscore'],global.ng.core));
}(this, (function (exports,http,core,core$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Authorization = /** @class */ (function (_super) {
        __extends(Authorization, _super);
        function Authorization(_rules, _authorizer, _authServices) {
            var _this = _super.call(this) || this;
            _this._rules = _rules;
            _this._authorizer = _authorizer;
            _this._authServices = _authServices;
            _this.rules = _this._rules;
            _this.authorizer = _this._authorizer;
            _this.authServices = _this._authServices;
            _this.type = _this.rules.auth;
            _this.credentials = _this.rules.credentials || {};
            return _this;
        }
        return Authorization;
    }(core.CoreAuthorizerManager));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AuthRules = new core$1.InjectionToken('authRules');
    // export const AuthServices = new InjectionToken<IAuthRequest>('authServices');
    var AuthServices = /** @class */ (function () {
        // export const AuthServices = new InjectionToken<IAuthRequest>('authServices');
        function AuthServices() {
        }
        /**
         * @param {?} user
         * @param {?} password
         * @return {?}
         */
        AuthServices.prototype.getToken = /**
         * @param {?} user
         * @param {?} password
         * @return {?}
         */
            function (user, password) {
                throw new Error('Method not implemented.');
            };
        /**
         * @param {?} token
         * @param {?} done
         * @return {?}
         */
        AuthServices.prototype.refreshToken = /**
         * @param {?} token
         * @param {?} done
         * @return {?}
         */
            function (token, done) {
                throw new Error('Method not implemented.');
            };
        AuthServices.decorators = [
            { type: core$1.Injectable }
        ];
        return AuthServices;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RulesDTO = /** @class */ (function () {
        function RulesDTO(rules) {
            this.rules = rules;
            this.setIterceptor();
            this.setTypeToken();
            this.setHeaderName();
        }
        /**
         * @return {?}
         */
        RulesDTO.prototype.prepare = /**
         * @return {?}
         */
            function () {
                return this.rules;
            };
        /**
         * @private
         * @return {?}
         */
        RulesDTO.prototype.setIterceptor = /**
         * @private
         * @return {?}
         */
            function () {
                this.rules['interceptor'] = this.rules.hasOwnProperty('interceptor') ? this.rules.interceptor : true;
            };
        /**
         * @private
         * @return {?}
         */
        RulesDTO.prototype.setTypeToken = /**
         * @private
         * @return {?}
         */
            function () {
                this.rules['typeToken'] = this.rules.hasOwnProperty('typeToken') ? this.rules.typeToken : 'Bearer';
            };
        /**
         * @private
         * @return {?}
         */
        RulesDTO.prototype.setHeaderName = /**
         * @private
         * @return {?}
         */
            function () {
                this.rules['headerName'] = this.rules.hasOwnProperty('headerName') ? this.rules.headerName : 'Authorization';
            };
        return RulesDTO;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TokenInterceptor = /** @class */ (function () {
        function TokenInterceptor(auth) {
            this.auth = auth;
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        TokenInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                /** @type {?} */
                var authorizer = this.auth.getAuthorizer() || null;
                if (authorizer && this.auth.rules.interceptor) {
                    /** @type {?} */
                    var token = authorizer.getToken();
                    /** @type {?} */
                    var headers = JSON.parse('{"' + this.auth.rules.headerName + '":"' + this.auth.rules.typeToken + ' ' + token + '"}');
                    if (token !== '') {
                        req = req.clone({
                            setHeaders: headers,
                        });
                    }
                }
                return next.handle(req);
            };
        TokenInterceptor.decorators = [
            { type: core$1.Injectable }
        ];
        TokenInterceptor.ctorParameters = function () {
            return [
                { type: Authorization }
            ];
        };
        return TokenInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} authRules
     * @param {?} authServices
     * @return {?}
     */
    function factoryFnAuth(authRules, authServices) {
        // TODO: Corregir declaración any
        /** @type {?} */
        var rules = new RulesDTO(authRules).prepare();
        /** @type {?} */
        var autorizer = core.CoreAuthorizerFactory(( /** @type {?} */(authRules.auth)));
        return new Authorization(rules, autorizer, authServices);
    }
    var EvAuth = /** @class */ (function () {
        function EvAuth() {
        }
        /**
         * @param {?} rules
         * @return {?}
         */
        EvAuth.forRoot = /**
         * @param {?} rules
         * @return {?}
         */
            function (rules) {
                return {
                    ngModule: EvAuth,
                    providers: [
                        {
                            provide: AuthServices,
                            useClass: rules.model || AuthServices,
                        },
                        { provide: http.HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
                        {
                            provide: AuthRules,
                            useValue: rules,
                        },
                        {
                            provide: Authorization,
                            useFactory: factoryFnAuth,
                            deps: [AuthRules, AuthServices],
                        },
                    ],
                };
            };
        EvAuth.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [http.HttpClientModule],
                    },] }
        ];
        return EvAuth;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.factoryFnAuth = factoryFnAuth;
    exports.AuthServices = AuthServices;
    exports.AuthRules = AuthRules;
    exports.Authorization = Authorization;
    exports.EvAuth = EvAuth;
    exports.ɵa = TokenInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=everis-commons-auth.umd.js.map