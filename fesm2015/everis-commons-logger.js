import { CommonModule } from '@angular/common';
import { Injectable, InjectionToken, Inject, NgModule } from '@angular/core';
import { Logger, LoggerLevels } from 'everiscore';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LoggerConfig = new InjectionToken('loggerBase');
class EvLogger extends Logger {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function _buildLoggerCtrl(value) {
    /** @type {?} */
    const configDefuault = {
        level: LoggerLevels.OFF,
        serverLogLevel: LoggerLevels.OFF,
        serverLogginParams: undefined
    };
    return !value || value === null ? configDefuault : value;
}
class EvLoggerModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EvLoggerModule, EvLogger, _buildLoggerCtrl as ɵa, LoggerConfig as ɵb };

//# sourceMappingURL=everis-commons-logger.js.map