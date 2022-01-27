import { ModuleWithProviders } from '@angular/core';
import { IStorage } from 'everiscore';
export { EvLocalStorage } from './storage/local-storage.services';
export { EvSessionStorage } from './storage/session-storage.services';
export { EvMemoryStorage } from './storage/memory-storage.services';
export declare function _localStorage(): IStorage<string, string>;
export declare function _sessionStorage(): IStorage<string, string>;
export declare function _memoryStorage(): IStorage<string, string>;
export declare class ServicesModule {
    static forRoot(): ModuleWithProviders;
}
