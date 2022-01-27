/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreAuthorizerManager, } from 'everiscore';
export class Authorization extends CoreAuthorizerManager {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxxQkFBcUIsR0FLdEIsTUFBTSxjQUFjLENBQUM7QUFFdEIsTUFBTSxvQkFBcUIsU0FBUSxxQkFBcUI7Ozs7OztJQVl0RCxZQUFvQixNQUFrQixFQUM1QixXQUF3QixFQUN4QixhQUEyQjtRQUNuQyxLQUFLLEVBQUUsQ0FBQztRQUhVLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7OztJQXBCQyw4QkFBa0I7O0lBRWxCLDZCQUFhOztJQUViLG1DQUF3Qjs7SUFFeEIscUNBQTJCOztJQUUzQixvQ0FBaUQ7Ozs7O0lBRXJDLCtCQUEwQjs7Ozs7SUFDcEMsb0NBQWdDOzs7OztJQUNoQyxzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJQXV0aFJlcXVlc3QsXG4gIENvcmVBdXRob3JpemVyTWFuYWdlcixcbiAgSUF1dGhvcml6ZXIsXG4gIElPQXV0aENyZWRlbnRpYWxzLFxuICBJSnd0Q3JlZGVudGlhbHMsXG4gIElBdXRocnVsZXMsXG59IGZyb20gJ0BldmVyaXMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uIGV4dGVuZHMgQ29yZUF1dGhvcml6ZXJNYW5hZ2VyIHtcblxuICBydWxlczogSUF1dGhydWxlcztcblxuICB0eXBlOiBzdHJpbmc7XG5cbiAgYXV0aG9yaXplcjogSUF1dGhvcml6ZXI7XG5cbiAgYXV0aFNlcnZpY2VzOiBJQXV0aFJlcXVlc3Q7XG5cbiAgY3JlZGVudGlhbHM6IElPQXV0aENyZWRlbnRpYWxzIHwgSUp3dENyZWRlbnRpYWxzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3J1bGVzOiBJQXV0aHJ1bGVzLFxuICAgIHByaXZhdGUgX2F1dGhvcml6ZXI6IElBdXRob3JpemVyLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlczogSUF1dGhSZXF1ZXN0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJ1bGVzID0gdGhpcy5fcnVsZXM7XG4gICAgdGhpcy5hdXRob3JpemVyID0gdGhpcy5fYXV0aG9yaXplcjtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlcyA9IHRoaXMuX2F1dGhTZXJ2aWNlcztcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnJ1bGVzLmF1dGg7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHRoaXMucnVsZXMuY3JlZGVudGlhbHMgfHwge307XG4gIH1cbn1cbiJdfQ==