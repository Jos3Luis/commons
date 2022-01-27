/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Logger } from 'everiscore';
/** @type {?} */
export const LoggerConfig = new InjectionToken('loggerBase');
export class EvLogger extends Logger {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        super(_config);
    }
}
EvLogger.decorators = [
    { type: Injectable }
];
EvLogger.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LoggerConfig,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXYtbG9nZ2VyLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zL2xvZ2dlci8iLCJzb3VyY2VzIjpbImxpYi9ldi1sb2dnZXIuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFlLE1BQU0sY0FBYyxDQUFDOztBQUVuRCxNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFjLFlBQVksQ0FBQztBQUd6RSxNQUFNLGVBQWdCLFNBQVEsTUFBTTs7OztJQUNsQyxZQUFrQyxPQUFvQjtRQUNwRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7O1lBSkYsVUFBVTs7OzRDQUVJLE1BQU0sU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyLCBJTG9nZ2VyQmFzZSB9IGZyb20gJ0BldmVyaXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBMb2dnZXJDb25maWcgPSBuZXcgSW5qZWN0aW9uVG9rZW48SUxvZ2dlckJhc2U+KCdsb2dnZXJCYXNlJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdkxvZ2dlciBleHRlbmRzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTG9nZ2VyQ29uZmlnKSBfY29uZmlnOiBJTG9nZ2VyQmFzZSkge1xuICAgIHN1cGVyKF9jb25maWcpO1xuICB9XG59XG4iXX0=