/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CoreAuthorizerManager, } from 'everiscore';
var Authorization = /** @class */ (function (_super) {
    tslib_1.__extends(Authorization, _super);
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
}(CoreAuthorizerManager));
export { Authorization };
if (false) {
    /** @type {?} */
    Authorization.prototype.rules;
    /** @type {?} */
    Authorization.prototype.type;
    /** @type {?} */
    Authorization.prototype.authorizer;
    /** @type {?} */
    Authorization.prototype.authServices;
    /** @type {?} */
    Authorization.prototype.credentials;
    /**
     * @type {?}
     * @private
     */
    Authorization.prototype._rules;
    /**
     * @type {?}
     * @private
     */
    Authorization.prototype._authorizer;
    /**
     * @type {?}
     * @private
     */
    Authorization.prototype._authServices;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwscUJBQXFCLEdBS3RCLE1BQU0sY0FBYyxDQUFDO0FBRXRCO0lBQW1DLHlDQUFxQjtJQVl0RCx1QkFBb0IsTUFBa0IsRUFDNUIsV0FBd0IsRUFDeEIsYUFBMkI7UUFGckMsWUFHRSxpQkFBTyxTQU1SO1FBVG1CLFlBQU0sR0FBTixNQUFNLENBQVk7UUFDNUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWEsR0FBYixhQUFhLENBQWM7UUFFbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDdkMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQzs7SUFDbEQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFtQyxxQkFBcUIsR0FzQnZEOzs7O0lBcEJDLDhCQUFrQjs7SUFFbEIsNkJBQWE7O0lBRWIsbUNBQXdCOztJQUV4QixxQ0FBMkI7O0lBRTNCLG9DQUFpRDs7Ozs7SUFFckMsK0JBQTBCOzs7OztJQUNwQyxvQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElBdXRoUmVxdWVzdCxcbiAgQ29yZUF1dGhvcml6ZXJNYW5hZ2VyLFxuICBJQXV0aG9yaXplcixcbiAgSU9BdXRoQ3JlZGVudGlhbHMsXG4gIElKd3RDcmVkZW50aWFscyxcbiAgSUF1dGhydWxlcyxcbn0gZnJvbSAnQGV2ZXJpcy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb24gZXh0ZW5kcyBDb3JlQXV0aG9yaXplck1hbmFnZXIge1xuXG4gIHJ1bGVzOiBJQXV0aHJ1bGVzO1xuXG4gIHR5cGU6IHN0cmluZztcblxuICBhdXRob3JpemVyOiBJQXV0aG9yaXplcjtcblxuICBhdXRoU2VydmljZXM6IElBdXRoUmVxdWVzdDtcblxuICBjcmVkZW50aWFsczogSU9BdXRoQ3JlZGVudGlhbHMgfCBJSnd0Q3JlZGVudGlhbHM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcnVsZXM6IElBdXRocnVsZXMsXG4gICAgcHJpdmF0ZSBfYXV0aG9yaXplcjogSUF1dGhvcml6ZXIsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2VzOiBJQXV0aFJlcXVlc3QpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucnVsZXMgPSB0aGlzLl9ydWxlcztcbiAgICB0aGlzLmF1dGhvcml6ZXIgPSB0aGlzLl9hdXRob3JpemVyO1xuICAgIHRoaXMuYXV0aFNlcnZpY2VzID0gdGhpcy5fYXV0aFNlcnZpY2VzO1xuICAgIHRoaXMudHlwZSA9IHRoaXMucnVsZXMuYXV0aDtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gdGhpcy5ydWxlcy5jcmVkZW50aWFscyB8fCB7fTtcbiAgfVxufVxuIl19