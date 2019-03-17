import { PromiseTypes } from '../../../core/promise';
import { IApiService } from '../../../http/api-service';
import { StoreroomServiceTypes as SvcDef } from '../../interfaces/Ams/StoreroomService';
import AbortablePromise = PromiseTypes.AbortablePromise;
import Requests = SvcDef.Requests;
import Responses = SvcDef.Responses;
import IStoreroomService = SvcDef.IStoreroomService;
export * from '../../../http/api-service';
export * from '../../interfaces/Ams/StoreroomService';
export declare class StoreroomService implements IStoreroomService {
    private _service;
    constructor(service: IApiService);
    Accounts(request: Requests.Accounts): AbortablePromise<Responses.Accounts>;
    AddAudit(request: Requests.AddAudit): AbortablePromise<Responses.AddAudit>;
    AddIssue(request: Requests.AddIssue): AbortablePromise<Responses.AddIssue>;
    AddReceive(request: Requests.AddReceive): AbortablePromise<Responses.AddReceive>;
    AddRequisition(request: Requests.AddRequisition): AbortablePromise<Responses.AddRequisition>;
    AddRequisitionItem(request: Requests.AddRequisitionItem): AbortablePromise<Responses.AddRequisitionItem>;
    AddSupplier(request: Requests.AddSupplier): AbortablePromise<Responses.AddSupplier>;
    AddSupplierMaterial(request: Requests.AddSupplierMaterial): AbortablePromise<Responses.AddSupplierMaterial>;
    AddTransfer(request: Requests.AddTransfer): AbortablePromise<Responses.AddTransfer>;
    BuildAssemblyMaterial(request: Requests.BuildAssemblyMaterial): AbortablePromise<Responses.BuildAssemblyMaterial>;
    RequisitionItems(request: Requests.RequisitionItems): AbortablePromise<Responses.RequisitionItems>;
    Requisitions(request: Requests.Requisitions): AbortablePromise<Responses.Requisitions>;
    SearchSuppliersByUid(request: Requests.SearchSuppliersByUid): AbortablePromise<Responses.SearchSuppliersByUid>;
    Storerooms(request: Requests.Storerooms): AbortablePromise<Responses.Storerooms>;
    StoreroomStocks(request: Requests.StoreroomStocks): AbortablePromise<Responses.StoreroomStocks>;
    SupplierMaterial(request: Requests.SupplierMaterial): AbortablePromise<Responses.SupplierMaterial>;
    UpdateRequisition(request: Requests.UpdateRequisition): AbortablePromise<Responses.UpdateRequisition>;
    UpdateSupplier(request: Requests.UpdateSupplier): AbortablePromise<Responses.UpdateSupplier>;
    UpdateSupplierMaterial(request: Requests.UpdateSupplierMaterial): AbortablePromise<Responses.UpdateSupplierMaterial>;
}