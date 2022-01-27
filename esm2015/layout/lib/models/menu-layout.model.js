/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class MenuLayout {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1sYXlvdXQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZXZlcmlzL2NvbW1vbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9tZW51LWxheW91dC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTTs7Ozs7SUFDSixZQUNVLElBQW1CLEVBQ25CLGNBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBQ3hDLENBQUM7Ozs7O0lBRUwsUUFBUSxDQUFDLEtBQW9CO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7O2NBQ0QsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUk7UUFDM0QsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuRDtRQUNBLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0NBQ0Y7Ozs7OztJQWhCRywwQkFBMkI7Ozs7O0lBQzNCLG9DQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNZW51TGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb3JlQnJvd3NlclN0b3JhZ2UgfSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTWVudUxheW91dCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVudTogSU1lbnVMYXlvdXRbXSxcbiAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBDb3JlQnJvd3NlclN0b3JhZ2UsXG4gICkgeyB9XG5cbiAgYWRkSXRlbXMoaXRlbXM6IElNZW51TGF5b3V0W10pIHtcbiAgICB0aGlzLm1lbnUgPSBbLi4udGhpcy5tZW51LCAuLi5pdGVtc107XG4gICAgdGhpcy5zZXNzaW9uU3RvcmFnZS5zZXQoJ21lbnUnLCB0aGlzLm1lbnUpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCk6IElNZW51TGF5b3V0W10ge1xuICAgIGNvbnN0IHBlcnNpc3RNZW51ID0gdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXQoJ21lbnUnKSB8fCBudWxsO1xuICAgIGlmIChwZXJzaXN0TWVudSkge1xuICAgICAgdGhpcy5tZW51ID0gdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXQoJ21lbnUnKSB8fCAnJztcbiAgICB9XG4gICAgIHJldHVybiB0aGlzLm1lbnU7XG4gIH1cbn1cbiJdfQ==