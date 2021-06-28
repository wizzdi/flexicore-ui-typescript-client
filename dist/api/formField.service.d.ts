import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Configuration } from "../configuration";
import { FormFieldCreate } from "../model/formFieldCreate";
import { Observable } from "rxjs/Observable";
import { FormFieldFiltering } from "../model/formFieldFiltering";
import { FormFieldUpdate } from "../model/formFieldUpdate";
export declare class FormFieldService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    createFormField(body?: FormFieldCreate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    getAllFormFields(body?: FormFieldFiltering, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    updateFormField(body?: FormFieldUpdate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
}
