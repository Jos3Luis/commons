import { InjectionToken } from '@angular/core';
import { IAuthRequest, IAuthrules, IAuthIdentity } from 'everiscore';
import { Observable } from 'rxjs/Observable';
export declare const AuthRules: InjectionToken<IAuthrules>;
export declare class AuthServices implements IAuthRequest {
    getToken(user: any, password: any): Observable<IAuthIdentity>;
    refreshToken(token: string, done: Function): void;
}
