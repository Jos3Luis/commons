/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class LayoutEncrypt {
    /**
     * @param {?} value
     * @return {?}
     */
    static encryptStorage(value) {
        return btoa(value).split('').reverse().join('');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static unencryptStorage(value) {
        return atob(value.split('').reverse().join(''));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jcnlwdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2VuY3J5cHQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU07Ozs7O0lBQ0osTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFhO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBYTtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIExheW91dEVuY3J5cHQge1xuICBzdGF0aWMgZW5jcnlwdFN0b3JhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBidG9hKHZhbHVlKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICB9XG5cbiAgc3RhdGljIHVuZW5jcnlwdFN0b3JhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBhdG9iKHZhbHVlLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykpO1xuICB9XG59XG4iXX0=