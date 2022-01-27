import { __extends } from 'tslib';
import { CommonModule } from '@angular/common';
import { Injectable, InjectionToken, Inject, NgModule } from '@angular/core';
import { Logger, LoggerLevels } from 'everiscore';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LoggerConfig = new InjectionToken('loggerBase');
var EvLogger = /** @class */ (function (_super) {
    __extends(EvLogger, _super);
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
    var configDefuault = {
        level: LoggerLevels.OFF,
        serverLogLevel: LoggerLevels.OFF,
        serverLogginParams: undefined
    };
    return !value || value === null ? configDefuault : value;
}
var EvLoggerModule = /** @class */ (function () {
    function EvLoggerModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    EvLoggerModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: EvLoggerModule,
            providers: [
                { provide: LoggerConfig, useValue: _buildLoggerCtrl, deps: [config] },
                EvLogger,
            ],
        };
    };
    /**
     * @return {?}
     */
    EvLoggerModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: EvLoggerModule,
            providers: [EvLogger],
        };
    };
    EvLoggerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                },] }
    ];
    return EvLoggerModule;
}());

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