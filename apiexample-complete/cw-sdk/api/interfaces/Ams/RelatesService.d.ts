import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace RelatesServiceTypes { 
    export namespace Requests {
        export interface EquipChangeOutChangedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionInspectedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface InspectionSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProjectApprovedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProjectAssignedTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface ProjectInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestDispatchTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface RequestSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface SearchViewCost extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface TaskAssignTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderCancelledBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderClosedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderCompletedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderEditAfterClose extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderInitiatedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderRequestedBy extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderSubmitTo extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
        export interface WorkOrderSupervisors extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            IncludeInactive?: boolean;
        }
    }
    export namespace Responses {
        export interface EmployeeRelates extends ServiceTypes.CoreResponseBase_obsolete_<CoreTypes.EmployeeRelate[]> {}
    }
    export interface IRelatesService {
        EquipChangeOutChangedBy?: (request: Requests.EquipChangeOutChangedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionCancelledBy?: (request: Requests.InspectionCancelledBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionClosedBy?: (request: Requests.InspectionClosedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionEditAfterClose?: (request: Requests.InspectionEditAfterClose) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionInitiatedBy?: (request: Requests.InspectionInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionInspectedBy?: (request: Requests.InspectionInspectedBy) => AbortablePromise<Responses.EmployeeRelates>;
        InspectionSubmitTo?: (request: Requests.InspectionSubmitTo) => AbortablePromise<Responses.EmployeeRelates>;
        ProjectApprovedBy?: (request: Requests.ProjectApprovedBy) => AbortablePromise<Responses.EmployeeRelates>;
        ProjectAssignedTo?: (request: Requests.ProjectAssignedTo) => AbortablePromise<Responses.EmployeeRelates>;
        ProjectInitiatedBy?: (request: Requests.ProjectInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestCancelledBy?: (request: Requests.RequestCancelledBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestClosedBy?: (request: Requests.RequestClosedBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestDispatchTo?: (request: Requests.RequestDispatchTo) => AbortablePromise<Responses.EmployeeRelates>;
        RequestEditAfterClose?: (request: Requests.RequestEditAfterClose) => AbortablePromise<Responses.EmployeeRelates>;
        RequestInitiatedBy?: (request: Requests.RequestInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        RequestSubmitTo?: (request: Requests.RequestSubmitTo) => AbortablePromise<Responses.EmployeeRelates>;
        SearchViewCost?: (request: Requests.SearchViewCost) => AbortablePromise<Responses.EmployeeRelates>;
        TaskAssignTo?: (request: Requests.TaskAssignTo) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderCancelledBy?: (request: Requests.WorkOrderCancelledBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderClosedBy?: (request: Requests.WorkOrderClosedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderCompletedBy?: (request: Requests.WorkOrderCompletedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderEditAfterClose?: (request: Requests.WorkOrderEditAfterClose) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderInitiatedBy?: (request: Requests.WorkOrderInitiatedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderRequestedBy?: (request: Requests.WorkOrderRequestedBy) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderSubmitTo?: (request: Requests.WorkOrderSubmitTo) => AbortablePromise<Responses.EmployeeRelates>;
        WorkOrderSupervisors?: (request: Requests.WorkOrderSupervisors) => AbortablePromise<Responses.EmployeeRelates>;
    }
}
