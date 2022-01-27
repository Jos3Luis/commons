/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function IMenuLayout() { }
if (false) {
    /** @type {?} */
    IMenuLayout.prototype.name;
    /** @type {?} */
    IMenuLayout.prototype.path;
    /** @type {?|undefined} */
    IMenuLayout.prototype.icon;
    /** @type {?|undefined} */
    IMenuLayout.prototype.image;
    /** @type {?|undefined} */
    IMenuLayout.prototype.active;
    /* Skipping unhandled member: [key: string]: string | boolean | undefined;*/
}
/**
 * @record
 */
export function ICompanyLayout() { }
if (false) {
    /** @type {?|undefined} */
    ICompanyLayout.prototype.logo;
    /** @type {?|undefined} */
    ICompanyLayout.prototype.name;
    /* Skipping unhandled member: [key: string]: string | undefined;*/
}
/**
 * @record
 */
export function ILayoutConfig() { }
if (false) {
    /** @type {?|undefined} */
    ILayoutConfig.prototype.menu;
    /** @type {?|undefined} */
    ILayoutConfig.prototype.company;
    /** @type {?|undefined} */
    ILayoutConfig.prototype.showDocMenu;
    /** @type {?|undefined} */
    ILayoutConfig.prototype.singOutAction;
    /** @type {?} */
    ILayoutConfig.prototype.layouts;
    /* Skipping unhandled member: [key: string]: Array<IMenuLayout> | ICompanyLayout | boolean | undefined | Provider | object| ILayoutsComponent[];*/
}
/**
 * @record
 */
export function ILayoutsComponent() { }
if (false) {
    /** @type {?} */
    ILayoutsComponent.prototype.name;
    /** @type {?} */
    ILayoutsComponent.prototype.component;
    /** @type {?} */
    ILayoutsComponent.prototype.default;
}
/** @type {?} */
export var ConfigLayout = new InjectionToken('container');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BldmVyaXMvY29tbW9ucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0LmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFZLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQzs7OztBQUUvRCxpQ0FPQzs7O0lBTkMsMkJBQWE7O0lBQ2IsMkJBQWE7O0lBQ2IsMkJBQWM7O0lBQ2QsNEJBQWU7O0lBQ2YsNkJBQWlCOzs7Ozs7QUFJbkIsb0NBS0M7OztJQUpDLDhCQUEwQjs7SUFDMUIsOEJBQTBCOzs7Ozs7QUFLNUIsbUNBT0M7OztJQU5DLDZCQUFpQzs7SUFDakMsZ0NBQXFDOztJQUNyQyxvQ0FBa0M7O0lBQ2xDLHNDQUFxQzs7SUFDckMsZ0NBQTZCOzs7Ozs7QUFHL0IsdUNBS0M7OztJQUpDLGlDQUFhOztJQUViLHNDQUFxQjs7SUFDckIsb0NBQWlCOzs7QUFHbkIsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVMYXlvdXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBhbnlMYXlvdXQge1xuICBsb2dvPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBuYW1lPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGF5b3V0Q29uZmlnIHtcbiAgbWVudT86IElNZW51TGF5b3V0W10gfCB1bmRlZmluZWQ7XG4gIGNvbXBhbnk/OiBJQ29tcGFueUxheW91dCB8IHVuZGVmaW5lZDtcbiAgc2hvd0RvY01lbnU/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBzaW5nT3V0QWN0aW9uPzogUHJvdmlkZXIgfCB1bmRlZmluZWQ7XG4gIGxheW91dHM6IElMYXlvdXRzQ29tcG9uZW50W107XG4gIFtrZXk6IHN0cmluZ106IEFycmF5PElNZW51TGF5b3V0PiB8IElDb21wYW55TGF5b3V0IHwgYm9vbGVhbiB8IHVuZGVmaW5lZCB8IFByb3ZpZGVyIHwgb2JqZWN0fCBJTGF5b3V0c0NvbXBvbmVudFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJTGF5b3V0c0NvbXBvbmVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb21wb25lbnQ6IFR5cGU8YW55PjtcbiAgZGVmYXVsdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENvbmZpZ0xheW91dCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJTGF5b3V0Q29uZmlnPignY29udGFpbmVyJyk7XG4iXX0=