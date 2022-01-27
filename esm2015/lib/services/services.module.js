/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { storage } from 'everiscore';
import { EvLocalStorage } from './storage/local-storage.services';
import { EvSessionStorage } from './storage/session-storage.services';
import { EvMemoryStorage } from './storage/memory-storage.services';
export { EvLocalStorage } from './storage/local-storage.services';
export { EvSessionStorage } from './storage/session-storage.services';
export { EvMemoryStorage } from './storage/memory-storage.services';
/**
 * @return {?}
 */
export function _localStorage() {
    return storage('local');
}
/**
 * @return {?}
 */
export function _sessionStorage() {
    return storage('session');
}
/**
 * @return {?}
 */
export function _memoryStorage() {
    return storage('memory');
}
export class ServicesModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLE9BQU8sRUFBWSxNQUFNLGNBQWMsQ0FBQztBQUVqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFFcEUsTUFBTTtJQUNKLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFCLENBQUM7Ozs7QUFDRCxNQUFNO0lBQ0osT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUIsQ0FBQzs7OztBQUNELE1BQU07SUFDSixPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBR0QsTUFBTTs7OztJQUVKLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsVUFBVSxFQUFFLGFBQWE7aUJBQzFCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFVBQVUsRUFBRSxlQUFlO2lCQUM1QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLGNBQWM7aUJBQzNCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBckJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBzdG9yYWdlLCBJU3RvcmFnZSB9IGZyb20gJ0BldmVyaXMvY29yZSc7XG5cbmltcG9ydCB7IEV2TG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZXMnO1xuaW1wb3J0IHsgRXZTZXNzaW9uU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9zZXNzaW9uLXN0b3JhZ2Uuc2VydmljZXMnO1xuaW1wb3J0IHsgRXZNZW1vcnlTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlL21lbW9yeS1zdG9yYWdlLnNlcnZpY2VzJztcblxuZXhwb3J0IHsgRXZMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlcyc7XG5leHBvcnQgeyBFdlNlc3Npb25TdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlL3Nlc3Npb24tc3RvcmFnZS5zZXJ2aWNlcyc7XG5leHBvcnQgeyBFdk1lbW9yeVN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UvbWVtb3J5LXN0b3JhZ2Uuc2VydmljZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gX2xvY2FsU3RvcmFnZSgpOiBJU3RvcmFnZTxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4gc3RvcmFnZSgnbG9jYWwnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBfc2Vzc2lvblN0b3JhZ2UoKTogSVN0b3JhZ2U8c3RyaW5nLCBzdHJpbmc+IHtcbiAgcmV0dXJuIHN0b3JhZ2UoJ3Nlc3Npb24nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBfbWVtb3J5U3RvcmFnZSgpOiBJU3RvcmFnZTxzdHJpbmcsIHN0cmluZz4ge1xuICByZXR1cm4gc3RvcmFnZSgnbWVtb3J5Jyk7XG59XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgU2VydmljZXNNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VydmljZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEV2TG9jYWxTdG9yYWdlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9sb2NhbFN0b3JhZ2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFdlNlc3Npb25TdG9yYWdlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9zZXNzaW9uU3RvcmFnZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEV2TWVtb3J5U3RvcmFnZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBfbWVtb3J5U3RvcmFnZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19