import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace EquipmentChangeOutServiceTypes { 
    export namespace Requests {
        export interface AddChangeOutRead extends ServiceTypes.CoreRequestBase {
            ChangeOutId: number;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            IsNewRead?: boolean;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OperationId: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        export interface AddOperation extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeOutId: number;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            Operation: number;
            OperationComments?: string;
            RecordDate?: Date;
        }
        export interface Attach extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            ChangeOutId?: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            ChangeOutIds?: number[];
        }
        export interface Delete extends ServiceTypes.CoreRequestBase {
            ChangeOutId: number;
            ChangeOutIds: number[];
        }
        export interface DeleteChangeOutReads extends ServiceTypes.CoreRequestBase {
            ReadIds: number[];
        }
        export interface DeleteOperations extends ServiceTypes.CoreRequestBase {
            OperationIds: number[];
        }
        export interface Detach extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface DirectParent extends ServiceTypes.CoreRequestBase {
            EntitySid: number;
            EntityType: string;
            EntityUid: string;
            ParentType?: string;
        }
        export interface Entities extends ServiceTypes.CoreRequestBase {
            EntitySids: number[];
            EntityType: string;
            EntityUids: string[];
            ReadableValues?: boolean;
        }
        export interface Entity extends ServiceTypes.CoreRequestBase {
            EntitySid?: number;
            EntityType?: string;
            EntityUid?: string;
        }
        export interface History extends ServiceTypes.CoreRequestBase {
            EntityType?: string;
            EntityUid?: string;
        }
        export interface Read extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface ReadConfigs extends ServiceTypes.CoreRequestBase {
            EntityType: string;
            EntityTypes?: string[];
        }
        export interface Related extends ServiceTypes.CoreRequestBase {
            EntitySid: number;
            EntityType: string;
            EntityUid: string;
        }
        export interface Replace extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeDate?: Date;
            ChangedById?: number;
            ChangeOutId?: number;
            Comments?: string;
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            FeatureSid?: number;
            FeatureType?: string;
            FeatureUid?: string;
            InspCustFieldCatId?: number;
            InspectedBySid?: number;
            Location?: string;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId?: number;
            RecordDate?: Date;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
            UpdateMap?: boolean;
            WorkOrderId?: string;
        }
        export interface UpdateChangeOutRead extends ServiceTypes.CoreRequestBase {
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Num1?: number;
            Num10?: number;
            Num11?: number;
            Num12?: number;
            Num13?: number;
            Num14?: number;
            Num15?: number;
            Num16?: number;
            Num17?: number;
            Num18?: number;
            Num19?: number;
            Num2?: number;
            Num20?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            Num6?: number;
            Num7?: number;
            Num8?: number;
            Num9?: number;
            ReadId: number;
            Text1?: string;
            Text10?: string;
            Text11?: string;
            Text12?: string;
            Text13?: string;
            Text14?: string;
            Text15?: string;
            Text16?: string;
            Text17?: string;
            Text18?: string;
            Text19?: string;
            Text2?: string;
            Text20?: string;
            Text3?: string;
            Text4?: string;
            Text5?: string;
            Text6?: string;
            Text7?: string;
            Text8?: string;
            Text9?: string;
        }
        export interface UpdateOperation extends ServiceTypes.CoreRequestBase {
            AssetType?: string;
            ChangeOutId?: number;
            NewRead_Date1?: Date;
            NewRead_Date2?: Date;
            NewRead_Date3?: Date;
            NewRead_Date4?: Date;
            NewRead_Date5?: Date;
            NewRead_Id?: number;
            NewRead_Num1?: number;
            NewRead_Num10?: number;
            NewRead_Num11?: number;
            NewRead_Num12?: number;
            NewRead_Num13?: number;
            NewRead_Num14?: number;
            NewRead_Num15?: number;
            NewRead_Num16?: number;
            NewRead_Num17?: number;
            NewRead_Num18?: number;
            NewRead_Num19?: number;
            NewRead_Num2?: number;
            NewRead_Num20?: number;
            NewRead_Num3?: number;
            NewRead_Num4?: number;
            NewRead_Num5?: number;
            NewRead_Num6?: number;
            NewRead_Num7?: number;
            NewRead_Num8?: number;
            NewRead_Num9?: number;
            NewRead_Text1?: string;
            NewRead_Text10?: string;
            NewRead_Text11?: string;
            NewRead_Text12?: string;
            NewRead_Text13?: string;
            NewRead_Text14?: string;
            NewRead_Text15?: string;
            NewRead_Text16?: string;
            NewRead_Text17?: string;
            NewRead_Text18?: string;
            NewRead_Text19?: string;
            NewRead_Text2?: string;
            NewRead_Text20?: string;
            NewRead_Text3?: string;
            NewRead_Text4?: string;
            NewRead_Text5?: string;
            NewRead_Text6?: string;
            NewRead_Text7?: string;
            NewRead_Text8?: string;
            NewRead_Text9?: string;
            NewUid?: string;
            OldRead_Date1?: Date;
            OldRead_Date2?: Date;
            OldRead_Date3?: Date;
            OldRead_Date4?: Date;
            OldRead_Date5?: Date;
            OldRead_Id?: number;
            OldRead_Num1?: number;
            OldRead_Num10?: number;
            OldRead_Num11?: number;
            OldRead_Num12?: number;
            OldRead_Num13?: number;
            OldRead_Num14?: number;
            OldRead_Num15?: number;
            OldRead_Num16?: number;
            OldRead_Num17?: number;
            OldRead_Num18?: number;
            OldRead_Num19?: number;
            OldRead_Num2?: number;
            OldRead_Num20?: number;
            OldRead_Num3?: number;
            OldRead_Num4?: number;
            OldRead_Num5?: number;
            OldRead_Num6?: number;
            OldRead_Num7?: number;
            OldRead_Num8?: number;
            OldRead_Num9?: number;
            OldRead_Text1?: string;
            OldRead_Text10?: string;
            OldRead_Text11?: string;
            OldRead_Text12?: string;
            OldRead_Text13?: string;
            OldRead_Text14?: string;
            OldRead_Text15?: string;
            OldRead_Text16?: string;
            OldRead_Text17?: string;
            OldRead_Text18?: string;
            OldRead_Text19?: string;
            OldRead_Text2?: string;
            OldRead_Text20?: string;
            OldRead_Text3?: string;
            OldRead_Text4?: string;
            OldRead_Text5?: string;
            OldRead_Text6?: string;
            OldRead_Text7?: string;
            OldRead_Text8?: string;
            OldRead_Text9?: string;
            OldUid?: string;
            OperationComments?: string;
            OperationId: number;
            RecordDate?: Date;
        }
    }
    export namespace Responses {
        export interface AddChangeOutRead extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutRead> {}
        export interface AddOperation extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutOperation> {}
        export interface Attach extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOutBase[]> {}
        export interface Delete extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteChangeOutReads extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface DeleteOperations extends ServiceTypes.CoreResponseBase_<{[key: number]: boolean}> {}
        export interface Detach extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface DirectParent extends ServiceTypes.CoreResponseBase_<CoreTypes.ParentChildItem> {}
        export interface Entities extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface Entity extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity> {}
        export interface History extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipmentChangeOutHistory> {}
        export interface Read extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface ReadConfigs extends ServiceTypes.CoreResponseBase_<CoreTypes.ChgOutReadConfig[]> {}
        export interface Related extends ServiceTypes.CoreResponseBase_<CoreTypes.WorkOrderEntity[]> {}
        export interface Replace extends ServiceTypes.CoreResponseBase_<CoreTypes.EquipChangeOut> {}
        export interface UpdateChangeOutRead extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutRead> {}
        export interface UpdateOperation extends ServiceTypes.CoreResponseBase_<CoreTypes.ChangeOutOperation> {}
    }
    export interface IEquipmentChangeOutService {
        AddChangeOutRead?: (request: Requests.AddChangeOutRead) => AbortablePromise<Responses.AddChangeOutRead>;
        AddOperation?: (request: Requests.AddOperation) => AbortablePromise<Responses.AddOperation>;
        Attach?: (request: Requests.Attach) => AbortablePromise<Responses.Attach>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        Delete?: (request: Requests.Delete) => AbortablePromise<Responses.Delete>;
        DeleteChangeOutReads?: (request: Requests.DeleteChangeOutReads) => AbortablePromise<Responses.DeleteChangeOutReads>;
        DeleteOperations?: (request: Requests.DeleteOperations) => AbortablePromise<Responses.DeleteOperations>;
        Detach?: (request: Requests.Detach) => AbortablePromise<Responses.Detach>;
        DirectParent?: (request: Requests.DirectParent) => AbortablePromise<Responses.DirectParent>;
        Entities?: (request: Requests.Entities) => AbortablePromise<Responses.Entities>;
        Entity?: (request: Requests.Entity) => AbortablePromise<Responses.Entity>;
        History?: (request: Requests.History) => AbortablePromise<Responses.History>;
        Read?: (request: Requests.Read) => AbortablePromise<Responses.Read>;
        ReadConfigs?: (request: Requests.ReadConfigs) => AbortablePromise<Responses.ReadConfigs>;
        Related?: (request: Requests.Related) => AbortablePromise<Responses.Related>;
        Replace?: (request: Requests.Replace) => AbortablePromise<Responses.Replace>;
        UpdateChangeOutRead?: (request: Requests.UpdateChangeOutRead) => AbortablePromise<Responses.UpdateChangeOutRead>;
        UpdateOperation?: (request: Requests.UpdateOperation) => AbortablePromise<Responses.UpdateOperation>;
    }
}
