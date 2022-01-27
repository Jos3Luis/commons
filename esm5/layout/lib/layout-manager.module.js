/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigLayout } from './layout.interface';
import { storage } from 'everiscore';
import { EveLayoutComponent } from './layout.componet';
import { EvAdLAyoutDirective } from './layout.directive';
import { LayoutController } from './layout-controller';
import { SingOut } from './sing-out.provider';
export { LayoutController } from './layout-controller';
export { CompanyLayout } from './models/company-layout.model';
export { MenuLayout } from './models/menu-layout.model';
export { Layout } from './models/layout.model';
/**
 * @return {?}
 */
export function _sessionStorage() {
    return storage('session');
}
/**
 * @param {?} config
 * @return {?}
 */
export function _buildLayoutCtrl(config) {
    return new LayoutController(config, _sessionStorage());
}
/**
 * @param {?} config
 * @return {?}
 */
export function _buildProviderSingOut(config) {
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
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: config.layouts,
                }
            ]
        };
    };
    EveLayouManager.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return EveLayouManager;
}());
export { EveLayouManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQtbWFuYWdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1Qiw0QkFBNEIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFpQixZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQVksT0FBTyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUcvQyxNQUFNO0lBQ0osT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUIsQ0FBQzs7Ozs7QUFFRCxNQUFNLDJCQUEyQixNQUFxQjtJQUNsRCxPQUFPLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQzs7Ozs7QUFFRCxNQUFNLGdDQUFnQyxNQUFxQjtJQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pGLE9BQU8sTUFBTSxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzNGLENBQUM7O0lBRUssVUFBVSxHQUFHO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDcEI7QUFFRDtJQUFBO0lBMkJBLENBQUM7Ozs7O0lBckJRLHVCQUFPOzs7O0lBQWQsVUFBZ0IsTUFBcUI7UUFDbkMsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsTUFBTTtpQkFDakI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsYUFBYSxJQUFJLE9BQU87aUJBQzFDO2dCQUNELEVBQUUsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsVUFBVSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFDO2dCQUNyRDtvQkFDRSxLQUFLLEVBQUUsSUFBSTtvQkFDWCxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBMUJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksbUJBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLG1CQUFNLFVBQVUsQ0FBQztpQkFDekI7O0lBdUJELHNCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F0QlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSUxheW91dENvbmZpZywgQ29uZmlnTGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTdG9yYWdlLCBzdG9yYWdlIH0gZnJvbSAnQGV2ZXJpcy9jb3JlJztcbmltcG9ydCB7IEV2ZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmV0JztcbmltcG9ydCB7IEV2QWRMQXlvdXREaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGF5b3V0Q29udHJvbGxlciB9IGZyb20gJy4vbGF5b3V0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgcHJvdmlkZXJEZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy92aWV3JztcbmltcG9ydCB7IFNpbmdPdXQgfSBmcm9tICcuL3Npbmctb3V0LnByb3ZpZGVyJztcblxuZXhwb3J0IHsgTGF5b3V0Q29udHJvbGxlciB9IGZyb20gJy4vbGF5b3V0LWNvbnRyb2xsZXInO1xuZXhwb3J0IHsgQ29tcGFueUxheW91dCB9IGZyb20gJy4vbW9kZWxzL2NvbXBhbnktbGF5b3V0Lm1vZGVsJztcbmV4cG9ydCB7IE1lbnVMYXlvdXQgfSBmcm9tICcuL21vZGVscy9tZW51LWxheW91dC5tb2RlbCc7XG5leHBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL21vZGVscy9sYXlvdXQubW9kZWwnO1xuZXhwb3J0IHsgSUxheW91dENvbmZpZywgSUNvbXBhbnlMYXlvdXQsIElNZW51TGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQuaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIF9zZXNzaW9uU3RvcmFnZSgpOiBJU3RvcmFnZTxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4gc3RvcmFnZSgnc2Vzc2lvbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2J1aWxkTGF5b3V0Q3RybChjb25maWc6IElMYXlvdXRDb25maWcpIHtcbiAgICByZXR1cm4gbmV3IExheW91dENvbnRyb2xsZXIoY29uZmlnLCBfc2Vzc2lvblN0b3JhZ2UoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRQcm92aWRlclNpbmdPdXQoY29uZmlnOiBJTGF5b3V0Q29uZmlnKSB7XG4gIGNvbnNvbGUubG9nKGNvbmZpZy5zaW5nT3V0QWN0aW9uICYmIGNvbmZpZy5zaW5nT3V0QWN0aW9uICE9PSBudWxsLCBjb25maWcuc2luZ091dEFjdGlvbik7XG4gIHJldHVybiBjb25maWcuc2luZ091dEFjdGlvbiAmJiBjb25maWcuc2luZ091dEFjdGlvbiAhPT0gbnVsbCA/IGNvbmZpZy5zaW5nT3V0QWN0aW9uIDoge307XG59XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEV2ZUxheW91dENvbXBvbmVudCxcbiAgRXZBZExBeW91dERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBFdmVMYXlvdU1hbmFnZXIge1xuICBzdGF0aWMgZm9yUm9vdCAoY29uZmlnOiBJTGF5b3V0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFdmVMYXlvdU1hbmFnZXIsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBDb25maWdMYXlvdXQsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU2luZ091dCxcbiAgICAgICAgICB1c2VDbGFzczogY29uZmlnLnNpbmdPdXRBY3Rpb24gfHwgU2luZ091dCxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBMYXlvdXRDb250cm9sbGVyLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9idWlsZExheW91dEN0cmwsIGRlcHM6IFtDb25maWdMYXlvdXRdfSxcbiAgICAgICAge1xuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHByb3ZpZGU6IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZy5sYXlvdXRzLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19