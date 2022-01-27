import { ILayoutConfig } from './layout.interface';
import { CoreBrowserStorage } from 'everiscore';
import { Layout } from './models/layout.model';
import { CompanyLayout } from './models/company-layout.model';
import { MenuLayout } from './models/menu-layout.model';
export declare class LayoutController {
    config: ILayoutConfig;
    private sessionStorage;
    private _company;
    private _menu;
    private _layout;
    constructor(config: ILayoutConfig, sessionStorage: CoreBrowserStorage);
    readonly company: CompanyLayout;
    readonly menu: MenuLayout;
    readonly layout: Layout;
}
