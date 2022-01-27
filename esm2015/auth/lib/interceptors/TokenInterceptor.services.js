/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Authorization } from '../auth.services';
export class TokenInterceptor {
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
if (false) {
    /** @type {?} */
    TokenInterceptor.prototype.auth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5JbnRlcmNlcHRvci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9hdXRoLyIsInNvdXJjZXMiOlsibGliL2ludGVyY2VwdG9ycy9Ub2tlbkludGVyY2VwdG9yLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRCxNQUFNOzs7O0lBQ0osWUFBbUIsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUFJLENBQUM7Ozs7OztJQUMzQyxTQUFTLENBQ1AsR0FBcUIsRUFDckIsSUFBaUI7O2NBRVgsVUFBVSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSTtRQUN6RCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7O2tCQUN2QyxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRTs7a0JBQzdCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0SCxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNkLFVBQVUsRUFBRSxPQUFPO2lCQUNwQixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQWxCRixVQUFVOzs7WUFGRixhQUFhOzs7O0lBSVIsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwSW50ZXJjZXB0b3IsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEF1dGhvcml6YXRpb24gfSBmcm9tICcuLi9hdXRoLnNlcnZpY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aDogQXV0aG9yaXphdGlvbikgeyB9XG4gIGludGVyY2VwdChcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXIsXG4gICkge1xuICAgIGNvbnN0IGF1dGhvcml6ZXI6IGFueSA9IHRoaXMuYXV0aC5nZXRBdXRob3JpemVyKCkgfHwgbnVsbDtcbiAgICBpZiAoYXV0aG9yaXplciAmJiB0aGlzLmF1dGgucnVsZXMuaW50ZXJjZXB0b3IpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXV0aG9yaXplci5nZXRUb2tlbigpO1xuICAgICAgY29uc3QgaGVhZGVycyA9IEpTT04ucGFyc2UoJ3tcIicgKyB0aGlzLmF1dGgucnVsZXMuaGVhZGVyTmFtZSArICdcIjpcIicgKyB0aGlzLmF1dGgucnVsZXMudHlwZVRva2VuICsgJyAnICsgdG9rZW4gKyAnXCJ9Jyk7XG4gICAgICBpZiAodG9rZW4gIT09ICcnKSB7XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgc2V0SGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=