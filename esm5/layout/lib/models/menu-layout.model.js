/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        this.menu = tslib_1.__spread(this.menu, items);
        this.sessionStorage.set('menu', this.menu);
    };
    Object.defineProperty(MenuLayout.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
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
export { MenuLayout };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MenuLayout.prototype.menu;
    /**
     * @type {?}
     * @private
     */
    MenuLayout.prototype.sessionStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1sYXlvdXQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZXZlcmlzL2NvbW1vbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9tZW51LWxheW91dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0lBQ0Usb0JBQ1UsSUFBbUIsRUFDbkIsY0FBa0M7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFDeEMsQ0FBQzs7Ozs7SUFFTCw2QkFBUTs7OztJQUFSLFVBQVMsS0FBb0I7UUFDM0IsSUFBSSxDQUFDLElBQUksb0JBQU8sSUFBSSxDQUFDLElBQUksRUFBSyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBSSw2QkFBSzs7OztRQUFUOztnQkFDUSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSTtZQUMzRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuRDtZQUNBLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQzs7Ozs7OztJQWhCRywwQkFBMkI7Ozs7O0lBQzNCLG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNZW51TGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb3JlQnJvd3NlclN0b3JhZ2UgfSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTWVudUxheW91dCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVudTogSU1lbnVMYXlvdXRbXSxcbiAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBDb3JlQnJvd3NlclN0b3JhZ2UsXG4gICkgeyB9XG5cbiAgYWRkSXRlbXMoaXRlbXM6IElNZW51TGF5b3V0W10pIHtcbiAgICB0aGlzLm1lbnUgPSBbLi4udGhpcy5tZW51LCAuLi5pdGVtc107XG4gICAgdGhpcy5zZXNzaW9uU3RvcmFnZS5zZXQoJ21lbnUnLCB0aGlzLm1lbnUpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCk6IElNZW51TGF5b3V0W10ge1xuICAgIGNvbnN0IHBlcnNpc3RNZW51ID0gdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXQoJ21lbnUnKSB8fCBudWxsO1xuICAgIGlmIChwZXJzaXN0TWVudSkge1xuICAgICAgdGhpcy5tZW51ID0gdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXQoJ21lbnUnKSB8fCAnJztcbiAgICB9XG4gICAgIHJldHVybiB0aGlzLm1lbnU7XG4gIH1cbn1cbiJdfQ==