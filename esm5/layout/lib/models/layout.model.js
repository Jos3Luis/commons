/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { LayoutEncrypt } from './encrypt.model';
var Layout = /** @class */ (function () {
    function Layout(layouts, sessionStorage) {
        this.layouts = layouts;
        this.sessionStorage = sessionStorage;
        this.state = new Subject();
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
            ly = this.layouts.filter((/**
             * @param {?} layout
             * @return {?}
             */
            function (layout) { return layout.default === true; }));
        }
        else {
            ly = this.layouts.filter((/**
             * @param {?} layout
             * @return {?}
             */
            function (layout) {
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
        var ly = this.layouts.filter((/**
         * @param {?} layout
         * @return {?}
         */
        function (layout) { return layout.name.toLowerCase() === name.toLowerCase(); }));
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
export { Layout };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbGF5b3V0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRDtJQUdFLGdCQUNVLE9BQTRCLEVBQzVCLGNBQWtDO1FBRGxDLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUpwQyxVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7UUFDekMsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFJdkMsQ0FBQzs7OztJQUVMLDBCQUFTOzs7SUFBVDs7WUFDUSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSTs7WUFDM0QsRUFBRTtRQUNOLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtZQUMxQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxNQUFNO2dCQUU5QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssYUFBYSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQseUJBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzQkFBSzs7O0lBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCw2QkFBWTs7OztJQUFaLFVBQWEsSUFBWTs7WUFDakIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQWhELENBQWdELEVBQUM7UUFDMUYsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsTUFBTSxDQUNKLElBQUksS0FBSyxDQUFDLGVBQWEsSUFBSSxnQkFBYSxDQUFDLENBQzFDLENBQUM7U0FDSDtJQUNILENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQzs7Ozs7OztJQXpDQyx1QkFBaUQ7Ozs7O0lBQ2pELHdCQUEyQzs7Ozs7SUFFekMseUJBQW9DOzs7OztJQUNwQyxnQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb3JlQnJvd3NlclN0b3JhZ2UgfSBmcm9tICdAZXZlcmlzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJTGF5b3V0c0NvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTGF5b3V0RW5jcnlwdCB9IGZyb20gJy4vZW5jcnlwdC5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQge1xuICBwcml2YXRlIHN0YXRlID0gbmV3IFN1YmplY3Q8SUxheW91dHNDb21wb25lbnQ+KCk7XG4gIHByaXZhdGUgJHN0YXRlID0gdGhpcy5zdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYXlvdXRzOiBJTGF5b3V0c0NvbXBvbmVudFtdLFxuICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IENvcmVCcm93c2VyU3RvcmFnZSxcbiAgKSB7IH1cblxuICBnZXRBY3RpdmUoKSB7XG4gICAgY29uc3QgcGVyc2lzdExheW91dCA9IHRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0KCdsYXlvdXQnKSB8fCBudWxsO1xuICAgIGxldCBseTtcbiAgICBpZiAocGVyc2lzdExheW91dCA9PT0gbnVsbCkge1xuICAgICAgbHkgPSB0aGlzLmxheW91dHMuZmlsdGVyKGxheW91dCA9PiBsYXlvdXQuZGVmYXVsdCA9PT0gdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGx5ID0gdGhpcy5sYXlvdXRzLmZpbHRlcigobGF5b3V0KSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIGxheW91dC5uYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gTGF5b3V0RW5jcnlwdC51bmVuY3J5cHRTdG9yYWdlKHBlcnNpc3RMYXlvdXQpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBseS5sZW5ndGggPiAwID8gbHlbMF0gOiBmYWxzZTtcbiAgfVxuXG4gIGdldEl0ZW1zKCk6IElMYXlvdXRzQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLmxheW91dHM7XG4gIH1cblxuICB3YXRjaCgpOiBPYnNlcnZhYmxlPElMYXlvdXRzQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuJHN0YXRlO1xuICB9XG5cbiAgY2hhbmdlTGF5b3V0KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGx5ID0gdGhpcy5sYXlvdXRzLmZpbHRlcihsYXlvdXQgPT4gbGF5b3V0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAobHkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXNzaW9uU3RvcmFnZS5zZXQoJ2xheW91dCcsIExheW91dEVuY3J5cHQuZW5jcnlwdFN0b3JhZ2UobHlbMF0ubmFtZSkpO1xuICAgICAgdGhpcy5zdGF0ZS5uZXh0KGx5WzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgKFxuICAgICAgICBuZXcgRXJyb3IoYEVsIGxheW91dCAke25hbWV9LCBubyBleGlzdGVgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==