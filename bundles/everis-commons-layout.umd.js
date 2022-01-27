(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('everiscore'), require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('everiscommons/layout', ['exports', '@angular/common', 'everiscore', 'rxjs', '@angular/core'], factory) :
    (factory((global.everis = global.everis || {}, global.everis.commons = global.everis.commons || {}, global.everis.commons.layout = {}),global.ng.common,global['everiscore'],global.rxjs,global.ng.core));
}(this, (function (exports,common,core,rxjs,core$1) { 'use strict';

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ConfigLayout = new core$1.InjectionToken('container');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayoutEncrypt = /** @class */ (function () {
        function LayoutEncrypt() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        LayoutEncrypt.encryptStorage = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return btoa(value).split('').reverse().join('');
            };
        /**
         * @param {?} value
         * @return {?}
         */
        LayoutEncrypt.unencryptStorage = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return atob(value.split('').reverse().join(''));
            };
        return LayoutEncrypt;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Layout = /** @class */ (function () {
        function Layout(layouts, sessionStorage) {
            this.layouts = layouts;
            this.sessionStorage = sessionStorage;
            this.state = new rxjs.Subject();
            this.$state = this.state.asObservable();
        }
        /**
         * @return {?}
         */
        Layout.prototype.getActive = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var persistLayout = this.sessionStorage.get('layout') || null;
                /** @type {?} */
                var ly;
                if (persistLayout === null) {
                    ly = this.layouts.filter(( /**
                     * @param {?} layout
                     * @return {?}
                     */function (layout) { return layout.default === true; }));
                }
                else {
                    ly = this.layouts.filter(( /**
                     * @param {?} layout
                     * @return {?}
                     */function (layout) {
                        return layout.name.toString().toLowerCase() === LayoutEncrypt.unencryptStorage(persistLayout).toString().toLowerCase();
                    }));
                }
                return ly.length > 0 ? ly[0] : false;
            };
        /**
         * @return {?}
         */
        Layout.prototype.getItems = /**
         * @return {?}
         */
            function () {
                return this.layouts;
            };
        /**
         * @return {?}
         */
        Layout.prototype.watch = /**
         * @return {?}
         */
            function () {
                return this.$state;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        Layout.prototype.changeLayout = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var ly = this.layouts.filter(( /**
                 * @param {?} layout
                 * @return {?}
                 */function (layout) { return layout.name.toLowerCase() === name.toLowerCase(); }));
                if (ly.length > 0) {
                    this.sessionStorage.set('layout', LayoutEncrypt.encryptStorage(ly[0].name));
                    this.state.next(ly[0]);
                }
                else {
                    throw (new Error("El layout " + name + ", no existe"));
                }
            };
        return Layout;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CompanyLayout = /** @class */ (function () {
        function CompanyLayout(header) {
            this.header = header;
            this.name = this.header.name || null;
            this.logo = this.header.logo || null;
        }
        return CompanyLayout;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuLayout = /** @class */ (function () {
        function MenuLayout(menu, sessionStorage) {
            this.menu = menu;
            this.sessionStorage = sessionStorage;
        }
        /**
         * @param {?} items
         * @return {?}
         */
        MenuLayout.prototype.addItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                this.menu = __spread(this.menu, items);
                this.sessionStorage.set('menu', this.menu);
            };
        Object.defineProperty(MenuLayout.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var persistMenu = this.sessionStorage.get('menu') || null;
                if (persistMenu) {
                    this.menu = this.sessionStorage.get('menu') || '';
                }
                return this.menu;
            },
            enumerable: true,
            configurable: true
        });
        return MenuLayout;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayoutController = /** @class */ (function () {
        function LayoutController(config, sessionStorage) {
            this.config = config;
            this.sessionStorage = sessionStorage;
            this._company = new CompanyLayout(this.config.company || {});
            this._menu = new MenuLayout((this.config.menu || []), this.sessionStorage);
            this._layout = new Layout(this.config.layouts, this.sessionStorage);
        }
        Object.defineProperty(LayoutController.prototype, "company", {
            get: /**
             * @return {?}
             */ function () {
                return this._company;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutController.prototype, "menu", {
            get: /**
             * @return {?}
             */ function () {
                return this._menu;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutController.prototype, "layout", {
            get: /**
             * @return {?}
             */ function () {
                return this._layout;
            },
            enumerable: true,
            configurable: true
        });
        LayoutController.decorators = [
            { type: core$1.Injectable }
        ];
        LayoutController.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core$1.Inject, args: [ConfigLayout,] }] },
                { type: core.CoreBrowserStorage }
            ];
        };
        return LayoutController;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EvAdLAyoutDirective = /** @class */ (function () {
        function EvAdLAyoutDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        EvAdLAyoutDirective.decorators = [
            { type: core$1.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[eve-layout-ad-host]',
                    },] }
        ];
        EvAdLAyoutDirective.ctorParameters = function () {
            return [
                { type: core$1.ViewContainerRef }
            ];
        };
        return EvAdLAyoutDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EveLayoutComponent = /** @class */ (function () {
        function EveLayoutComponent(componentFactoryResolver, cdr, lyCtrl) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.cdr = cdr;
            this.lyCtrl = lyCtrl;
        }
        /**
         * @return {?}
         */
        EveLayoutComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.loadComponent();
                this.cdr.detectChanges();
            };
        /**
         * @return {?}
         */
        EveLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.lyCtrl.layout.watch().subscribe(( /**
                 * @return {?}
                 */function () { _this.loadComponent(); }));
            };
        /**
         * @return {?}
         */
        EveLayoutComponent.prototype.loadComponent = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var layout = this.lyCtrl.layout.getActive();
                if (layout !== false) {
                    /** @type {?} */
                    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(layout.component);
                    /** @type {?} */
                    var viewContainerRef = this.adHost.viewContainerRef;
                    viewContainerRef.clear();
                    viewContainerRef.createComponent(componentFactory);
                }
                else {
                    throw (new Error('No se encontro layouts para cargar por defecto, \n revise la configuracion en su modulo principal'));
                }
            };
        EveLayoutComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'eve-layout',
                        template: "\n    <ng-template eve-layout-ad-host></ng-template>\n  "
                    }] }
        ];
        EveLayoutComponent.ctorParameters = function () {
            return [
                { type: core$1.ComponentFactoryResolver },
                { type: core$1.ChangeDetectorRef },
                { type: LayoutController }
            ];
        };
        EveLayoutComponent.propDecorators = {
            adHost: [{ type: core$1.ViewChild, args: [EvAdLAyoutDirective,] }]
        };
        return EveLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SingOut = /** @class */ (function () {
        function SingOut() {
        }
        /**
         * @return {?}
         */
        SingOut.prototype.singOut = /**
         * @return {?}
         */
            function () {
                throw (new Error('Debe proveer un objeto SingOut en la configuracion de Layout'));
            };
        SingOut.decorators = [
            { type: core$1.Injectable }
        ];
        return SingOut;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function _sessionStorage() {
        return core.storage('session');
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function _buildLayoutCtrl(config) {
        return new LayoutController(config, _sessionStorage());
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function _buildProviderSingOut(config) {
        console.log(config.singOutAction && config.singOutAction !== null, config.singOutAction);
        return config.singOutAction && config.singOutAction !== null ? config.singOutAction : {};
    }
    /** @type {?} */
    var COMPONENTS = [
        EveLayoutComponent,
        EvAdLAyoutDirective,
    ];
    var EveLayouManager = /** @class */ (function () {
        function EveLayouManager() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        EveLayouManager.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: EveLayouManager,
                    providers: [
                        { provide: ConfigLayout,
                            useValue: config
                        },
                        {
                            provide: SingOut,
                            useClass: config.singOutAction || SingOut,
                        },
                        { provide: LayoutController,
                            useFactory: _buildLayoutCtrl, deps: [ConfigLayout] },
                        {
                            multi: true,
                            provide: core$1.ANALYZE_FOR_ENTRY_COMPONENTS,
                            useValue: config.layouts,
                        }
                    ]
                };
            };
        EveLayouManager.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return EveLayouManager;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports._sessionStorage = _sessionStorage;
    exports._buildLayoutCtrl = _buildLayoutCtrl;
    exports._buildProviderSingOut = _buildProviderSingOut;
    exports.LayoutController = LayoutController;
    exports.CompanyLayout = CompanyLayout;
    exports.MenuLayout = MenuLayout;
    exports.Layout = Layout;
    exports.EveLayouManager = EveLayouManager;
    exports.EveLayoutComponent = EveLayoutComponent;
    exports.SingOut = SingOut;
    exports.ɵc = EvAdLAyoutDirective;
    exports.ɵb = ConfigLayout;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=everis-commons-layout.umd.js.map