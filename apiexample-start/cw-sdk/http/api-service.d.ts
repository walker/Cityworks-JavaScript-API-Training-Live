import * as Core from '../bundles/core';
import { AuthenticationServiceTypes } from '../api/services/general/AuthenticationService';
import AbortablePromise = Core.PromiseTypes.AbortablePromise;
export interface IApiService {
    getToken(): string;
    login(userName: string, password: string): AbortablePromise<AuthenticationServiceTypes.Responses.Authenticate>;
    call(data: any, url: string): AbortablePromise<any>;
}
export declare class ApiService implements IApiService {
    private _token;
    private _baseUrl;
    constructor(baseUrl: string, token?: string);
    getToken(): string;
    login(userName: string, password: string): AbortablePromise<AuthenticationServiceTypes.Responses.Authenticate>;
    call(data: any, url: string): AbortablePromise<any>;
}
