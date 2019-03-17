import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace SecurityServiceTypes { 
    export namespace Requests {
        export interface Inspection extends ServiceTypes.CoreRequestBase {
            InspectionId: number;
        }
        export interface Inspections extends ServiceTypes.CoreRequestBase {
            InspectionIds: number[];
        }
        export interface InspectionTemplate extends ServiceTypes.CoreRequestBase {
            InspTemplateId: number;
        }
        export interface InspectionTemplates extends ServiceTypes.CoreRequestBase {
            InspTemplateIds: number[];
        }
        export interface Problem extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface Problems extends ServiceTypes.CoreRequestBase {
            ProblemSids: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            EmployeeSid?: number;
        }
        export interface ServiceRequest extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface ServiceRequests extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface WorkOrder extends ServiceTypes.CoreRequestBase {
            WorkOrderId: string;
        }
        export interface WorkOrders extends ServiceTypes.CoreRequestBase {
            WorkOrderIds: string[];
        }
        export interface WorkOrderTemplate extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            WOTemplateId: string;
        }
    }
    export namespace Responses {
        export interface Inspection extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionSecurity> {}
        export interface Inspections extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionSecurity[]> {}
        export interface InspectionTemplate extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTemplateSecurity> {}
        export interface InspectionTemplates extends ServiceTypes.CoreResponseBase_<CoreTypes.InspectionTemplateSecurity[]> {}
        export interface Problem extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemSecurity> {}
        export interface Problems extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemSecurity[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchSecurity> {}
        export interface ServiceRequest extends ServiceTypes.CoreResponseBase_<CoreTypes.ServiceRequestSecurity> {}
        export interface ServiceRequests extends ServiceTypes.CoreResponseBase_<CoreTypes.ServiceRequestSecurity[]> {}
        export interface WorkOrder extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderSecurity> {}
        export interface WorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderSecurity[]> {}
        export interface WorkOrderTemplate extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderTemplateSecurity> {}
    }
    export interface ISecurityService {
        Inspection?: (request: Requests.Inspection) => AbortablePromise<Responses.Inspection>;
        Inspections?: (request: Requests.Inspections) => AbortablePromise<Responses.Inspections>;
        InspectionTemplate?: (request: Requests.InspectionTemplate) => AbortablePromise<Responses.InspectionTemplate>;
        InspectionTemplates?: (request: Requests.InspectionTemplates) => AbortablePromise<Responses.InspectionTemplates>;
        Problem?: (request: Requests.Problem) => AbortablePromise<Responses.Problem>;
        Problems?: (request: Requests.Problems) => AbortablePromise<Responses.Problems>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        ServiceRequest?: (request: Requests.ServiceRequest) => AbortablePromise<Responses.ServiceRequest>;
        ServiceRequests?: (request: Requests.ServiceRequests) => AbortablePromise<Responses.ServiceRequests>;
        WorkOrder?: (request: Requests.WorkOrder) => AbortablePromise<Responses.WorkOrder>;
        WorkOrders?: (request: Requests.WorkOrders) => AbortablePromise<Responses.WorkOrders>;
        WorkOrderTemplate?: (request: Requests.WorkOrderTemplate) => AbortablePromise<Responses.WorkOrderTemplate>;
    }
}
