/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreAuthorizerFactory } from 'everiscore';
import { Authorization } from './auth.services';
import { AuthRules, AuthServices } from './auth.token';
import { RulesDTO } from './auth-rules.dto';
import { TokenInterceptor } from './interceptors/TokenInterceptor.services';
export { AuthServices, AuthRules } from './auth.token';
export { Authorization } from './auth.services';
/**
 * @param {?} authRules
 * @param {?} authServices
 * @return {?}
 */
export function factoryFnAuth(authRules, authServices) {
    // TODO: Corregir declaración any
    /** @type {?} */
    var rules = new RulesDTO(authRules).prepare();
    /** @type {?} */
    var autorizer = CoreAuthorizerFactory((/** @type {?} */ (authRules.auth)));
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
    };
    EvAuth.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                },] }
    ];
    return EvAuth;
}());
export { EvAuth };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZXZlcmlzL2NvbW1vbnMvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDdkYsT0FBTyxFQUE0QixxQkFBcUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBU2hELE1BQU0sd0JBQXdCLFNBQXFCLEVBQUUsWUFBMEI7OztRQUV2RSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFOztRQUN6QyxTQUFTLEdBQUcscUJBQXFCLENBQUMsbUJBQUEsU0FBUyxDQUFDLElBQUksRUFBTyxDQUFDO0lBQzlELE9BQU8sSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRUQ7SUFBQTtJQTBCQSxDQUFDOzs7OztJQXRCUSxjQUFPOzs7O0lBQWQsVUFBZSxLQUFpQjtRQUU5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxZQUFZO2lCQUN0QztnQkFDRCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDdkU7b0JBQ0UsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLGFBQWE7b0JBQ3pCLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7aUJBQ2hDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7O0lBd0JELGFBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXZCWSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSUF1dGhSZXF1ZXN0LCBJQXV0aHJ1bGVzLCBDb3JlQXV0aG9yaXplckZhY3RvcnkgfSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuaW1wb3J0IHsgQXV0aG9yaXphdGlvbiB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlcyc7XG5pbXBvcnQgeyBBdXRoUnVsZXMsIEF1dGhTZXJ2aWNlcyB9IGZyb20gJy4vYXV0aC50b2tlbic7XG5pbXBvcnQgeyBSdWxlc0RUTyB9IGZyb20gJy4vYXV0aC1ydWxlcy5kdG8nO1xuaW1wb3J0IHsgVG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3Iuc2VydmljZXMnO1xuXG5leHBvcnQgeyBBdXRoU2VydmljZXMsIEF1dGhSdWxlcyB9IGZyb20gJy4vYXV0aC50b2tlbic7XG5leHBvcnQgeyBBdXRob3JpemF0aW9uIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2VzJztcblxuZXhwb3J0IHtcbiAgSUF1dGhSZXF1ZXN0LFxuICBJQXV0aFJlc3BvbnNlLFxuICBJQXV0aHJ1bGVzLFxuICBJQXV0aElkZW50aXR5LFxufSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeUZuQXV0aChhdXRoUnVsZXM6IElBdXRocnVsZXMsIGF1dGhTZXJ2aWNlczogSUF1dGhSZXF1ZXN0KSB7XG4gIC8vIFRPRE86IENvcnJlZ2lyIGRlY2xhcmFjacOzbiBhbnlcbiAgY29uc3QgcnVsZXMgPSBuZXcgUnVsZXNEVE8oYXV0aFJ1bGVzKS5wcmVwYXJlKCk7XG4gIGNvbnN0IGF1dG9yaXplciA9IENvcmVBdXRob3JpemVyRmFjdG9yeShhdXRoUnVsZXMuYXV0aCBhcyBhbnkpO1xuICByZXR1cm4gbmV3IEF1dGhvcml6YXRpb24ocnVsZXMsIGF1dG9yaXplciwgYXV0aFNlcnZpY2VzKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBFdkF1dGgge1xuICBzdGF0aWMgZm9yUm9vdChydWxlczogSUF1dGhydWxlcyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFdkF1dGgsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEF1dGhTZXJ2aWNlcyxcbiAgICAgICAgICB1c2VDbGFzczogcnVsZXMubW9kZWwgfHwgQXV0aFNlcnZpY2VzLFxuICAgICAgICB9LFxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogVG9rZW5JbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEF1dGhSdWxlcyxcbiAgICAgICAgICB1c2VWYWx1ZTogcnVsZXMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBdXRob3JpemF0aW9uLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGZhY3RvcnlGbkF1dGgsXG4gICAgICAgICAgZGVwczogW0F1dGhSdWxlcywgQXV0aFNlcnZpY2VzXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19