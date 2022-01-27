/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const COMPONENTS = [
    EveLayoutComponent,
    EvAdLAyoutDirective,
];
export class EveLayouManager {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQtbWFuYWdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLDRCQUE0QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWlCLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBWSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRy9DLE1BQU07SUFDSixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixDQUFDOzs7OztBQUVELE1BQU0sMkJBQTJCLE1BQXFCO0lBQ2xELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUMzRCxDQUFDOzs7OztBQUVELE1BQU0sZ0NBQWdDLE1BQXFCO0lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekYsT0FBTyxNQUFNLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDM0YsQ0FBQzs7TUFFSyxVQUFVLEdBQUc7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUNwQjtBQU9ELE1BQU07Ozs7O0lBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBRSxNQUFxQjtRQUNuQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxhQUFhLElBQUksT0FBTztpQkFDMUM7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUM7Z0JBQ3JEO29CQUNFLEtBQUssRUFBRSxJQUFJO29CQUNYLE9BQU8sRUFBRSw0QkFBNEI7b0JBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTztpQkFDekI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUExQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJTGF5b3V0Q29uZmlnLCBDb25maWdMYXlvdXQgfSBmcm9tICcuL2xheW91dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVN0b3JhZ2UsIHN0b3JhZ2UgfSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuaW1wb3J0IHsgRXZlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZXQnO1xuaW1wb3J0IHsgRXZBZExBeW91dERpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMYXlvdXRDb250cm9sbGVyIH0gZnJvbSAnLi9sYXlvdXQtY29udHJvbGxlcic7XG5pbXBvcnQgeyBwcm92aWRlckRlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL3ZpZXcnO1xuaW1wb3J0IHsgU2luZ091dCB9IGZyb20gJy4vc2luZy1vdXQucHJvdmlkZXInO1xuXG5leHBvcnQgeyBMYXlvdXRDb250cm9sbGVyIH0gZnJvbSAnLi9sYXlvdXQtY29udHJvbGxlcic7XG5leHBvcnQgeyBDb21wYW55TGF5b3V0IH0gZnJvbSAnLi9tb2RlbHMvY29tcGFueS1sYXlvdXQubW9kZWwnO1xuZXhwb3J0IHsgTWVudUxheW91dCB9IGZyb20gJy4vbW9kZWxzL21lbnUtbGF5b3V0Lm1vZGVsJztcbmV4cG9ydCB7IExheW91dCB9IGZyb20gJy4vbW9kZWxzL2xheW91dC5tb2RlbCc7XG5leHBvcnQgeyBJTGF5b3V0Q29uZmlnLCBJQ29tcGFueUxheW91dCwgSU1lbnVMYXlvdXQgfSBmcm9tICcuL2xheW91dC5pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gX3Nlc3Npb25TdG9yYWdlKCk6IElTdG9yYWdlPHN0cmluZywgc3RyaW5nPiB7XG4gIHJldHVybiBzdG9yYWdlKCdzZXNzaW9uJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRMYXlvdXRDdHJsKGNvbmZpZzogSUxheW91dENvbmZpZykge1xuICAgIHJldHVybiBuZXcgTGF5b3V0Q29udHJvbGxlcihjb25maWcsIF9zZXNzaW9uU3RvcmFnZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZFByb3ZpZGVyU2luZ091dChjb25maWc6IElMYXlvdXRDb25maWcpIHtcbiAgY29uc29sZS5sb2coY29uZmlnLnNpbmdPdXRBY3Rpb24gJiYgY29uZmlnLnNpbmdPdXRBY3Rpb24gIT09IG51bGwsIGNvbmZpZy5zaW5nT3V0QWN0aW9uKTtcbiAgcmV0dXJuIGNvbmZpZy5zaW5nT3V0QWN0aW9uICYmIGNvbmZpZy5zaW5nT3V0QWN0aW9uICE9PSBudWxsID8gY29uZmlnLnNpbmdPdXRBY3Rpb24gOiB7fTtcbn1cblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgRXZlTGF5b3V0Q29tcG9uZW50LFxuICBFdkFkTEF5b3V0RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEV2ZUxheW91TWFuYWdlciB7XG4gIHN0YXRpYyBmb3JSb290IChjb25maWc6IElMYXlvdXRDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV2ZUxheW91TWFuYWdlcixcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IENvbmZpZ0xheW91dCxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTaW5nT3V0LFxuICAgICAgICAgIHVzZUNsYXNzOiBjb25maWcuc2luZ091dEFjdGlvbiB8fCBTaW5nT3V0LFxuICAgICAgICB9LFxuICAgICAgICB7IHByb3ZpZGU6IExheW91dENvbnRyb2xsZXIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogX2J1aWxkTGF5b3V0Q3RybCwgZGVwczogW0NvbmZpZ0xheW91dF19LFxuICAgICAgICB7XG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgcHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLmxheW91dHMsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=