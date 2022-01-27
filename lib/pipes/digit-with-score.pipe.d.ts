import { PipeTransform } from '@angular/core';
/**
 * @description Pipe para formatear numero con guiones
 * @example <b>1234567890123</b> ------> <b>123-4567890-1-23</b>
 */
export declare class DigitScorePipe implements PipeTransform {
    transform(value: string): string;
}
