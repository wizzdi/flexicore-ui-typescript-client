import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Configuration } from "../configuration";
import { Observable } from "rxjs/Observable";
import { PresetToPresetCreate, PresetToPresetFiltering, PresetToPresetUpdate } from "../model/models";
export declare class PresetToPresetService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    getAllPresetToPresets(body?: PresetToPresetFiltering, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    createPresetToPresets(body?: PresetToPresetCreate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
    updatePresetToPresets(body?: PresetToPresetUpdate, authenticationKey?: string, observe?: any, reportProgress?: boolean): Observable<any>;
}
