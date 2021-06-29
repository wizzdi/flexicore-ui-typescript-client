"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiFieldsService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const variables_1 = require("../variables");
const configuration_1 = require("../configuration");
const flexicore_client_1 = require("@flexicore/flexicore-client");
let UiFieldsService = class UiFieldsService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = '/FlexiCore';
        this.defaultHeaders = new http_1.HttpHeaders();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    linkPresetToRole(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/linkPresetToRole`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    getPreferredPresets(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/getPreferredPresets`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    getAllPresetToRole(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/getAllPresetToRole`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    getAllPresetToTenant(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/getAllPresetToTenant`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    getAllPresetToUser(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/getAllPresetToUser`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    linkPresetToTenant(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/linkPresetToTenant`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    linkPresetToUser(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/linkPresetToUser`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    listAllUiFields(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/UiFields/listAllUiFields`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    updatePresetToRole(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/plugins/UiFields/updatePresetToRole`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    updatePresetToTenant(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/plugins/UiFields/updatePresetToTenant`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    updatePresetToUser(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/plugins/UiFields/updatePresetToUser`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
};
UiFieldsService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __param(1, core_1.Inject(variables_1.BASE_PATH)),
    __param(2, core_1.Optional())
], UiFieldsService);
exports.UiFieldsService = UiFieldsService;
//# sourceMappingURL=uiFields.service.js.map