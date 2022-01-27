/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
/**
 * \@description Pipe para formatear numero con guiones
 * \@example <b>1234567890123</b> ------> <b>123-4567890-1-23</b>
 */
export class DigitScorePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value) {
            /** @type {?} */
            let string = value.replace(/\D/g, '');
            if (string.length === 0) {
                string = '';
            }
            else if (string.length <= 3) {
                string = string.replace(/^(\d{0,3})/, '$1');
            }
            else if (string.length <= 10) {
                string = string.replace(/^(\d{0,3})(\d{0,7})/, '$1-$2');
            }
            else if (string.length <= 11) {
                string = string.replace(/^(\d{0,3})(\d{0,7})(\d{0,1})/, '$1-$2-$3');
            }
            else {
                string = string.replace(/^(\d{0,3})(\d{0,7})(\d{0,1})(\d{0,2})+/, '$1-$2-$3-$4');
            }
            return string;
        }
        return value;
    }
}
DigitScorePipe.decorators = [
    { type: Pipe, args: [{ name: 'digit-score' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXQtd2l0aC1zY29yZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGV2ZXJpcy9jb21tb25zLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2RpZ2l0LXdpdGgtc2NvcmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3BELE1BQU07Ozs7O0lBRUosU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxLQUFLLEVBQUU7O2dCQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDckMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNiO2lCQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM3QztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN6RDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNsRjtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXBCRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBQaXBlIHBhcmEgZm9ybWF0ZWFyIG51bWVybyBjb24gZ3Vpb25lc1xuICogQGV4YW1wbGUgPGI+MTIzNDU2Nzg5MDEyMzwvYj4gLS0tLS0tPiA8Yj4xMjMtNDU2Nzg5MC0xLTIzPC9iPlxuICovXG5AUGlwZSh7IG5hbWU6ICdkaWdpdC1zY29yZScgfSlcbmV4cG9ydCBjbGFzcyBEaWdpdFNjb3JlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBzdHJpbmcgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgaWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc3RyaW5nID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKHN0cmluZy5sZW5ndGggPD0gMykge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXihcXGR7MCwzfSkvLCAnJDEnKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyaW5nLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXihcXGR7MCwzfSkoXFxkezAsN30pLywgJyQxLSQyJyk7XG4gICAgICB9IGVsc2UgaWYgKHN0cmluZy5sZW5ndGggPD0gMTEpIHtcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL14oXFxkezAsM30pKFxcZHswLDd9KShcXGR7MCwxfSkvLCAnJDEtJDItJDMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9eKFxcZHswLDN9KShcXGR7MCw3fSkoXFxkezAsMX0pKFxcZHswLDJ9KSsvLCAnJDEtJDItJDMtJDQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19