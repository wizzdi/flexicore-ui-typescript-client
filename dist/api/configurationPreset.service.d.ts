import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CreateConfigurationPreset } from '../model/createConfigurationPreset';
import { ConfigurationPreset } from '../model/configurationPreset';
import { UpdateConfigurationPreset } from '../model/updateConfigurationPreset';
import { Configuration } from '../configuration';
import { ConfigurationPresetFiltering } from '../model/configurationPresetFiltering';
import { PaginationResponse } from '@flexicore/flexicore-client';
export declare class ConfigurationPresetsService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    createConfigurationPreset(body?: CreateConfigurationPreset, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ConfigurationPreset>;
    createConfigurationPreset(body?: CreateConfigurationPreset, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigurationPreset>>;
    createConfigurationPreset(body?: CreateConfigurationPreset, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigurationPreset>>;
    getAllConfigurationPresets(body?: ConfigurationPresetFiltering, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<ConfigurationPreset>>;
    getAllConfigurationPresets(body?: ConfigurationPresetFiltering, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<ConfigurationPreset>>>;
    getAllConfigurationPresets(body?: ConfigurationPresetFiltering, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<ConfigurationPreset>>>;
    updateConfigurationPreset(body?: UpdateConfigurationPreset, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ConfigurationPreset>;
    updateConfigurationPreset(body?: UpdateConfigurationPreset, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigurationPreset>>;
    updateConfigurationPreset(body?: UpdateConfigurationPreset, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigurationPreset>>;
}
