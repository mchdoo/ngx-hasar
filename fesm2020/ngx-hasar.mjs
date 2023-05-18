import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

const HASAR_CONFIG = new InjectionToken('127.0.0.1');

class HasarProvider {
    constructor(http, hasarUrl // private hasarTokenService: HasarTokenService
    ) {
        this.http = http;
        this.hasarUrl = hasarUrl;
    }
    send(comando, comandoType, handleData, handleError, timeOut = 10000) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Basic ' + btoa(':9999'));
        this.http
            .post(this.hasarUrl.URL + '/' + comandoType + '.json', JSON.stringify(comando), {
            headers,
            responseType: 'json',
        })
            .pipe(timeout(this.hasarUrl.timeout))
            .subscribe((data) => {
            handleData(data);
        }, (error) => {
            handleError(error);
        });
    }
    sendComando(comando, handleData, handleError) {
        return this.send(comando, 'comandos', handleData, handleError);
    }
    sendFiscal(comando, handleData = (data) => {
        console.log('Mensaje FISCAL', data);
    }, handleError = (error) => {
        console.error('ERROR FISCAL:', error);
    }) {
        return this.send(comando, 'fiscal', handleData, handleError);
    }
}
HasarProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HasarProvider, deps: [{ token: i1.HttpClient }, { token: HASAR_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
HasarProvider.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HasarProvider, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HasarProvider, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HASAR_CONFIG]
                }] }]; } });

class ComandosFiscalesService {
    constructor(hasarProvider) {
        this.hasarProvider = hasarProvider;
    }
    /* Abre documento. */
    abrirDoc(codigo = 'TiqueFacturaC') {
        let config = {
            AbrirDocumento: {
                CodigoComprobante: codigo,
            },
        };
        return this.hasarProvider.sendFiscal(config);
    }
    imprimirItem(props) {
        let config = {
            ImprimirItem: {
                Descripcion: props.descripcion,
                Cantidad: props.cantidad,
                PrecioUnitario: props.precioUnitario,
                CondicionIVA: 'Gravado',
                AlicuotaIVA: props.alicuotaIVA,
                OperacionMonto: 'ModoSumaMonto',
                TipoImpuestoInterno: 'IIVariableKIVA',
                MagnitudImpuestoInterno: '0.00',
                ModoDisplay: 'DisplayNo',
                ModoBaseTotal: 'ModoPrecioTotal',
                UnidadReferencia: props.unidadReferencia,
                CodigoProducto: props.codigoProducto,
                CodigoInterno: props.codigoInterno,
                UnidadMedida: props.unidadMedida,
            },
        };
        return this.hasarProvider.sendFiscal(config);
    }
    imprimirTextoFiscal(textoFiscal, atributo = 'Centrado') {
        const config = {
            ImprimirTextoFiscal: {
                Atributo: atributo,
                Texto: textoFiscal,
                ModoDisplay: 'DisplayNo',
            },
        };
        return this.hasarProvider.sendFiscal(config);
    }
    cerrarDoc({ copias } = {}, handleData = () => { }) {
        let config = {
            CerrarDocumento: {
                Copias: copias,
            },
        };
        return this.hasarProvider.sendFiscal(config, handleData);
    }
    imprimirPago({ descripcion, importe, anulacion, }) {
        const config = {
            ImprimirPago: {
                Descripcion: descripcion ? descripcion : 'Su pago',
                Monto: importe,
                Operacion: anulacion == true ? 'Anular' : 'Pagar',
            },
        };
        return this.hasarProvider.sendFiscal(config);
    }
    cerrarJornada(reporte = 'ReporteZ') {
        const config = {
            CerrarJornadaFiscal: {
                Reporte: reporte,
            },
        };
        return this.hasarProvider.sendFiscal(config, (data) => {
            console.log('Datos Cliente', data);
        }, (error) => {
            console.error('Error Datos Cliente', error);
        });
    }
    abrirCajonDinero() {
        this.hasarProvider.sendFiscal({ AbrirCajonDinero: {} }, (data) => {
            console.log('AbrirCajon', data);
        });
    }
    cargarDatosCliente(cliente) {
        const config = {
            CargarDatosCliente: {
                RazonSocial: cliente.razonSocial,
                NumeroDocumento: cliente.numeroDocumento,
                ResponsabilidadIVA: cliente.responsabilidadIVA,
                TipoDocumento: cliente.tipoDocumento,
                Domicilio: cliente.domicilio,
            },
        };
        console.log(config);
        return this.hasarProvider.sendFiscal(config);
    }
}
ComandosFiscalesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosFiscalesService, deps: [{ token: HasarProvider }], target: i0.ɵɵFactoryTarget.Injectable });
ComandosFiscalesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosFiscalesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosFiscalesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: HasarProvider }]; } });

class ComandosService {
    constructor(hasarProvider) {
        this.hasarProvider = hasarProvider;
    }
    getEstado(handleData, handleError) {
        return this.hasarProvider.sendComando({ Estado: {} }, handleData, handleError);
    }
}
ComandosService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosService, deps: [{ token: HasarProvider }], target: i0.ɵɵFactoryTarget.Injectable });
ComandosService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: HasarProvider }]; } });

/*
 * Public API Surface of ngx-hasar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComandosFiscalesService, ComandosService, HASAR_CONFIG, HasarProvider };
//# sourceMappingURL=ngx-hasar.mjs.map
