export type TipoCliente = {
    razonSocial?: string;
    numeroDocumento?: string;
    responsabilidadIVA: "ResponsableInscripto" | "ResponsableExento" | "NoResponsable" | "ConsumidorFinal" | "NoCategorizado" | "Monotributo" | "MonotributoSocial" | "Eventual" | "EventualSocial";
    tipoDocumento?: "TipoCUIT" | "TipoCUIL" | "TipoLe" | "TipoLC" | "TipoDNI" | "TipoPasaporte" | "TipoCI" | "TipoNinguno";
    domicilio?: string;
    datosAdicionales1?: string;
    datosAdicionales2?: string;
    datosAdicionales3?: string;
};
