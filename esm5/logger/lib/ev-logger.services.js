/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Logger } from 'everiscore';
/** @type {?} */
export var LoggerConfig = new InjectionToken('loggerBase');
var EvLogger = /** @class */ (function (_super) {
    tslib_1.__extends(EvLogger, _super);
    function EvLogger(_config) {
        return _super.call(this, _config) || this;
    }
    EvLogger.decorators = [
        { type: Injectable }
    ];
    EvLogger.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LoggerConfig,] }] }
    ]; };
    return EvLogger;
}(Logger));
export { EvLogger };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXYtbG9nZ2VyLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zL2xvZ2dlci8iLCJzb3VyY2VzIjpbImxpYi9ldi1sb2dnZXIuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLGNBQWMsQ0FBQzs7QUFFbkQsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBYyxZQUFZLENBQUM7QUFFekU7SUFDOEIsb0NBQU07SUFDbEMsa0JBQWtDLE9BQW9CO2VBQ3BELGtCQUFNLE9BQU8sQ0FBQztJQUNoQixDQUFDOztnQkFKRixVQUFVOzs7Z0RBRUksTUFBTSxTQUFDLFlBQVk7O0lBR2xDLGVBQUM7Q0FBQSxBQUxELENBQzhCLE1BQU0sR0FJbkM7U0FKWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyLCBJTG9nZ2VyQmFzZSB9IGZyb20gJ0BldmVyaXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBMb2dnZXJDb25maWcgPSBuZXcgSW5qZWN0aW9uVG9rZW48SUxvZ2dlckJhc2U+KCdsb2dnZXJCYXNlJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdkxvZ2dlciBleHRlbmRzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTG9nZ2VyQ29uZmlnKSBfY29uZmlnOiBJTG9nZ2VyQmFzZSkge1xuICAgIHN1cGVyKF9jb25maWcpO1xuICB9XG59XG4iXX0=