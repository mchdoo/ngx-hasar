export interface TipoEstado {
    Estado: Estado;
}
export interface DocData {
    CerrarDocumento: {
        Estado: {
            Impresora: [];
            Fiscal: [];
        };
        NumeroComprobante: number;
        CantidadDePaginas: number;
        IndiceAuditoria: number;
    };
}
interface Estado {
    Ciclo: string;
    MemoriaFiscal: MemoriaFiscal;
    Parser: string;
    OrdenUltimoDocumento: string;
    UltimoDocumentoAbierto: boolean;
    Impresora: Impresora[];
    Auditoria: Auditoria;
    Fecha: string;
    Hora: string;
}
interface Auditoria {
    Llena: boolean;
    CasiLlena: boolean;
    Jornadas: Jornadas;
}
interface Jornadas {
    Desde: number;
    Hasta: number;
}
interface Impresora {
    className: string;
    Impresora: string;
    TipoEstacion: string;
    SinPapel: boolean;
    PocoPapel: boolean;
    FueraLinea: boolean;
    TapaAbierta: boolean;
    ErrorMecanico: boolean;
    Cajon: string;
}
interface MemoriaFiscal {
    Baja: boolean;
    Llena: boolean;
    CasiLlena: boolean;
    RegistrosDisponibles: number;
    JornadaActual: number;
    FechaJornada: string;
    DigestosGrabados: number;
    DigestosDisponibles: number;
}
export {};
