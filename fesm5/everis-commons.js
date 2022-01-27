import { __extends } from 'tslib';
import { CoreBrowserStorage, CoreMemoryStorage, storage } from 'everiscore';
import { CommonModule } from '@angular/common';
import { Injectable, NgModule, Pipe } from '@angular/core';

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
        { type: Injectable }
    ];
    return EvLocalStorage;
}(CoreBrowserStorage));

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
        { type: Injectable }
    ];
    return EvSessionStorage;
}(CoreBrowserStorage));

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
        { type: Injectable }
    ];
    return EvMemoryStorage;
}(CoreMemoryStorage));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function _localStorage() {
    return storage('local');
}
/**
 * @return {?}
 */
function _sessionStorage() {
    return storage('session');
}
/**
 * @return {?}
 */
function _memoryStorage() {
    return storage('memory');
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
        { type: NgModule }
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
        { type: Pipe, args: [{ name: 'digit-score' },] }
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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

export { ServicesModule, EvLocalStorage, EvMemoryStorage, EvSessionStorage, EvCommonsModule, DigitScorePipe, PipesModule, _localStorage as ɵa, _memoryStorage as ɵc, _sessionStorage as ɵb };

//# sourceMappingURL=everis-commons.js.map