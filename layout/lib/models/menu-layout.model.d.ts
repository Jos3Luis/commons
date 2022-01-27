import { IMenuLayout } from '../layout.interface';
import { CoreBrowserStorage } from 'everiscore';
export declare class MenuLayout {
    private menu;
    private sessionStorage;
    constructor(menu: IMenuLayout[], sessionStorage: CoreBrowserStorage);
    addItems(items: IMenuLayout[]): void;
    readonly items: IMenuLayout[];
}
