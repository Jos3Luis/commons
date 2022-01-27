/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutEncrypt = /** @class */ (function () {
    function LayoutEncrypt() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LayoutEncrypt.encryptStorage = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return btoa(value).split('').reverse().join('');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LayoutEncrypt.unencryptStorage = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return atob(value.split('').reverse().join(''));
    };
    return LayoutEncrypt;
}());
export { LayoutEncrypt };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2VuY3J5cHQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0lBQUE7SUFRQSxDQUFDOzs7OztJQVBRLDRCQUFjOzs7O0lBQXJCLFVBQXNCLEtBQWE7UUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVNLDhCQUFnQjs7OztJQUF2QixVQUF3QixLQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFbmNyeXB0IHtcbiAgc3RhdGljIGVuY3J5cHRTdG9yYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYnRvYSh2YWx1ZSkuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgfVxuXG4gIHN0YXRpYyB1bmVuY3J5cHRTdG9yYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXRvYih2YWx1ZS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpKTtcbiAgfVxufVxuIl19