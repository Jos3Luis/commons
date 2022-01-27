import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Authorization } from '../auth.services';
export declare class TokenInterceptor implements HttpInterceptor {
    auth: Authorization;
    constructor(auth: Authorization);
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs/internal/Observable").Observable<import("@angular/common/http/src/response").HttpEvent<any>>;
}
