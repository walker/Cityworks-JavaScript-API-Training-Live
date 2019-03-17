define(["require", "exports", "../../../http/api-service"], function (require, exports, api_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_service_1);
    var ServiceRequestService = (function () {
        function ServiceRequestService(service) {
            this._service = service;
        }
        ServiceRequestService.prototype.AddComments = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/AddComments');
        };
        ServiceRequestService.prototype.AllStreetCode = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/AllStreetCode');
        };
        ServiceRequestService.prototype.ById = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/ById');
        };
        ServiceRequestService.prototype.ByIds = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/ByIds');
        };
        ServiceRequestService.prototype.ByIncidentAndEmail = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/ByIncidentAndEmail');
        };
        ServiceRequestService.prototype.ByOtherSystemId = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/ByOtherSystemId');
        };
        ServiceRequestService.prototype.Cancel = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Cancel');
        };
        ServiceRequestService.prototype.Close = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Close');
        };
        ServiceRequestService.prototype.Comments = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Comments');
        };
        ServiceRequestService.prototype.CommentsByRequestIds = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/CommentsByRequestIds');
        };
        ServiceRequestService.prototype.Create = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Create');
        };
        ServiceRequestService.prototype.CreateSearchDefinition = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/CreateSearchDefinition');
        };
        ServiceRequestService.prototype.CustomFieldCategories = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/CustomFieldCategories');
        };
        ServiceRequestService.prototype.CustomFields = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/CustomFields');
        };
        ServiceRequestService.prototype.LinkCases = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/LinkCases');
        };
        ServiceRequestService.prototype.LinkInspections = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/LinkInspections');
        };
        ServiceRequestService.prototype.LinkWorkOrders = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/LinkWorkOrders');
        };
        ServiceRequestService.prototype.ProblemLeafByOtherSysCodeDescs = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafByOtherSysCodeDescs');
        };
        ServiceRequestService.prototype.ProblemLeafBySid = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/ProblemLeafBySid');
        };
        ServiceRequestService.prototype.ProblemNodes = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/ProblemNodes');
        };
        ServiceRequestService.prototype.Problems = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Problems');
        };
        ServiceRequestService.prototype.QA = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/QA');
        };
        ServiceRequestService.prototype.RequestInspections = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/RequestInspections');
        };
        ServiceRequestService.prototype.RequestWorkOrders = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/RequestWorkOrders');
        };
        ServiceRequestService.prototype.Search = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Search');
        };
        ServiceRequestService.prototype.SearchObject = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/SearchObject');
        };
        ServiceRequestService.prototype.Statuses = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Statuses');
        };
        ServiceRequestService.prototype.TemplateCustomFields = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/TemplateCustomFields');
        };
        ServiceRequestService.prototype.UnlinkInspections = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/UnlinkInspections');
        };
        ServiceRequestService.prototype.UnlinkWorkOrders = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/UnlinkWorkOrders');
        };
        ServiceRequestService.prototype.Update = function (request) {
            return this._service.call(request, 'Ams/ServiceRequest/Update');
        };
        return ServiceRequestService;
    }());
    exports.ServiceRequestService = ServiceRequestService;
});
