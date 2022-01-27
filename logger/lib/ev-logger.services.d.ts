import { InjectionToken } from '@angular/core';
import { Logger, ILoggerBase } from 'everiscore';
export declare const LoggerConfig: InjectionToken<ILoggerBase>;
export declare class EvLogger extends Logger {
    constructor(_config: ILoggerBase);
}
