(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('everiscore')) :
    typeof define === 'function' && define.amd ? define('everiscommons/logger', ['exports', '@angular/common', '@angular/core', 'everiscore'], factory) :
    (factory((global.everis = global.everis || {}, global.everis.commons = global.everis.commons || {}, global.everis.commons.logger = {}),global.ng.common,global.ng.core,global['everiscore']));
}(this, (function (exports,common,core,core$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LoggerConfig = new core.InjectionToken('loggerBase');
    var EvLogger = /** @class */ (function (_super) {
        __extends(EvLogger, _super);
        function EvLogger(_config) {
            return _super.call(this, _config) || this;
        }
        EvLogger.decorators = [
            { type: core.Injectable }
        ];
        EvLogger.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [LoggerConfig,] }] }
            ];
        };
        return EvLogger;
    }(core$1.Logger));

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
            level: core$1.LoggerLevels.OFF,
            serverLogLevel: core$1.LoggerLevels.OFF,
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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

    exports.EvLoggerModule = EvLoggerModule;
    exports.EvLogger = EvLogger;
    exports.ɵa = _buildLoggerCtrl;
    exports.ɵb = LoggerConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=everis-commons-logger.umd.js.map