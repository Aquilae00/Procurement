import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, EMPTY, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from '../env';
import {Manufacturer} from '../models/manufacturer.model';

@Injectable()
export class AppApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getManufacturers(): Observable<any> {
    return this.http
      .get(`${API_URL}/manufacturers`);
  }

  getManufacturersByName(search_term: string): Observable<any> {
    return this.http
      .get(`${API_URL}/search_manufacturers`,
        {
          params: {
            search_term: search_term
          }
        });
  }

  getManufacturerById(id: string): Observable<any> {
    return this.http
      .get(`${API_URL}/manufacturer_by_id`,
        {
          params: {
            id: id
          }
        });
  }

  getManufacturersFactories(id: string): Observable<any> {
    return this.http
      .get(`${API_URL}/get_manufacturers_factories`,
        {
          params: {
            id: id
          }
        });
  }

  getFactoryById(id: string): Observable<any> {
    return this.http
      .get(`${API_URL}/factory_by_id`,
        {
          params: {
            id: id
          }
        });

  }

  getFactoryMachines(id: string): Observable<any> {
    return this.http
      .get(`${API_URL}/get_factory_machines`,
        {
          params: {
            id: id
          }
        });

  }

}
