/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class RulesDTO {
    /**
     * @param {?} rules
     */
    constructor(rules) {
        this.rules = rules;
        this.setIterceptor();
        this.setTypeToken();
        this.setHeaderName();
    }
    /**
     * @return {?}
     */
    prepare() {
        return this.rules;
    }
    /**
     * @private
     * @return {?}
     */
    setIterceptor() {
        this.rules['interceptor'] = this.rules.hasOwnProperty('interceptor') ? this.rules.interceptor : true;
    }
    /**
     * @private
     * @return {?}
     */
    setTypeToken() {
        this.rules['typeToken'] = this.rules.hasOwnProperty('typeToken') ? this.rules.typeToken : 'Bearer';
    }
    /**
     * @private
     * @return {?}
     */
    setHeaderName() {
        this.rules['headerName'] = this.rules.hasOwnProperty('headerName') ? this.rules.headerName : 'Authorization';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    RulesDTO.prototype.rules;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ydWxlcy5kdG8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZXZlcmlzL2NvbW1vbnMvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLXJ1bGVzLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7OztJQUNKLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDbkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkcsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDckcsQ0FBQzs7Ozs7SUFDTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDL0csQ0FBQztDQUNGOzs7Ozs7SUFwQmEseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUF1dGhydWxlcyB9IGZyb20gJ0BldmVyaXMvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBSdWxlc0RUTyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcnVsZXM6IElBdXRocnVsZXMpIHtcbiAgICB0aGlzLnNldEl0ZXJjZXB0b3IoKTtcbiAgICB0aGlzLnNldFR5cGVUb2tlbigpO1xuICAgIHRoaXMuc2V0SGVhZGVyTmFtZSgpO1xuICB9XG5cbiAgcHJlcGFyZSgpOiBJQXV0aHJ1bGVzIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIHByaXZhdGUgc2V0SXRlcmNlcHRvcigpIHtcbiAgICB0aGlzLnJ1bGVzWydpbnRlcmNlcHRvciddID0gdGhpcy5ydWxlcy5oYXNPd25Qcm9wZXJ0eSgnaW50ZXJjZXB0b3InKSA/IHRoaXMucnVsZXMuaW50ZXJjZXB0b3IgOiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUeXBlVG9rZW4oKSB7XG4gICAgdGhpcy5ydWxlc1sndHlwZVRva2VuJ10gPSB0aGlzLnJ1bGVzLmhhc093blByb3BlcnR5KCd0eXBlVG9rZW4nKSA/IHRoaXMucnVsZXMudHlwZVRva2VuIDogJ0JlYXJlcic7XG4gIH1cbiAgcHJpdmF0ZSBzZXRIZWFkZXJOYW1lKCkge1xuICAgIHRoaXMucnVsZXNbJ2hlYWRlck5hbWUnXSA9IHRoaXMucnVsZXMuaGFzT3duUHJvcGVydHkoJ2hlYWRlck5hbWUnKSA/IHRoaXMucnVsZXMuaGVhZGVyTmFtZSA6ICdBdXRob3JpemF0aW9uJztcbiAgfVxufVxuIl19