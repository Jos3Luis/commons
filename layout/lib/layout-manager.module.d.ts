import { ModuleWithProviders } from '@angular/core';
import { ILayoutConfig } from './layout.interface';
import { IStorage } from 'everiscore';
import { LayoutController } from './layout-controller';
export { LayoutController } from './layout-controller';
export { CompanyLayout } from './models/company-layout.model';
export { MenuLayout } from './models/menu-layout.model';
export { Layout } from './models/layout.model';
export { ILayoutConfig, ICompanyLayout, IMenuLayout } from './layout.interface';
export declare function _sessionStorage(): IStorage<string, string>;
export declare function _buildLayoutCtrl(config: ILayoutConfig): LayoutController;
export declare function _buildProviderSingOut(config: ILayoutConfig): {};
export declare class EveLayouManager {
    static forRoot(config: ILayoutConfig): ModuleWithProviders;
}
