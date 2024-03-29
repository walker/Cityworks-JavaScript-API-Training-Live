define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var TasksService = /** @class */ (function () {
        function TasksService(service) {
            this._service = service;
        }
        TasksService.prototype.Add = function (request) {
            return this._service.call(request, 'Ams/Tasks/Add');
        };
        TasksService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/Tasks/ById');
        };
        TasksService.prototype.ByWorkOrder = function (request) {
            return this._service.call(request, 'Ams/Tasks/ByWorkOrder');
        };
        TasksService.prototype.ByWorkOrderTemplate = function (request) {
            return this._service.call(request, 'Ams/Tasks/ByWorkOrderTemplate');
        };
        TasksService.prototype.Delete = function (request) {
            return this._service.call(request, 'Ams/Tasks/Delete');
        };
        TasksService.prototype.Keywords = function (request) {
            return this._service.call(request, 'Ams/Tasks/Keywords');
        };
        TasksService.prototype.Statuses = function (request) {
            return this._service.call(request, 'Ams/Tasks/Statuses');
        };
        TasksService.prototype.TaskCodes = function (request) {
            return this._service.call(request, 'Ams/Tasks/TaskCodes');
        };
        TasksService.prototype.TaskNodes = function (request) {
            return this._service.call(request, 'Ams/Tasks/TaskNodes');
        };
        TasksService.prototype.Template = function (request) {
            return this._service.call(request, 'Ams/Tasks/Template');
        };
        TasksService.prototype.Templates = function (request) {
            return this._service.call(request, 'Ams/Tasks/Templates');
        };
        TasksService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/Tasks/Update');
        };
        return TasksService;
    }());
    exports.TasksService = TasksService;
});
