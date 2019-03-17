define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var CaseService = (function () {
        function CaseService(service) {
            this._service = service;
        }
        CaseService.prototype.Create = function (request) {
            return this._service.call(request, 'PLL/Case/Create');
        };
        CaseService.prototype.CreateChild = function (request) {
            return this._service.call(request, 'PLL/Case/CreateChild');
        };
        return CaseService;
    }());
    exports.CaseService = CaseService;
});