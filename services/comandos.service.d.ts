import { HasarProvider } from "./hasar.service";
import { TipoEstado } from "../lib/types/comandoTipos";
import * as i0 from "@angular/core";
export declare class ComandosService {
    private hasarProvider;
    constructor(hasarProvider: HasarProvider);
    getEstado(handleData: (data: TipoEstado) => void, handleError: (error: Error) => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComandosService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ComandosService>;
}
