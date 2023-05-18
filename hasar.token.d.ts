import { InjectionToken } from "@angular/core";
export type HasarConfig = {
    URL: string;
    timeout: number;
};
export declare const HASAR_CONFIG: InjectionToken<HasarConfig>;
