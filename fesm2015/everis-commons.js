import { CoreBrowserStorage, CoreMemoryStorage, storage } from 'everiscore';
import { CommonModule } from '@angular/common';
import { Injectable, NgModule, Pipe } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvLocalStorage extends CoreBrowserStorage {
}
EvLocalStorage.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvSessionStorage extends CoreBrowserStorage {
}
EvSessionStorage.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvMemoryStorage extends CoreMemoryStorage {
}
EvMemoryStorage.decorators = [
    { type: Injectable }
];

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
class ServicesModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
ServicesModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description Pipe para formatear numero con guiones
 * \@example <b>1234567890123</b> ------> <b>123-4567890-1-23</b>
 */
class DigitScorePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value) {
            /** @type {?} */
            let string = value.replace(/\D/g, '');
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
    }
}
DigitScorePipe.decorators = [
    { type: Pipe, args: [{ name: 'digit-score' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvCommonsModule {
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