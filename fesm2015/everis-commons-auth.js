import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreAuthorizerManager, CoreAuthorizerFactory } from 'everiscore';
import { InjectionToken, Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Authorization extends CoreAuthorizerManager {
    /**
     * @param {?} _rules
     * @param {?} _authorizer
     * @param {?} _authServices
     */
    constructor(_rules, _authorizer, _authServices) {
        super();
        this._rules = _rules;
        this._authorizer = _authorizer;
        this._authServices = _authServices;
        this.rules = this._rules;
        this.authorizer = this._authorizer;
        this.authServices = this._authServices;
        this.type = this.rules.auth;
        this.credentials = this.rules.credentials || {};
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AuthRules = new InjectionToken('authRules');
// export const AuthServices = new InjectionToken<IAuthRequest>('authServices');
class AuthServices {
    /**
     * @param {?} user
     * @param {?} password
     * @return {?}
     */
    getToken(user, password) {
        throw new Error('Method not implemented.');
    }
    /**
     * @param {?} token
     * @param {?} done
     * @return {?}
     */
    refreshToken(token, done) {
        throw new Error('Method not implemented.');
    }
}
AuthServices.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RulesDTO {
    /**
     * @param {?} rules
     */
    constructor(rules) {
        this.rules = rules;
        this.setIterceptor();
        this.setTypeToken();
        this.setHeaderName();
    }
    /**
     * @return {?}
     */
    prepare() {
        return this.rules;
    }
    /**
     * @private
     * @return {?}
     */
    setIterceptor() {
        this.rules['interceptor'] = this.rules.hasOwnProperty('interceptor') ? this.rules.interceptor : true;
    }
    /**
     * @private
     * @return {?}
     */
    setTypeToken() {
        this.rules['typeToken'] = this.rules.hasOwnProperty('typeToken') ? this.rules.typeToken : 'Bearer';
    }
    /**
     * @private
     * @return {?}
     */
    setHeaderName() {
        this.rules['headerName'] = this.rules.hasOwnProperty('headerName') ? this.rules.headerName : 'Authorization';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TokenInterceptor {
    /**
     * @param {?} auth
     */
    constructor(auth) {
        this.auth = auth;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const authorizer = this.auth.getAuthorizer() || null;
        if (authorizer && this.auth.rules.interceptor) {
            /** @type {?} */
            const token = authorizer.getToken();
            /** @type {?} */
            const headers = JSON.parse('{"' + this.auth.rules.headerName + '":"' + this.auth.rules.typeToken + ' ' + token + '"}');
            if (token !== '') {
                req = req.clone({
                    setHeaders: headers,
                });
            }
        }
        return next.handle(req);
    }
}
TokenInterceptor.decorators = [
    { type: Injectable }
];
TokenInterceptor.ctorParameters = () => [
    { type: Authorization }
];

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
    const rules = new RulesDTO(authRules).prepare();
    /** @type {?} */
    const autorizer = CoreAuthorizerFactory((/** @type {?} */ (authRules.auth)));
    return new Authorization(rules, autorizer, authServices);
}
class EvAuth {
    /**
     * @param {?} rules
     * @return {?}
     */
    static forRoot(rules) {
        return {
            ngModule: EvAuth,
            providers: [
                {
                    provide: AuthServices,
                    useClass: rules.model || AuthServices,
                },
                { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
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
    }
}
EvAuth.decorators = [
    { type: NgModule, args: [{
                imports: [HttpClientModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { factoryFnAuth, AuthServices, AuthRules, Authorization, EvAuth, TokenInterceptor as ɵa };

//# sourceMappingURL=everis-commons-auth.js.map