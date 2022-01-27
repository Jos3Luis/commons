import { CoreBrowserStorage } from 'everiscore';
import { Observable } from 'rxjs';
import { ILayoutsComponent } from '../layout.interface';
export declare class Layout {
    private layouts;
    private sessionStorage;
    private state;
    private $state;
    constructor(layouts: ILayoutsComponent[], sessionStorage: CoreBrowserStorage);
    getActive(): any;
    getItems(): ILayoutsComponent[];
    watch(): Observable<ILayoutsComponent>;
    changeLayout(name: string): void;
}
