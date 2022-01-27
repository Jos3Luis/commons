(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('everiscore'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('everiscommons', ['exports', 'everiscore', '@angular/common', '@angular/core'], factory) :
    (factory((global.everis = global.everis || {}, global.everis.commons = {}),global['everiscore'],global.ng.common,global.ng.core));
}(this, (function (exports,core,common,core$1) { 'use strict';

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
    var EvLocalStorage = /** @class */ (function (_super) {
        __extends(EvLocalStorage, _super);
        function EvLocalStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EvLocalStorage.decorators = [
            { type: core$1.Injectable }
        ];
        return EvLocalStorage;
    }(core.CoreBrowserStorage));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EvSessionStorage = /** @class */ (function (_super) {
        __extends(EvSessionStorage, _super);
        function EvSessionStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EvSessionStorage.decorators = [
            { type: core$1.Injectable }
        ];
        return EvSessionStorage;
    }(core.CoreBrowserStorage));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EvMemoryStorage = /** @class */ (function (_super) {
        __extends(EvMemoryStorage, _super);
        function EvMemoryStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EvMemoryStorage.decorators = [
            { type: core$1.Injectable }
        ];
        return EvMemoryStorage;
    }(core.CoreMemoryStorage));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function _localStorage() {
        return core.storage('local');
    }
    /**
     * @return {?}
     */
    function _sessionStorage() {
        return core.storage('session');
    }
    /**
     * @return {?}
     */
    function _memoryStorage() {
        return core.storage('memory');
    }
    var ServicesModule = /** @class */ (function () {
        function ServicesModule() {
        }
        /**
         * @return {?}
         */
        ServicesModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ServicesModule,
                    providers: [
                        {
                            provide: EvLocalStorage,
                            useFactory: _localStorage,
                        },
                        {
                            provide: EvSessionStorage,
                            useFactory: _sessionStorage,
                        },
                        {
                            provide: EvMemoryStorage,
                            useFactory: _memoryStorage,
                        },
                    ],
                };
            };
        ServicesModule.decorators = [
            { type: core$1.NgModule }
        ];
        return ServicesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * \@description Pipe para formatear numero con guiones
     * \@example <b>1234567890123</b> ------> <b>123-4567890-1-23</b>
     */
    var DigitScorePipe = /** @class */ (function () {
        /**
         * @description Pipe para formatear numero con guiones
         * @example <b>1234567890123</b> ------> <b>123-4567890-1-23</b>
         */
        function DigitScorePipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        DigitScorePipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value) {
                    /** @type {?} */
                    var string = value.replace(/\D/g, '');
                    if (string.length === 0) {
                        string = '';
                    }
                    else if (string.length <= 3) {
                        string = string.replace(/^(\d{0,3})/, '$1');
                    }
                    else if (string.length <= 10) {
                        string = string.replace(/^(\d{0,3})(\d{0,7})/, '$1-$2');
                    }
                    else if (string.length <= 11) {
                        string = string.replace(/^(\d{0,3})(\d{0,7})(\d{0,1})/, '$1-$2-$3');
                    }
                    else {
                        string = string.replace(/^(\d{0,3})(\d{0,7})(\d{0,1})(\d{0,2})+/, '$1-$2-$3-$4');
                    }
                    return string;
                }
                return value;
            };
        DigitScorePipe.decorators = [
            { type: core$1.Pipe, args: [{ name: 'digit-score' },] }
        ];
        return DigitScorePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PipesModule = /** @class */ (function () {
        function PipesModule() {
        }
        PipesModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            DigitScorePipe,
                        ],
                    },] }
        ];
        return PipesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EvCommonsModule = /** @class */ (function () {
        function EvCommonsModule() {
        }
        EvCommonsModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            PipesModule,
                            ServicesModule.forRoot(),
                        ],
                        exports: [
                            PipesModule,
                            ServicesModule,
                        ],
                    },] }
        ];
        return EvCommonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ServicesModule = ServicesModule;
    exports.EvLocalStorage = EvLocalStorage;
    exports.EvMemoryStorage = EvMemoryStorage;
    exports.EvSessionStorage = EvSessionStorage;
    exports.EvCommonsModule = EvCommonsModule;
    exports.DigitScorePipe = DigitScorePipe;
    exports.PipesModule = PipesModule;
    exports.ɵa = _localStorage;
    exports.ɵc = _memoryStorage;
    exports.ɵb = _sessionStorage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=everis-commons.umd.js.map