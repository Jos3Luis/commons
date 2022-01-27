import { ComponentFactoryResolver, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { LayoutController } from './layout-controller';
import { EvAdLAyoutDirective } from './layout.directive';
export declare class EveLayoutComponent implements AfterViewInit, OnInit {
    private componentFactoryResolver;
    private cdr;
    private lyCtrl;
    adHost: EvAdLAyoutDirective;
    constructor(componentFactoryResolver: ComponentFactoryResolver, cdr: ChangeDetectorRef, lyCtrl: LayoutController);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    loadComponent(): void;
}
