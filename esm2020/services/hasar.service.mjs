import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { HASAR_CONFIG } from '../hasar.token';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HasarProvider {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oYXNhci9zcmMvc2VydmljZXMvaGFzYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzNELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQ1UsSUFBZ0IsRUFDTSxRQUFxQixDQUFDLCtDQUErQzs7UUFEM0YsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNNLGFBQVEsR0FBUixRQUFRLENBQWE7SUFDbEQsQ0FBQztJQUVJLElBQUksQ0FDVixPQUFlLEVBQ2YsV0FBbUIsRUFDbkIsVUFBa0MsRUFDbEMsV0FBbUMsRUFDbkMsVUFBa0IsS0FBSztRQUV2QixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUM5QixHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxJQUFJO2FBQ04sSUFBSSxDQUNILElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsT0FBTyxFQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUN2QjtZQUNFLE9BQU87WUFDUCxZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUNGO2FBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDLFNBQVMsQ0FDUixDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1AsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ1IsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVcsQ0FDVCxPQUFlLEVBQ2YsVUFBK0IsRUFDL0IsV0FBbUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxVQUFVLENBQ1IsT0FBZSxFQUNmLGFBQWtDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQ0QsY0FBc0MsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OzBHQXZEVSxhQUFhLDRDQUdkLFlBQVk7OEdBSFgsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUlJLE1BQU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSEFTQVJfQ09ORklHLCBIYXNhckNvbmZpZyB9IGZyb20gJy4uL2hhc2FyLnRva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEhhc2FyUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdChIQVNBUl9DT05GSUcpIHByaXZhdGUgaGFzYXJVcmw6IEhhc2FyQ29uZmlnIC8vIHByaXZhdGUgaGFzYXJUb2tlblNlcnZpY2U6IEhhc2FyVG9rZW5TZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIHNlbmQoXG4gICAgY29tYW5kbzogb2JqZWN0LFxuICAgIGNvbWFuZG9UeXBlOiBzdHJpbmcsXG4gICAgaGFuZGxlRGF0YTogKGRhdGE6IE9iamVjdCkgPT4gdm9pZCxcbiAgICBoYW5kbGVFcnJvcjogKGVycm9yOiBFcnJvcikgPT4gdm9pZCxcbiAgICB0aW1lT3V0OiBudW1iZXIgPSAxMDAwMFxuICApIHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EoJzo5OTk5JykpO1xuXG4gICAgdGhpcy5odHRwXG4gICAgICAucG9zdChcbiAgICAgICAgdGhpcy5oYXNhclVybC5VUkwgKyAnLycgKyBjb21hbmRvVHlwZSArICcuanNvbicsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGNvbWFuZG8pLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUodGltZW91dCh0aGlzLmhhc2FyVXJsLnRpbWVvdXQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICBoYW5kbGVEYXRhKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBzZW5kQ29tYW5kbyhcbiAgICBjb21hbmRvOiBvYmplY3QsXG4gICAgaGFuZGxlRGF0YTogKGRhdGE6IGFueSkgPT4gdm9pZCxcbiAgICBoYW5kbGVFcnJvcjogKGVycm9yOiBFcnJvcikgPT4gdm9pZFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5zZW5kKGNvbWFuZG8sICdjb21hbmRvcycsIGhhbmRsZURhdGEsIGhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHNlbmRGaXNjYWwoXG4gICAgY29tYW5kbzogb2JqZWN0LFxuICAgIGhhbmRsZURhdGE6IChkYXRhOiBhbnkpID0+IHZvaWQgPSAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ01lbnNhamUgRklTQ0FMJywgZGF0YSk7XG4gICAgfSxcbiAgICBoYW5kbGVFcnJvcjogKGVycm9yOiBFcnJvcikgPT4gdm9pZCA9IChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRVJST1IgRklTQ0FMOicsIGVycm9yKTtcbiAgICB9XG4gICkge1xuICAgIHJldHVybiB0aGlzLnNlbmQoY29tYW5kbywgJ2Zpc2NhbCcsIGhhbmRsZURhdGEsIGhhbmRsZUVycm9yKTtcbiAgfVxufVxuIl19