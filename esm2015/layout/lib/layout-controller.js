/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { ConfigLayout } from './layout.interface';
import { CoreBrowserStorage } from 'everiscore';
import { Layout } from './models/layout.model';
import { CompanyLayout } from './models/company-layout.model';
import { MenuLayout } from './models/menu-layout.model';
export class LayoutController {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutController.prototype._company;
    /**
     * @type {?}
     * @private
     */
    LayoutController.prototype._menu;
    /**
     * @type {?}
     * @private
     */
    LayoutController.prototype._layout;
    /** @type {?} */
    LayoutController.prototype.config;
    /**
     * @type {?}
     * @private
     */
    LayoutController.prototype.sessionStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZXZlcmlzL2NvbW1vbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd4RCxNQUFNOzs7OztJQUtKLFlBQytCLE1BQXFCLEVBQzFDLGNBQWtDO1FBRGIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUMxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFFMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSyxFQUFFLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7OztZQXhCRixVQUFVOzs7NENBT04sTUFBTSxTQUFDLFlBQVk7WUFaZixrQkFBa0I7Ozs7Ozs7SUFPekIsb0NBQWdDOzs7OztJQUNoQyxpQ0FBMEI7Ozs7O0lBQzFCLG1DQUF3Qjs7SUFHdEIsa0NBQWtEOzs7OztJQUNsRCwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0xheW91dCwgSUxheW91dENvbmZpZyB9IGZyb20gJy4vbGF5b3V0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb3JlQnJvd3NlclN0b3JhZ2UgfSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9tb2RlbHMvbGF5b3V0Lm1vZGVsJztcbmltcG9ydCB7IENvbXBhbnlMYXlvdXQgfSBmcm9tICcuL21vZGVscy9jb21wYW55LWxheW91dC5tb2RlbCc7XG5pbXBvcnQgeyBNZW51TGF5b3V0IH0gZnJvbSAnLi9tb2RlbHMvbWVudS1sYXlvdXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgX2NvbXBhbnk6IENvbXBhbnlMYXlvdXQ7XG4gIHByaXZhdGUgX21lbnU6IE1lbnVMYXlvdXQ7XG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0O1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICBASW5qZWN0KENvbmZpZ0xheW91dCkgcHVibGljIGNvbmZpZzogSUxheW91dENvbmZpZyxcbiAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBDb3JlQnJvd3NlclN0b3JhZ2UsXG4gICkge1xuICAgIHRoaXMuX2NvbXBhbnkgPSBuZXcgQ29tcGFueUxheW91dCh0aGlzLmNvbmZpZy5jb21wYW55ICB8fCB7fSk7XG4gICAgdGhpcy5fbWVudSA9IG5ldyBNZW51TGF5b3V0KCh0aGlzLmNvbmZpZy5tZW51IHx8IFtdKSwgdGhpcy5zZXNzaW9uU3RvcmFnZSk7XG4gICAgdGhpcy5fbGF5b3V0ID0gbmV3IExheW91dCh0aGlzLmNvbmZpZy5sYXlvdXRzLCB0aGlzLnNlc3Npb25TdG9yYWdlKTtcbiAgfVxuXG4gIGdldCBjb21wYW55ICgpOiBDb21wYW55TGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFueTtcbiAgfVxuXG4gIGdldCBtZW51ICgpOiBNZW51TGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5fbWVudTtcbiAgfVxuICBnZXQgbGF5b3V0ICgpOiBMYXlvdXQge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQ7XG4gIH1cbn1cbiJdfQ==