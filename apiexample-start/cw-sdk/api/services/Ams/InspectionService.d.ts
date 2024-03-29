import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { InspectionServiceTypes as SvcDef } from '../../interfaces/Ams/InspectionService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IInspectionService = SvcDef.IInspectionService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/InspectionService';
export declare class InspectionService implements IInspectionService {
    private _service;
    constructor(service: IApiService);
    AddEntity(request: Requests.AddEntity): AbortablePromise<Responses.AddEntity>;
    Answers(request: Requests.Answers): AbortablePromise<Responses.Answers>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    ByWorkOrderIds(request: Requests.ByWorkOrderIds): AbortablePromise<Responses.ByWorkOrderIds>;
    Cancel(request: Requests.Cancel): AbortablePromise<Responses.Cancel>;
    Close(request: Requests.Close): AbortablePromise<Responses.Close>;
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    CreateFromParent(request: Requests.CreateFromParent): AbortablePromise<Responses.CreateFromParent>;
    CreateFromServiceRequest(request: Requests.CreateFromServiceRequest): AbortablePromise<Responses.CreateFromServiceRequest>;
    CreateFromWorkOrder(request: Requests.CreateFromWorkOrder): AbortablePromise<Responses.CreateFromWorkOrder>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    CycleFrom(request: Requests.CycleFrom): AbortablePromise<Responses.CycleFrom>;
    CycleIntervals(request: Requests.CycleIntervals): AbortablePromise<Responses.CycleIntervals>;
    CycleTypes(request: Requests.CycleTypes): AbortablePromise<Responses.CycleTypes>;
    Districts(request: Requests.Districts): AbortablePromise<Responses.Districts>;
    InspectionInspections(request: Requests.InspectionInspections): AbortablePromise<Responses.InspectionInspections>;
    InspectionServiceRequests(request: Requests.InspectionServiceRequests): AbortablePromise<Responses.InspectionServiceRequests>;
    InspectionWorkOrders(request: Requests.InspectionWorkOrders): AbortablePromise<Responses.InspectionWorkOrders>;
    Move(request: Requests.Move): AbortablePromise<Responses.Move>;
    Priorities(request: Requests.Priorities): AbortablePromise<Responses.Priorities>;
    QA(request: Requests.QA): AbortablePromise<Responses.QA>;
    Questions(request: Requests.Questions): AbortablePromise<Responses.Questions>;
    RemoveEntity(request: Requests.RemoveEntity): AbortablePromise<Responses.RemoveEntity>;
    Resolutions(request: Requests.Resolutions): AbortablePromise<Responses.Resolutions>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    Shops(request: Requests.Shops): AbortablePromise<Responses.Shops>;
    Statuses(request: Requests.Statuses): AbortablePromise<Responses.Statuses>;
    SubmitTos(request: Requests.SubmitTos): AbortablePromise<Responses.SubmitTos>;
    Templates(request: Requests.Templates): AbortablePromise<Responses.Templates>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
