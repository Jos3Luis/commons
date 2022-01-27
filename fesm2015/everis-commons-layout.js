import { CommonModule } from '@angular/common';
import { CoreBrowserStorage, storage } from 'everiscore';
import { Subject } from 'rxjs';
import { InjectionToken, Injectable, Inject, Directive, ViewContainerRef, Component, ComponentFactoryResolver, ChangeDetectorRef, ViewChild, NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ConfigLayout = new InjectionToken('container');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutEncrypt {
    /**
     * @param {?} value
     * @return {?}
     */
    static encryptStorage(value) {
        return btoa(value).split('').reverse().join('');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static unencryptStorage(value) {
        return atob(value.split('').reverse().join(''));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Layout {
    /**
     * @param {?} layouts
     * @param {?} sessionStorage
     */
    constructor(layouts, sessionStorage) {
        this.layouts = layouts;
        this.sessionStorage = sessionStorage;
        this.state = new Subject();
        this.$state = this.state.asObservable();
    }
    /**
     * @return {?}
     */
    getActive() {
        /** @type {?} */
        const persistLayout = this.sessionStorage.get('layout') || null;
        /** @type {?} */
        let ly;
        if (persistLayout === null) {
            ly = this.layouts.filter((/**
             * @param {?} layout
             * @return {?}
             */
            layout => layout.default === true));
        }
        else {
            ly = this.layouts.filter((/**
             * @param {?} layout
             * @return {?}
             */
            (layout) => {
                return layout.name.toString().toLowerCase() === LayoutEncrypt.unencryptStorage(persistLayout).toString().toLowerCase();
            }));
        }
        return ly.length > 0 ? ly[0] : false;
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.layouts;
    }
    /**
     * @return {?}
     */
    watch() {
        return this.$state;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    changeLayout(name) {
        /** @type {?} */
        const ly = this.layouts.filter((/**
         * @param {?} layout
         * @return {?}
         */
        layout => layout.name.toLowerCase() === name.toLowerCase()));
        if (ly.length > 0) {
            this.sessionStorage.set('layout', LayoutEncrypt.encryptStorage(ly[0].name));
            this.state.next(ly[0]);
        }
        else {
            throw (new Error(`El layout ${name}, no existe`));
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CompanyLayout {
    /**
     * @param {?} header
     */
    constructor(header) {
        this.header = header;
        this.name = this.header.name || null;
        this.logo = this.header.logo || null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuLayout {
    /**
     * @param {?} menu
     * @param {?} sessionStorage
     */
    constructor(menu, sessionStorage) {
        this.menu = menu;
        this.sessionStorage = sessionStorage;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    addItems(items) {
        this.menu = [...this.menu, ...items];
        this.sessionStorage.set('menu', this.menu);
    }
    /**
     * @return {?}
     */
    get items() {
        /** @type {?} */
        const persistMenu = this.sessionStorage.get('menu') || null;
        if (persistMenu) {
            this.menu = this.sessionStorage.get('menu') || '';
        }
        return this.menu;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutController {
    /**
     * @param {?} config
     * @param {?} sessionStorage
     */
    constructor(config, sessionStorage) {
        this.config = config;
        this.sessionStorage = sessionStorage;
        this._company = new CompanyLayout(this.config.company || {});
        this._menu = new MenuLayout((this.config.menu || []), this.sessionStorage);
        this._layout = new Layout(this.config.layouts, this.sessionStorage);
    }
    /**
     * @return {?}
     */
    get company() {
        return this._company;
    }
    /**
     * @return {?}
     */
    get menu() {
        return this._menu;
    }
    /**
     * @return {?}
     */
    get layout() {
        return this._layout;
    }
}
LayoutController.decorators = [
    { type: Injectable }
];
LayoutController.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ConfigLayout,] }] },
    { type: CoreBrowserStorage }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EvAdLAyoutDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
EvAdLAyoutDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[eve-layout-ad-host]',
            },] }
];
EvAdLAyoutDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EveLayoutComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} cdr
     * @param {?} lyCtrl
     */
    constructor(componentFactoryResolver, cdr, lyCtrl) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdr = cdr;
        this.lyCtrl = lyCtrl;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.loadComponent();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.lyCtrl.layout.watch().subscribe((/**
         * @return {?}
         */
        () => { this.loadComponent(); }));
    }
    /**
     * @return {?}
     */
    loadComponent() {
        /** @type {?} */
        const layout = this.lyCtrl.layout.getActive();
        if (layout !== false) {
            /** @type {?} */
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(layout.component);
            /** @type {?} */
            const viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            viewContainerRef.createComponent(componentFactory);
        }
        else {
            throw (new Error('No se encontro layouts para cargar por defecto, \n revise la configuracion en su modulo principal'));
        }
    }
}
EveLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'eve-layout',
                template: `
    <ng-template eve-layout-ad-host></ng-template>
  `
            }] }
];
EveLayoutComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: LayoutController }
];
EveLayoutComponent.propDecorators = {
    adHost: [{ type: ViewChild, args: [EvAdLAyoutDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SingOut {
    /**
     * @return {?}
     */
    singOut() {
        throw (new Error('Debe proveer un objeto SingOut en la configuracion de Layout'));
    }
}
SingOut.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function _sessionStorage() {
    return storage('session');
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
const COMPONENTS = [
    EveLayoutComponent,
    EvAdLAyoutDirective,
];
class EveLayouManager {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: config.layouts,
                }
            ]
        };
    }
}
EveLayouManager.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
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

export { _sessionStorage, _buildLayoutCtrl, _buildProviderSingOut, LayoutController, CompanyLayout, MenuLayout, Layout, EveLayouManager, EveLayoutComponent, SingOut, EvAdLAyoutDirective as ɵc, ConfigLayout as ɵb };

//# sourceMappingURL=everis-commons-layout.js.map