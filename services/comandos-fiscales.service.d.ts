import { ModeloItem } from '../models/item';
import { HasarProvider } from './hasar.service';
import { TipoCliente } from '../models/cliente';
import { DocData } from '../lib/types/comandoTipos';
import * as i0 from "@angular/core";
export { ModeloItem };
export declare class ComandosFiscalesService {
    private hasarProvider;
    constructor(hasarProvider: HasarProvider);
    abrirDoc(codigo?: 'TiqueFacturaA' | 'TiqueFacturaB' | 'TiqueFacturaC'): void;
    imprimirItem(props: ModeloItem): void;
    imprimirTextoFiscal(textoFiscal: string, atributo?: string): void;
    cerrarDoc({ copias }?: {
        copias?: number;
    }, handleData?: (data: DocData) => void): void;
    imprimirPago({ descripcion, importe, anulacion, }: {
        descripcion?: string;
        importe: number;
        anulacion?: boolean;
    }): void;
    cerrarJornada(reporte?: 'ReporteX' | 'ReporteZ'): void;
    abrirCajonDinero(): void;
    cargarDatosCliente(cliente: TipoCliente): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComandosFiscalesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ComandosFiscalesService>;
}
