import { ModuleWithProviders } from '@angular/core';
import { IAuthRequest, IAuthrules } from 'everiscore';
import { Authorization } from './auth.services';
export { AuthServices, AuthRules } from './auth.token';
export { Authorization } from './auth.services';
export { IAuthRequest, IAuthResponse, IAuthrules, IAuthIdentity, } from 'everiscore';
export declare function factoryFnAuth(authRules: IAuthrules, authServices: IAuthRequest): Authorization;
export declare class EvAuth {
    static forRoot(rules: IAuthrules): ModuleWithProviders;
}
