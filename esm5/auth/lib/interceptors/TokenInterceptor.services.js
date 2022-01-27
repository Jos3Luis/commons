/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Authorization } from '../auth.services';
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
        { type: Injectable }
    ];
    TokenInterceptor.ctorParameters = function () { return [
        { type: Authorization }
    ]; };
    return TokenInterceptor;
}());
export { TokenInterceptor };
if (false) {
    /** @type {?} */
    TokenInterceptor.prototype.auth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5JbnRlcmNlcHRvci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9hdXRoLyIsInNvdXJjZXMiOlsibGliL2ludGVyY2VwdG9ycy9Ub2tlbkludGVyY2VwdG9yLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUVFLDBCQUFtQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlO0lBQUksQ0FBQzs7Ozs7O0lBQzNDLG9DQUFTOzs7OztJQUFULFVBQ0UsR0FBcUIsRUFDckIsSUFBaUI7O1lBRVgsVUFBVSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSTtRQUN6RCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7O2dCQUN2QyxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRTs7Z0JBQzdCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0SCxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNkLFVBQVUsRUFBRSxPQUFPO2lCQUNwQixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O2dCQWxCRixVQUFVOzs7Z0JBRkYsYUFBYTs7SUFxQnRCLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksZ0JBQWdCOzs7SUFDZixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBJbnRlcmNlcHRvcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXV0aG9yaXphdGlvbiB9IGZyb20gJy4uL2F1dGguc2VydmljZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoOiBBdXRob3JpemF0aW9uKSB7IH1cbiAgaW50ZXJjZXB0KFxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlcixcbiAgKSB7XG4gICAgY29uc3QgYXV0aG9yaXplcjogYW55ID0gdGhpcy5hdXRoLmdldEF1dGhvcml6ZXIoKSB8fCBudWxsO1xuICAgIGlmIChhdXRob3JpemVyICYmIHRoaXMuYXV0aC5ydWxlcy5pbnRlcmNlcHRvcikge1xuICAgICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemVyLmdldFRva2VuKCk7XG4gICAgICBjb25zdCBoZWFkZXJzID0gSlNPTi5wYXJzZSgne1wiJyArIHRoaXMuYXV0aC5ydWxlcy5oZWFkZXJOYW1lICsgJ1wiOlwiJyArIHRoaXMuYXV0aC5ydWxlcy50eXBlVG9rZW4gKyAnICcgKyB0b2tlbiArICdcIn0nKTtcbiAgICAgIGlmICh0b2tlbiAhPT0gJycpIHtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBzZXRIZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==