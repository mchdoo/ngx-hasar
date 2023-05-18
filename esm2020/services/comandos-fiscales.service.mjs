import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./hasar.service";
export class ComandosFiscalesService {
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
ComandosFiscalesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosFiscalesService, deps: [{ token: i1.HasarProvider }], target: i0.ɵɵFactoryTarget.Injectable });
ComandosFiscalesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosFiscalesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosFiscalesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HasarProvider }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYW5kb3MtZmlzY2FsZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oYXNhci9zcmMvc2VydmljZXMvY29tYW5kb3MtZmlzY2FsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVUsVUFBVSxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7O0FBV25FLE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRXBELHFCQUFxQjtJQUNyQixRQUFRLENBQ04sU0FHc0IsZUFBZTtRQUVyQyxJQUFJLE1BQU0sR0FBRztZQUNYLGNBQWMsRUFBRTtnQkFDZCxpQkFBaUIsRUFBRSxNQUFNO2FBQzFCO1NBQ0YsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFpQjtRQUM1QixJQUFJLE1BQU0sR0FBRztZQUNYLFlBQVksRUFBRTtnQkFDWixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO2dCQUNwQyxZQUFZLEVBQUUsU0FBUztnQkFDdkIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2dCQUM5QixjQUFjLEVBQUUsZUFBZTtnQkFDL0IsbUJBQW1CLEVBQUUsZ0JBQWdCO2dCQUNyQyx1QkFBdUIsRUFBRSxNQUFNO2dCQUMvQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsYUFBYSxFQUFFLGlCQUFpQjtnQkFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtnQkFDeEMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO2dCQUNwQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFB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dUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kZWxvSXRlbSB9IGZyb20gJy4uL21vZGVscy9pdGVtJztcbmltcG9ydCB7IEhhc2FyUHJvdmlkZXIgfSBmcm9tICcuL2hhc2FyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGlwb0NsaWVudGUgfSBmcm9tICcuLi9tb2RlbHMvY2xpZW50ZSc7XG5pbXBvcnQgeyBEb2NEYXRhIH0gZnJvbSAnLi4vbGliL3R5cGVzL2NvbWFuZG9UaXBvcyc7XG5cbmV4cG9ydCB7IE1vZGVsb0l0ZW0gfTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbWFuZG9zRmlzY2FsZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoYXNhclByb3ZpZGVyOiBIYXNhclByb3ZpZGVyKSB7fVxuXG4gIC8qIEFicmUgZG9jdW1lbnRvLiAqL1xuICBhYnJpckRvYyhcbiAgICBjb2RpZ286XG4gICAgICB8ICdUaXF1ZUZhY3R1cmFBJ1xuICAgICAgfCAnVGlxdWVGYWN0dXJhQidcbiAgICAgIHwgJ1RpcXVlRmFjdHVyYUMnID0gJ1RpcXVlRmFjdHVyYUMnXG4gICkge1xuICAgIGxldCBjb25maWcgPSB7XG4gICAgICBBYnJpckRvY3VtZW50bzoge1xuICAgICAgICBDb2RpZ29Db21wcm9iYW50ZTogY29kaWdvLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaGFzYXJQcm92aWRlci5zZW5kRmlzY2FsKGNvbmZpZyk7XG4gIH1cblxuICBpbXByaW1pckl0ZW0ocHJvcHM6IE1vZGVsb0l0ZW0pIHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgSW1wcmltaXJJdGVtOiB7XG4gICAgICAgIERlc2NyaXBjaW9uOiBwcm9wcy5kZXNjcmlwY2lvbixcbiAgICAgICAgQ2FudGlkYWQ6IHByb3BzLmNhbnRpZGFkLFxuICAgICAgICBQcmVjaW9Vbml0YXJpbzogcHJvcHMucHJlY2lvVW5pdGFyaW8sXG4gICAgICAgIENvbmRpY2lvbklWQTogJ0dyYXZhZG8nLFxuICAgICAgICBBbGljdW90YUlWQTogcHJvcHMuYWxpY3VvdGFJVkEsXG4gICAgICAgIE9wZXJhY2lvbk1vbnRvOiAnTW9kb1N1bWFNb250bycsXG4gICAgICAgIFRpcG9JbXB1ZXN0b0ludGVybm86ICdJSVZhcmlhYmxlS0lWQScsXG4gICAgICAgIE1hZ25pdHVkSW1wdWVzdG9JbnRlcm5vOiAnMC4wMCcsXG4gICAgICAgIE1vZG9EaXNwbGF5OiAnRGlzcGxheU5vJyxcbiAgICAgICAgTW9kb0Jhc2VUb3RhbDogJ01vZG9QcmVjaW9Ub3RhbCcsXG4gICAgICAgIFVuaWRhZFJlZmVyZW5jaWE6IHByb3BzLnVuaWRhZFJlZmVyZW5jaWEsXG4gICAgICAgIENvZGlnb1Byb2R1Y3RvOiBwcm9wcy5jb2RpZ29Qcm9kdWN0byxcbiAgICAgICAgQ29kaWdvSW50ZXJubzogcHJvcHMuY29kaWdvSW50ZXJubyxcbiAgICAgICAgVW5pZGFkTWVkaWRhOiBwcm9wcy51bmlkYWRNZWRpZGEsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5oYXNhclByb3ZpZGVyLnNlbmRGaXNjYWwoY29uZmlnKTtcbiAgfVxuXG4gIGltcHJpbWlyVGV4dG9GaXNjYWwodGV4dG9GaXNjYWw6IHN0cmluZywgYXRyaWJ1dG86IHN0cmluZyA9ICdDZW50cmFkbycpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBJbXByaW1pclRleHRvRmlzY2FsOiB7XG4gICAgICAgIEF0cmlidXRvOiBhdHJpYnV0byxcbiAgICAgICAgVGV4dG86IHRleHRvRmlzY2FsLFxuICAgICAgICBNb2RvRGlzcGxheTogJ0Rpc3BsYXlObycsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5oYXNhclByb3ZpZGVyLnNlbmRGaXNjYWwoY29uZmlnKTtcbiAgfVxuXG4gIGNlcnJhckRvYyhcbiAgICB7IGNvcGlhcyB9OiB7IGNvcGlhcz86IG51bWJlciB9ID0ge30sXG4gICAgaGFuZGxlRGF0YTogKGRhdGE6IERvY0RhdGEpID0+IHZvaWQgPSAoKSA9PiB7fVxuICApIHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgQ2VycmFyRG9jdW1lbnRvOiB7XG4gICAgICAgIENvcGlhczogY29waWFzLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaGFzYXJQcm92aWRlci5zZW5kRmlzY2FsKGNvbmZpZywgaGFuZGxlRGF0YSk7XG4gIH1cblxuICBpbXByaW1pclBhZ28oe1xuICAgIGRlc2NyaXBjaW9uLFxuICAgIGltcG9ydGUsXG4gICAgYW51bGFjaW9uLFxuICB9OiB7XG4gICAgZGVzY3JpcGNpb24/OiBzdHJpbmc7XG4gICAgaW1wb3J0ZTogbnVtYmVyO1xuICAgIGFudWxhY2lvbj86IGJvb2xlYW47XG4gIH0pIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBJbXByaW1pclBhZ286IHtcbiAgICAgICAgRGVzY3JpcGNpb246IGRlc2NyaXBjaW9uID8gZGVzY3JpcGNpb24gOiAnU3UgcGFnbycsXG4gICAgICAgIE1vbnRvOiBpbXBvcnRlLFxuICAgICAgICBPcGVyYWNpb246IGFudWxhY2lvbiA9PSB0cnVlID8gJ0FudWxhcicgOiAnUGFnYXInLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaGFzYXJQcm92aWRlci5zZW5kRmlzY2FsKGNvbmZpZyk7XG4gIH1cblxuICBjZXJyYXJKb3JuYWRhKHJlcG9ydGU6ICdSZXBvcnRlWCcgfCAnUmVwb3J0ZVonID0gJ1JlcG9ydGVaJykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIENlcnJhckpvcm5hZGFGaXNjYWw6IHtcbiAgICAgICAgUmVwb3J0ZTogcmVwb3J0ZSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmhhc2FyUHJvdmlkZXIuc2VuZEZpc2NhbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRvcyBDbGllbnRlJywgZGF0YSk7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIERhdG9zIENsaWVudGUnLCBlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGFicmlyQ2Fqb25EaW5lcm8oKSB7XG4gICAgdGhpcy5oYXNhclByb3ZpZGVyLnNlbmRGaXNjYWwoeyBBYnJpckNham9uRGluZXJvOiB7fSB9LCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0FicmlyQ2Fqb24nLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhcmdhckRhdG9zQ2xpZW50ZShjbGllbnRlOiBUaXBvQ2xpZW50ZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIENhcmdhckRhdG9zQ2xpZW50ZToge1xuICAgICAgICBSYXpvblNvY2lhbDogY2xpZW50ZS5yYXpvblNvY2lhbCxcbiAgICAgICAgTnVtZXJvRG9jdW1lbnRvOiBjbGllbnRlLm51bWVyb0RvY3VtZW50byxcbiAgICAgICAgUmVzcG9uc2FiaWxpZGFkSVZBOiBjbGllbnRlLnJlc3BvbnNhYmlsaWRhZElWQSxcbiAgICAgICAgVGlwb0RvY3VtZW50bzogY2xpZW50ZS50aXBvRG9jdW1lbnRvLFxuICAgICAgICBEb21pY2lsaW86IGNsaWVudGUuZG9taWNpbGlvLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coY29uZmlnKTtcblxuICAgIHJldHVybiB0aGlzLmhhc2FyUHJvdmlkZXIuc2VuZEZpc2NhbChjb25maWcpO1xuICB9XG59XG4iXX0=