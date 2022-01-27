import { ModuleWithProviders } from '@angular/core';
import { ILoggerBase } from 'everiscore';
export declare function _buildLoggerCtrl(value: ILoggerBase): ILoggerBase;
export declare class EvLoggerModule {
    static forRoot(config: ILoggerBase | null | undefined): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
