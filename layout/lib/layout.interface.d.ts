import { Provider, InjectionToken, Type } from '@angular/core';
export interface IMenuLayout {
    name: string;
    path: string;
    icon?: string;
    image?: string;
    active?: boolean;
    [key: string]: string | boolean | undefined;
}
export interface ICompanyLayout {
    logo?: string | undefined;
    name?: string | undefined;
    [key: string]: string | undefined;
}
export interface ILayoutConfig {
    menu?: IMenuLayout[] | undefined;
    company?: ICompanyLayout | undefined;
    showDocMenu?: boolean | undefined;
    singOutAction?: Provider | undefined;
    layouts: ILayoutsComponent[];
    [key: string]: Array<IMenuLayout> | ICompanyLayout | boolean | undefined | Provider | object | ILayoutsComponent[];
}
export interface ILayoutsComponent {
    name: string;
    component: Type<any>;
    default: boolean;
}
export declare const ConfigLayout: InjectionToken<ILayoutConfig>;
