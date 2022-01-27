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
         */
        function () {
            return this._company;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutController.prototype, "menu", {
        get: /**
         * @return {?}
         */
        function () {
            return this._menu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutController.prototype, "layout", {
        get: /**
         * @return {?}
         */
        function () {
            return this._layout;
        },
        enumerable: true,
        configurable: true
    });
    LayoutController.decorators = [
        { type: Injectable }
    ];
    LayoutController.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ConfigLayout,] }] },
        { type: CoreBrowserStorage }
    ]; };
    return LayoutController;
}());
export { LayoutController };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZXZlcmlzL2NvbW1vbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV4RDtJQU1FLDBCQUMrQixNQUFxQixFQUMxQyxjQUFrQztRQURiLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUssRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxvQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOztnQkF4QkYsVUFBVTs7O2dEQU9OLE1BQU0sU0FBQyxZQUFZO2dCQVpmLGtCQUFrQjs7SUE4QjNCLHVCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlksZ0JBQWdCOzs7Ozs7SUFDM0Isb0NBQWdDOzs7OztJQUNoQyxpQ0FBMEI7Ozs7O0lBQzFCLG1DQUF3Qjs7SUFHdEIsa0NBQWtEOzs7OztJQUNsRCwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0xheW91dCwgSUxheW91dENvbmZpZyB9IGZyb20gJy4vbGF5b3V0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb3JlQnJvd3NlclN0b3JhZ2UgfSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9tb2RlbHMvbGF5b3V0Lm1vZGVsJztcbmltcG9ydCB7IENvbXBhbnlMYXlvdXQgfSBmcm9tICcuL21vZGVscy9jb21wYW55LWxheW91dC5tb2RlbCc7XG5pbXBvcnQgeyBNZW51TGF5b3V0IH0gZnJvbSAnLi9tb2RlbHMvbWVudS1sYXlvdXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29udHJvbGxlciB7XG4gIHByaXZhdGUgX2NvbXBhbnk6IENvbXBhbnlMYXlvdXQ7XG4gIHByaXZhdGUgX21lbnU6IE1lbnVMYXlvdXQ7XG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0O1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICBASW5qZWN0KENvbmZpZ0xheW91dCkgcHVibGljIGNvbmZpZzogSUxheW91dENvbmZpZyxcbiAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBDb3JlQnJvd3NlclN0b3JhZ2UsXG4gICkge1xuICAgIHRoaXMuX2NvbXBhbnkgPSBuZXcgQ29tcGFueUxheW91dCh0aGlzLmNvbmZpZy5jb21wYW55ICB8fCB7fSk7XG4gICAgdGhpcy5fbWVudSA9IG5ldyBNZW51TGF5b3V0KCh0aGlzLmNvbmZpZy5tZW51IHx8IFtdKSwgdGhpcy5zZXNzaW9uU3RvcmFnZSk7XG4gICAgdGhpcy5fbGF5b3V0ID0gbmV3IExheW91dCh0aGlzLmNvbmZpZy5sYXlvdXRzLCB0aGlzLnNlc3Npb25TdG9yYWdlKTtcbiAgfVxuXG4gIGdldCBjb21wYW55ICgpOiBDb21wYW55TGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFueTtcbiAgfVxuXG4gIGdldCBtZW51ICgpOiBNZW51TGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5fbWVudTtcbiAgfVxuICBnZXQgbGF5b3V0ICgpOiBMYXlvdXQge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQ7XG4gIH1cbn1cbiJdfQ==