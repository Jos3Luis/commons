/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ChangeDetectorRef, ViewChild, } from '@angular/core';
import { LayoutController } from './layout-controller';
import { EvAdLAyoutDirective } from './layout.directive';
export class EveLayoutComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} cdr
     * @param {?} lyCtrl
     */
    constructor(componentFactoryResolver, cdr, lyCtrl) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdr = cdr;
        this.lyCtrl = lyCtrl;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.loadComponent();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.lyCtrl.layout.watch().subscribe((/**
         * @return {?}
         */
        () => { this.loadComponent(); }));
    }
    /**
     * @return {?}
     */
    loadComponent() {
        /** @type {?} */
        const layout = this.lyCtrl.layout.getActive();
        if (layout !== false) {
            /** @type {?} */
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(layout.component);
            /** @type {?} */
            const viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            viewContainerRef.createComponent(componentFactory);
        }
        else {
            throw (new Error('No se encontro layouts para cargar por defecto, \n revise la configuracion en su modulo principal'));
        }
    }
}
EveLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'eve-layout',
                template: `
    <ng-template eve-layout-ad-host></ng-template>
  `
            }] }
];
EveLayoutComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: LayoutController }
];
EveLayoutComponent.propDecorators = {
    adHost: [{ type: ViewChild, args: [EvAdLAyoutDirective,] }]
};
if (false) {
    /** @type {?} */
    EveLayoutComponent.prototype.adHost;
    /**
     * @type {?}
     * @private
     */
    EveLayoutComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    EveLayoutComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    EveLayoutComponent.prototype.lyCtrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQuY29tcG9uZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLGlCQUFpQixFQUNqQixTQUFTLEdBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRekQsTUFBTTs7Ozs7O0lBS0osWUFDVSx3QkFBa0QsRUFDbEQsR0FBc0IsRUFDdEIsTUFBd0I7UUFGeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDOzs7O0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUNELGFBQWE7O2NBQ0wsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUM3QyxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7O2tCQUNkLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDOztrQkFFMUYsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDckQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFekIsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLE1BQU0sQ0FDSixJQUFJLEtBQUssQ0FBQyxtR0FBbUcsQ0FBQyxDQUMvRyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7O1lBZEcsd0JBQXdCO1lBQ3hCLGlCQUFpQjtZQUtaLGdCQUFnQjs7O3FCQVd0QixTQUFTLFNBQUMsbUJBQW1COzs7O0lBQTlCLG9DQUMrQjs7Ozs7SUFHN0Isc0RBQTBEOzs7OztJQUMxRCxpQ0FBOEI7Ozs7O0lBQzlCLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0Q29udHJvbGxlciB9IGZyb20gJy4vbGF5b3V0LWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRXZBZExBeW91dERpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V2ZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSBldmUtbGF5b3V0LWFkLWhvc3Q+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRXZlTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKEV2QWRMQXlvdXREaXJlY3RpdmUpXG4gICAgYWRIb3N0ITogRXZBZExBeW91dERpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBseUN0cmw6IExheW91dENvbnRyb2xsZXIsXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICB0aGlzLmxvYWRDb21wb25lbnQoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgbmdPbkluaXQgKCkge1xuICAgIHRoaXMubHlDdHJsLmxheW91dC53YXRjaCgpLnN1YnNjcmliZSgoKSA9PiB7IHRoaXMubG9hZENvbXBvbmVudCgpOyB9KTtcbiAgfVxuICBsb2FkQ29tcG9uZW50ICgpIHtcbiAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmx5Q3RybC5sYXlvdXQuZ2V0QWN0aXZlKCk7XG4gICAgaWYgKGxheW91dCAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShsYXlvdXQuY29tcG9uZW50KTtcblxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuYWRIb3N0LnZpZXdDb250YWluZXJSZWY7XG4gICAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICAgIHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAoXG4gICAgICAgIG5ldyBFcnJvcignTm8gc2UgZW5jb250cm8gbGF5b3V0cyBwYXJhIGNhcmdhciBwb3IgZGVmZWN0bywgXFxuIHJldmlzZSBsYSBjb25maWd1cmFjaW9uIGVuIHN1IG1vZHVsbyBwcmluY2lwYWwnKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==