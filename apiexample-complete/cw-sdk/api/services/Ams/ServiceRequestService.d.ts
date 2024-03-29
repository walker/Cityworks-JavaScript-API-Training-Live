import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { ServiceRequestServiceTypes as SvcDef } from '../../interfaces/Ams/ServiceRequestService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IServiceRequestService = SvcDef.IServiceRequestService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/ServiceRequestService';
export declare class ServiceRequestService implements IServiceRequestService {
    private _service;
    constructor(service: IApiService);
    AddComments(request: Requests.AddComments): AbortablePromise<Responses.AddComments>;
    AllStreetCode(request: Requests.AllStreetCode): AbortablePromise<Responses.AllStreetCode>;
    ById(request: Requests.ById): AbortablePromise<Responses.ById>;
    ByIds(request: Requests.ByIds): AbortablePromise<Responses.ByIds>;
    ByIncidentAndEmail(request: Requests.ByIncidentAndEmail): AbortablePromise<Responses.ByIncidentAndEmail>;
    ByOtherSystemId(request: Requests.ByOtherSystemId): AbortablePromise<Responses.ByOtherSystemId>;
    Cancel(request: Requests.Cancel): AbortablePromise<Responses.Cancel>;
    ChangeCustomFieldCategory(request: Requests.ChangeCustomFieldCategory): AbortablePromise<Responses.ChangeCustomFieldCategory>;
    Close(request: Requests.Close): AbortablePromise<Responses.Close>;
    Combine(request: Requests.Combine): AbortablePromise<Responses.Combine>;
    Comments(request: Requests.Comments): AbortablePromise<Responses.Comments>;
    CommentsByRequestIds(request: Requests.CommentsByRequestIds): AbortablePromise<Responses.CommentsByRequestIds>;
    Create(request: Requests.Create): AbortablePromise<Responses.Create>;
    CreateSearchDefinition(request: Requests.CreateSearchDefinition): AbortablePromise<Responses.CreateSearchDefinition>;
    CustomFieldCategories(request: Requests.CustomFieldCategories): AbortablePromise<Responses.CustomFieldCategories>;
    CustomFields(request: Requests.CustomFields): AbortablePromise<Responses.CustomFields>;
    DefaultStatus(request: Requests.DefaultStatus): AbortablePromise<Responses.DefaultStatus>;
    DispatchTo(request: Requests.DispatchTo): AbortablePromise<Responses.DispatchTo>;
    LinkCases(request: Requests.LinkCases): AbortablePromise<Responses.LinkCases>;
    LinkInspections(request: Requests.LinkInspections): AbortablePromise<Responses.LinkInspections>;
    LinkWorkOrders(request: Requests.LinkWorkOrders): AbortablePromise<Responses.LinkWorkOrders>;
    Move(request: Requests.Move): AbortablePromise<Responses.Move>;
    Priorities(request: Requests.Priorities): AbortablePromise<Responses.Priorities>;
    ProblemLeafByOtherSysCodeDescs(request: Requests.ProblemLeafByOtherSysCodeDescs): AbortablePromise<Responses.ProblemLeafByOtherSysCodeDescs>;
    ProblemLeafBySid(request: Requests.ProblemLeafBySid): AbortablePromise<Responses.ProblemLeafBySid>;
    ProblemNodes(request: Requests.ProblemNodes): AbortablePromise<Responses.ProblemNodes>;
    Problems(request: Requests.Problems): AbortablePromise<Responses.Problems>;
    ProblemsByKeywords(request: Requests.ProblemsByKeywords): AbortablePromise<Responses.ProblemsByKeywords>;
    QA(request: Requests.QA): AbortablePromise<Responses.QA>;
    Reopen(request: Requests.Reopen): AbortablePromise<Responses.Reopen>;
    RequestInspections(request: Requests.RequestInspections): AbortablePromise<Responses.RequestInspections>;
    RequestWorkOrders(request: Requests.RequestWorkOrders): AbortablePromise<Responses.RequestWorkOrders>;
    Search(request: Requests.Search): AbortablePromise<Responses.Search>;
    SearchObject(request: Requests.SearchObject): AbortablePromise<Responses.SearchObject>;
    Statuses(request: Requests.Statuses): AbortablePromise<Responses.Statuses>;
    SubmitTo(request: Requests.SubmitTo): AbortablePromise<Responses.SubmitTo>;
    TemplateCustomFields(request: Requests.TemplateCustomFields): AbortablePromise<Responses.TemplateCustomFields>;
    Uncancel(request: Requests.Uncancel): AbortablePromise<Responses.Uncancel>;
    UnlinkInspections(request: Requests.UnlinkInspections): AbortablePromise<Responses.UnlinkInspections>;
    UnlinkWorkOrders(request: Requests.UnlinkWorkOrders): AbortablePromise<Responses.UnlinkWorkOrders>;
    Update(request: Requests.Update): AbortablePromise<Responses.Update>;
}
