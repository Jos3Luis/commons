import { IAuthrules } from 'everiscore';
export declare class RulesDTO {
    private rules;
    constructor(rules: IAuthrules);
    prepare(): IAuthrules;
    private setIterceptor;
    private setTypeToken;
    private setHeaderName;
}
