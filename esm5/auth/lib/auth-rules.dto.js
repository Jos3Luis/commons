/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RulesDTO = /** @class */ (function () {
    function RulesDTO(rules) {
        this.rules = rules;
        this.setIterceptor();
        this.setTypeToken();
        this.setHeaderName();
    }
    /**
     * @return {?}
     */
    RulesDTO.prototype.prepare = /**
     * @return {?}
     */
    function () {
        return this.rules;
    };
    /**
     * @private
     * @return {?}
     */
    RulesDTO.prototype.setIterceptor = /**
     * @private
     * @return {?}
     */
    function () {
        this.rules['interceptor'] = this.rules.hasOwnProperty('interceptor') ? this.rules.interceptor : true;
    };
    /**
     * @private
     * @return {?}
     */
    RulesDTO.prototype.setTypeToken = /**
     * @private
     * @return {?}
     */
    function () {
        this.rules['typeToken'] = this.rules.hasOwnProperty('typeToken') ? this.rules.typeToken : 'Bearer';
    };
    /**
     * @private
     * @return {?}
     */
    RulesDTO.prototype.setHeaderName = /**
     * @private
     * @return {?}
     */
    function () {
        this.rules['headerName'] = this.rules.hasOwnProperty('headerName') ? this.rules.headerName : 'Authorization';
    };
    return RulesDTO;
}());
export { RulesDTO };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RulesDTO.prototype.rules;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ydWxlcy5kdG8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZXZlcmlzL2NvbW1vbnMvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLXJ1bGVzLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFDRSxrQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNuQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsMEJBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sZ0NBQWE7Ozs7SUFBckI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZHLENBQUM7Ozs7O0lBRU8sK0JBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3JHLENBQUM7Ozs7O0lBQ08sZ0NBQWE7Ozs7SUFBckI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBQy9HLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQzs7Ozs7OztJQXBCYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXV0aHJ1bGVzIH0gZnJvbSAnQGV2ZXJpcy9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFJ1bGVzRFRPIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBydWxlczogSUF1dGhydWxlcykge1xuICAgIHRoaXMuc2V0SXRlcmNlcHRvcigpO1xuICAgIHRoaXMuc2V0VHlwZVRva2VuKCk7XG4gICAgdGhpcy5zZXRIZWFkZXJOYW1lKCk7XG4gIH1cblxuICBwcmVwYXJlKCk6IElBdXRocnVsZXMge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJdGVyY2VwdG9yKCkge1xuICAgIHRoaXMucnVsZXNbJ2ludGVyY2VwdG9yJ10gPSB0aGlzLnJ1bGVzLmhhc093blByb3BlcnR5KCdpbnRlcmNlcHRvcicpID8gdGhpcy5ydWxlcy5pbnRlcmNlcHRvciA6IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHNldFR5cGVUb2tlbigpIHtcbiAgICB0aGlzLnJ1bGVzWyd0eXBlVG9rZW4nXSA9IHRoaXMucnVsZXMuaGFzT3duUHJvcGVydHkoJ3R5cGVUb2tlbicpID8gdGhpcy5ydWxlcy50eXBlVG9rZW4gOiAnQmVhcmVyJztcbiAgfVxuICBwcml2YXRlIHNldEhlYWRlck5hbWUoKSB7XG4gICAgdGhpcy5ydWxlc1snaGVhZGVyTmFtZSddID0gdGhpcy5ydWxlcy5oYXNPd25Qcm9wZXJ0eSgnaGVhZGVyTmFtZScpID8gdGhpcy5ydWxlcy5oZWFkZXJOYW1lIDogJ0F1dGhvcml6YXRpb24nO1xuICB9XG59XG4iXX0=