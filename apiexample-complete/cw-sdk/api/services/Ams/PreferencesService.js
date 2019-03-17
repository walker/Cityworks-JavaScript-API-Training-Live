define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var PreferencesService = (function () {
        function PreferencesService(service) {
            this._service = service;
        }
        PreferencesService.prototype.Global = function (request) {
            return this._service.call(request, 'Ams/Preferences/Global');
        };
        PreferencesService.prototype.User = function (request) {
            return this._service.call(request, 'Ams/Preferences/User');
        };
        PreferencesService.prototype.UserSave = function (request) {
            return this._service.call(request, 'Ams/Preferences/UserSave');
        };
        return PreferencesService;
    }());
    exports.PreferencesService = PreferencesService;
});
