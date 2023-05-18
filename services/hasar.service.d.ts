import { HttpClient } from '@angular/common/http';
import { HasarConfig } from '../hasar.token';
import * as i0 from "@angular/core";
export declare class HasarProvider {
    private http;
    private hasarUrl;
    constructor(http: HttpClient, hasarUrl: HasarConfig);
    private send;
    sendComando(comando: object, handleData: (data: any) => void, handleError: (error: Error) => void): void;
    sendFiscal(comando: object, handleData?: (data: any) => void, handleError?: (error: Error) => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HasarProvider, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HasarProvider>;
}
