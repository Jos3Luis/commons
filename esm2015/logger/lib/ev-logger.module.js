/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EvLogger, LoggerConfig } from './ev-logger.services';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoggerLevels } from 'everiscore';
/**
 * @param {?} value
 * @return {?}
 */
export function _buildLoggerCtrl(value) {
    /** @type {?} */
    const configDefuault = {
        level: LoggerLevels.OFF,
        serverLogLevel: LoggerLevels.OFF,
        serverLogginParams: undefined
    };
    return !value || value === null ? configDefuault : value;
}
export class EvLoggerModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: EvLoggerModule,
            providers: [
                { provide: LoggerConfig, useValue: _buildLoggerCtrl, deps: [config] },
                EvLogger,
            ],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: EvLoggerModule,
            providers: [EvLogger],
        };
    }
}
EvLoggerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXYtbG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9sb2dnZXIvIiwic291cmNlcyI6WyJsaWIvZXYtbG9nZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFlLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFFekQsTUFBTSwyQkFBMkIsS0FBa0I7O1VBQzNDLGNBQWMsR0FBRztRQUNyQixLQUFLLEVBQUUsWUFBWSxDQUFDLEdBQUc7UUFDdkIsY0FBYyxFQUFFLFlBQVksQ0FBQyxHQUFHO1FBQ2hDLGtCQUFrQixFQUFHLFNBQVM7S0FDL0I7SUFDRCxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzVELENBQUM7QUFRRCxNQUFNOzs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBc0M7UUFDbkQsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyRSxRQUFRO2FBQ1Q7U0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxRQUFRO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUN0QixDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZMb2dnZXIsIExvZ2dlckNvbmZpZyB9IGZyb20gJy4vZXYtbG9nZ2VyLnNlcnZpY2VzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUxvZ2dlckJhc2UsIExvZ2dlckxldmVscyB9IGZyb20gJ0BldmVyaXMvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRMb2dnZXJDdHJsKHZhbHVlOiBJTG9nZ2VyQmFzZSk6IElMb2dnZXJCYXNlIHtcbiAgY29uc3QgY29uZmlnRGVmdWF1bHQgPSB7XG4gICAgbGV2ZWw6IExvZ2dlckxldmVscy5PRkYsXG4gICAgc2VydmVyTG9nTGV2ZWw6IExvZ2dlckxldmVscy5PRkYsXG4gICAgc2VydmVyTG9nZ2luUGFyYW1zOiAgdW5kZWZpbmVkXG4gIH07XG4gIHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPT09IG51bGwgPyAgY29uZmlnRGVmdWF1bHQgOiB2YWx1ZTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBFdkxvZ2dlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSUxvZ2dlckJhc2UgfCBudWxsIHwgdW5kZWZpbmVkKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFdkxvZ2dlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IExvZ2dlckNvbmZpZywgdXNlVmFsdWU6IF9idWlsZExvZ2dlckN0cmwsIGRlcHM6IFtjb25maWddIH0sXG4gICAgICAgIEV2TG9nZ2VyLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRXZMb2dnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtFdkxvZ2dlcl0sXG4gICAgfTtcbiAgfVxufVxuIl19