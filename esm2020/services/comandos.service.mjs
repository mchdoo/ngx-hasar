import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./hasar.service";
export class ComandosService {
    constructor(hasarProvider) {
        this.hasarProvider = hasarProvider;
    }
    getEstado(handleData, handleError) {
        return this.hasarProvider.sendComando({ Estado: {} }, handleData, handleError);
    }
}
ComandosService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosService, deps: [{ token: i1.HasarProvider }], target: i0.ɵɵFactoryTarget.Injectable });
ComandosService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ComandosService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HasarProvider }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYW5kb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oYXNhci9zcmMvc2VydmljZXMvY29tYW5kb3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0MsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDO0lBRXBELFNBQVMsQ0FDUCxVQUFzQyxFQUN0QyxXQUFtQztRQUVuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUNuQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFDZCxVQUFVLEVBQ1YsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDOzs0R0FaVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYXNhclByb3ZpZGVyIH0gZnJvbSBcIi4vaGFzYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgVGlwb0VzdGFkbyB9IGZyb20gXCIuLi9saWIvdHlwZXMvY29tYW5kb1RpcG9zXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIENvbWFuZG9zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGFzYXJQcm92aWRlcjogSGFzYXJQcm92aWRlcikge31cblxuICBnZXRFc3RhZG8oXG4gICAgaGFuZGxlRGF0YTogKGRhdGE6IFRpcG9Fc3RhZG8pID0+IHZvaWQsXG4gICAgaGFuZGxlRXJyb3I6IChlcnJvcjogRXJyb3IpID0+IHZvaWRcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzYXJQcm92aWRlci5zZW5kQ29tYW5kbyhcbiAgICAgIHsgRXN0YWRvOiB7fSB9LFxuICAgICAgaGFuZGxlRGF0YSxcbiAgICAgIGhhbmRsZUVycm9yXG4gICAgKTtcbiAgfVxufVxuIl19