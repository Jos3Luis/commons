/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { LayoutEncrypt } from './encrypt.model';
export class Layout {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    Layout.prototype.state;
    /**
     * @type {?}
     * @private
     */
    Layout.prototype.$state;
    /**
     * @type {?}
     * @private
     */
    Layout.prototype.layouts;
    /**
     * @type {?}
     * @private
     */
    Layout.prototype.sessionStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbGF5b3V0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxNQUFNOzs7OztJQUdKLFlBQ1UsT0FBNEIsRUFDNUIsY0FBa0M7UUFEbEMsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBSnBDLFVBQUssR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztRQUN6QyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUl2QyxDQUFDOzs7O0lBRUwsU0FBUzs7Y0FDRCxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTs7WUFDM0QsRUFBRTtRQUNOLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtZQUMxQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFFbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6SCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTs7Y0FDakIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUM7UUFDMUYsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsTUFBTSxDQUNKLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsQ0FDMUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUF6Q0MsdUJBQWlEOzs7OztJQUNqRCx3QkFBMkM7Ozs7O0lBRXpDLHlCQUFvQzs7Ozs7SUFDcEMsZ0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29yZUJyb3dzZXJTdG9yYWdlIH0gZnJvbSAnQGV2ZXJpcy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgSUxheW91dHNDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQuaW50ZXJmYWNlJztcbmltcG9ydCB7IExheW91dEVuY3J5cHQgfSBmcm9tICcuL2VuY3J5cHQubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTGF5b3V0IHtcbiAgcHJpdmF0ZSBzdGF0ZSA9IG5ldyBTdWJqZWN0PElMYXlvdXRzQ29tcG9uZW50PigpO1xuICBwcml2YXRlICRzdGF0ZSA9IHRoaXMuc3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGF5b3V0czogSUxheW91dHNDb21wb25lbnRbXSxcbiAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBDb3JlQnJvd3NlclN0b3JhZ2UsXG4gICkgeyB9XG5cbiAgZ2V0QWN0aXZlKCkge1xuICAgIGNvbnN0IHBlcnNpc3RMYXlvdXQgPSB0aGlzLnNlc3Npb25TdG9yYWdlLmdldCgnbGF5b3V0JykgfHwgbnVsbDtcbiAgICBsZXQgbHk7XG4gICAgaWYgKHBlcnNpc3RMYXlvdXQgPT09IG51bGwpIHtcbiAgICAgIGx5ID0gdGhpcy5sYXlvdXRzLmZpbHRlcihsYXlvdXQgPT4gbGF5b3V0LmRlZmF1bHQgPT09IHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBseSA9IHRoaXMubGF5b3V0cy5maWx0ZXIoKGxheW91dCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBsYXlvdXQubmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09IExheW91dEVuY3J5cHQudW5lbmNyeXB0U3RvcmFnZShwZXJzaXN0TGF5b3V0KS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbHkubGVuZ3RoID4gMCA/IGx5WzBdIDogZmFsc2U7XG4gIH1cblxuICBnZXRJdGVtcygpOiBJTGF5b3V0c0NvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXRzO1xuICB9XG5cbiAgd2F0Y2goKTogT2JzZXJ2YWJsZTxJTGF5b3V0c0NvbXBvbmVudD4ge1xuICAgIHJldHVybiB0aGlzLiRzdGF0ZTtcbiAgfVxuXG4gIGNoYW5nZUxheW91dChuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBseSA9IHRoaXMubGF5b3V0cy5maWx0ZXIobGF5b3V0ID0+IGxheW91dC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKGx5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2Uuc2V0KCdsYXlvdXQnLCBMYXlvdXRFbmNyeXB0LmVuY3J5cHRTdG9yYWdlKGx5WzBdLm5hbWUpKTtcbiAgICAgIHRoaXMuc3RhdGUubmV4dChseVswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IChcbiAgICAgICAgbmV3IEVycm9yKGBFbCBsYXlvdXQgJHtuYW1lfSwgbm8gZXhpc3RlYClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=