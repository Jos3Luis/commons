import { IAuthRequest, CoreAuthorizerManager, IAuthorizer, IOAuthCredentials, IJwtCredentials, IAuthrules } from 'everiscore';
export declare class Authorization extends CoreAuthorizerManager {
    private _rules;
    private _authorizer;
    private _authServices;
    rules: IAuthrules;
    type: string;
    authorizer: IAuthorizer;
    authServices: IAuthRequest;
    credentials: IOAuthCredentials | IJwtCredentials;
    constructor(_rules: IAuthrules, _authorizer: IAuthorizer, _authServices: IAuthRequest);
}
