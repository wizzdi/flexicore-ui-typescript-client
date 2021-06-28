import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Configuration } from "../configuration";
import { FormCreate } from "../model/formCreate";
import { Observable } from "rxjs/Observable";
import { FormFiltering } from "../model/formFiltering";
import { FormUpdate } from "../model/formUpdate";
import { FormCopy } from "../model/formCopy";
export declare class FormService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    createForm(body?: FormCreate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    copyForm(body?: FormCopy, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    getAllForms(body?: FormFiltering, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    updateForm(body?: FormUpdate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
}
