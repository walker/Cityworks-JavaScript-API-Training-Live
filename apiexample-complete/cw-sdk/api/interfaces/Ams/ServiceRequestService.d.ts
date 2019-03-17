import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace ServiceRequestServiceTypes { 
    export namespace Requests {
        export interface AddComments extends ServiceTypes.CoreRequestBase {
            Comments: string;
            RequestId: number;
        }
        export interface AllStreetCode extends ServiceTypes.CoreRequestBase {
        }
        export interface ById extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface ByIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface ByIncidentAndEmail extends ServiceTypes.CoreRequestBase {
            EmailAddress: string;
            IncidentNumber: number;
        }
        export interface ByOtherSystemId extends ServiceTypes.CoreRequestBase {
            OtherSystemId: string;
        }
        export interface Cancel extends ServiceTypes.CoreRequestBase {
            CancelReason?: string;
            DateCancelled?: Date;
            RequestIds: number[];
        }
        export interface Close extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Comments extends ServiceTypes.CoreRequestBase {
            RequestId: number;
        }
        export interface CommentsByRequestIds extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Create extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Answers?: CoreTypes.ServiceRequestAnswer[];
            AptNum?: string;
            CallerAcctNum?: string;
            CallerAddress?: string;
            CallerAptNum?: string;
            CallerCallTime?: Date;
            CallerCellPhone?: string;
            CallerCity?: string;
            CallerComments?: string;
            CallerDistrict?: string;
            CallerEmail?: string;
            CallerFax?: string;
            CallerFirstName?: string;
            CallerHomePhone?: string;
            CallerIsFollowUpCall?: boolean;
            CallerIsOwner?: boolean;
            CallerLastName?: string;
            CallerMiddleInitial?: string;
            CallerOtherPhone?: string;
            CallerState?: string;
            CallerText1?: string;
            CallerText2?: string;
            CallerText3?: string;
            CallerText4?: string;
            CallerText5?: string;
            CallerTitle?: string;
            CallerType?: string;
            CallerWorkPhone?: string;
            CallerZip?: string;
            City?: string;
            Comments?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            Details?: string;
            DispatchTo?: number;
            DispatchToSid?: number;
            District?: string;
            InitiatedByApp?: string;
            InitiatedBySid?: number;
            Landmark?: string;
            Location?: string;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OtherSystemId?: string;
            Priority?: string;
            ProblemSid: number;
            Shop?: string;
            State?: string;
            StreetName?: string;
            SubmitTo?: number;
            SubmitToSid?: number;
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
            TileNo?: string;
            X?: number;
            Y?: number;
            Zip?: string;
        }
        export interface CreateSearchDefinition extends ServiceTypes.CoreRequestBase {
            CallerEmail?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateDispatchOpenBegin?: Date;
            DateDispatchOpenEnd?: Date;
            DateDispatchOpenIsNull?: boolean;
            DateDispatchOpenNotInRange?: boolean;
            DateDispatchOpenRangeIncludeCurrent?: boolean;
            DateDispatchOpenRangeLast?: number;
            DateDispatchOpenRangeNext?: number;
            DateDispatchOpenRangeUnits?: number;
            DateDispatchToBegin?: Date;
            DateDispatchToEnd?: Date;
            DateDispatchToIsNull?: boolean;
            DateDispatchToNotInRange?: boolean;
            DateDispatchToRangeIncludeCurrent?: boolean;
            DateDispatchToRangeLast?: number;
            DateDispatchToRangeNext?: number;
            DateDispatchToRangeUnits?: number;
            DateInvtDoneBegin?: Date;
            DateInvtDoneEnd?: Date;
            DateInvtDoneIsNull?: boolean;
            DateInvtDoneNotInRange?: boolean;
            DateInvtDoneRangeIncludeCurrent?: boolean;
            DateInvtDoneRangeLast?: number;
            DateInvtDoneRangeNext?: number;
            DateInvtDoneRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateTimeClosedBegin?: Date;
            DateTimeClosedEnd?: Date;
            DateTimeClosedIsNull?: boolean;
            DateTimeClosedNotInRange?: boolean;
            DateTimeClosedRangeIncludeCurrent?: boolean;
            DateTimeClosedRangeLast?: number;
            DateTimeClosedRangeNext?: number;
            DateTimeClosedRangeUnits?: number;
            DateTimeInitBegin?: Date;
            DateTimeInitEnd?: Date;
            DateTimeInitIsNull?: boolean;
            DateTimeInitNotInRange?: boolean;
            DateTimeInitRangeIncludeCurrent?: boolean;
            DateTimeInitRangeLast?: number;
            DateTimeInitRangeNext?: number;
            DateTimeInitRangeUnits?: number;
            Description?: string[];
            Details?: string[];
            DispatchOpenBy?: string[];
            DispatchOpenBySid?: number[];
            DispatchOpenBySidIsInList?: boolean;
            DispatchTo?: number[];
            DispatchToSid?: number[];
            DispatchToSidIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            Excursion?: boolean;
            Extent?: CoreTypes.GISExtent;
            FieldInvtDone?: boolean;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasWorkOrder?: boolean;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            OtherSystemCode?: string[];
            OtherSystemDesc?: string[];
            OtherSystemDesc2?: string[];
            OtherSystemId?: string[];
            OtherSystemStatus?: string[];
            PastDue?: boolean;
            Priority?: string[];
            PrjCompleteDateBegin?: Date;
            PrjCompleteDateEnd?: Date;
            PrjCompleteDateIsNull?: boolean;
            PrjCompleteDateNotInRange?: boolean;
            PrjCompleteDateRangeIncludeCurrent?: boolean;
            PrjCompleteDateRangeLast?: number;
            PrjCompleteDateRangeNext?: number;
            PrjCompleteDateRangeUnits?: number;
            ProbAddress?: string[];
            ProbAddType?: string;
            ProbAptNum?: string[];
            ProbCity?: string[];
            ProbDistrict?: string[];
            ProbLandmark?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            ProbLocation?: string[];
            ProbState?: string[];
            ProbZip?: string[];
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ReqCategory?: string[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            RequestIds?: number[];
            Resolution?: string[];
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmail?: string[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToPager?: string[];
            SubmitToPhone?: string[];
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            WoNeeded?: boolean;
            WorkOrderId?: string[];
        }
        export interface CustomFieldCategories extends ServiceTypes.CoreRequestBase {
            IncludeInactive?: boolean;
        }
        export interface CustomFields extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface LinkCases extends ServiceTypes.CoreRequestBase {
            CaseIds?: number[];
            RequestId: number;
        }
        export interface LinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
            RequestId: number;
        }
        export interface LinkWorkOrders extends ServiceTypes.CoreRequestBase {
            RequestId: number;
            WorkOrderIds?: string[];
        }
        export interface ProblemLeafByOtherSysCodeDescs extends ServiceTypes.CoreRequestBase {
            OtherSysCode: string;
            OtherSysDesc1: string;
            OtherSysDesc2: string;
        }
        export interface ProblemLeafBySid extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface ProblemNodes extends ServiceTypes.CoreRequestBase {
            DisplayTextDelimeter?: string;
            DisplayTextMode?: string;
            DomainId: number;
            IncludeCancelled?: boolean;
            ViewOnly?: boolean;
        }
        export interface Problems extends ServiceTypes.CoreRequestBase {
            DomainId?: number;
            ForPublicOnly?: boolean;
        }
        export interface QA extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface RequestInspections extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface RequestWorkOrders extends ServiceTypes.CoreRequestBase {
            RequestIds: number[];
        }
        export interface Search extends ServiceTypes.CoreRequestBase {
            CallerEmail?: string[];
            Canceled?: boolean;
            CancelledBy?: string[];
            CancelledBySid?: number[];
            CancelledBySidIsInList?: boolean;
            CancelReason?: string[];
            Closed?: boolean;
            ClosedBy?: string[];
            ClosedBySid?: number[];
            ClosedBySidIsInList?: boolean;
            Date1Begin?: Date;
            Date1End?: Date;
            Date1IsNull?: boolean;
            Date1NotInRange?: boolean;
            Date1RangeIncludeCurrent?: boolean;
            Date1RangeLast?: number;
            Date1RangeNext?: number;
            Date1RangeUnits?: number;
            Date2Begin?: Date;
            Date2End?: Date;
            Date2IsNull?: boolean;
            Date2NotInRange?: boolean;
            Date2RangeIncludeCurrent?: boolean;
            Date2RangeLast?: number;
            Date2RangeNext?: number;
            Date2RangeUnits?: number;
            Date3Begin?: Date;
            Date3End?: Date;
            Date3IsNull?: boolean;
            Date3NotInRange?: boolean;
            Date3RangeIncludeCurrent?: boolean;
            Date3RangeLast?: number;
            Date3RangeNext?: number;
            Date3RangeUnits?: number;
            Date4Begin?: Date;
            Date4End?: Date;
            Date4IsNull?: boolean;
            Date4NotInRange?: boolean;
            Date4RangeIncludeCurrent?: boolean;
            Date4RangeLast?: number;
            Date4RangeNext?: number;
            Date4RangeUnits?: number;
            Date5Begin?: Date;
            Date5End?: Date;
            Date5IsNull?: boolean;
            Date5NotInRange?: boolean;
            Date5RangeIncludeCurrent?: boolean;
            Date5RangeLast?: number;
            Date5RangeNext?: number;
            Date5RangeUnits?: number;
            DateCancelledBegin?: Date;
            DateCancelledEnd?: Date;
            DateCancelledIsNull?: boolean;
            DateCancelledNotInRange?: boolean;
            DateCancelledRangeIncludeCurrent?: boolean;
            DateCancelledRangeLast?: number;
            DateCancelledRangeNext?: number;
            DateCancelledRangeUnits?: number;
            DateDispatchOpenBegin?: Date;
            DateDispatchOpenEnd?: Date;
            DateDispatchOpenIsNull?: boolean;
            DateDispatchOpenNotInRange?: boolean;
            DateDispatchOpenRangeIncludeCurrent?: boolean;
            DateDispatchOpenRangeLast?: number;
            DateDispatchOpenRangeNext?: number;
            DateDispatchOpenRangeUnits?: number;
            DateDispatchToBegin?: Date;
            DateDispatchToEnd?: Date;
            DateDispatchToIsNull?: boolean;
            DateDispatchToNotInRange?: boolean;
            DateDispatchToRangeIncludeCurrent?: boolean;
            DateDispatchToRangeLast?: number;
            DateDispatchToRangeNext?: number;
            DateDispatchToRangeUnits?: number;
            DateInvtDoneBegin?: Date;
            DateInvtDoneEnd?: Date;
            DateInvtDoneIsNull?: boolean;
            DateInvtDoneNotInRange?: boolean;
            DateInvtDoneRangeIncludeCurrent?: boolean;
            DateInvtDoneRangeLast?: number;
            DateInvtDoneRangeNext?: number;
            DateInvtDoneRangeUnits?: number;
            DateSubmitToBegin?: Date;
            DateSubmitToEnd?: Date;
            DateSubmitToIsNull?: boolean;
            DateSubmitToNotInRange?: boolean;
            DateSubmitToOpenBegin?: Date;
            DateSubmitToOpenEnd?: Date;
            DateSubmitToOpenIsNull?: boolean;
            DateSubmitToOpenNotInRange?: boolean;
            DateSubmitToOpenRangeIncludeCurrent?: boolean;
            DateSubmitToOpenRangeLast?: number;
            DateSubmitToOpenRangeNext?: number;
            DateSubmitToOpenRangeUnits?: number;
            DateSubmitToRangeIncludeCurrent?: boolean;
            DateSubmitToRangeLast?: number;
            DateSubmitToRangeNext?: number;
            DateSubmitToRangeUnits?: number;
            DateTimeClosedBegin?: Date;
            DateTimeClosedEnd?: Date;
            DateTimeClosedIsNull?: boolean;
            DateTimeClosedNotInRange?: boolean;
            DateTimeClosedRangeIncludeCurrent?: boolean;
            DateTimeClosedRangeLast?: number;
            DateTimeClosedRangeNext?: number;
            DateTimeClosedRangeUnits?: number;
            DateTimeInitBegin?: Date;
            DateTimeInitEnd?: Date;
            DateTimeInitIsNull?: boolean;
            DateTimeInitNotInRange?: boolean;
            DateTimeInitRangeIncludeCurrent?: boolean;
            DateTimeInitRangeLast?: number;
            DateTimeInitRangeNext?: number;
            DateTimeInitRangeUnits?: number;
            Description?: string[];
            Details?: string[];
            DispatchOpenBy?: string[];
            DispatchOpenBySid?: number[];
            DispatchOpenBySidIsInList?: boolean;
            DispatchTo?: number[];
            DispatchToSid?: number[];
            DispatchToSidIsInList?: boolean;
            DomainId?: number[];
            DomainIdIsInList?: boolean;
            EffortIncludeNulls?: boolean;
            EffortIsMaxValueExclusive?: boolean;
            EffortIsMinValueExclusive?: boolean;
            EffortMaxValue?: number;
            EffortMinValue?: number;
            EffortRangeType?: number;
            EffortValues?: number[];
            Excursion?: boolean;
            Extent?: CoreTypes.GISExtent;
            FieldInvtDone?: boolean;
            HasAttachment?: boolean;
            HasCase?: boolean;
            HasInspection?: boolean;
            HasWorkOrder?: boolean;
            InitiatedBy?: string[];
            InitiatedByApp?: string[];
            InitiatedBySid?: number[];
            InitiatedBySidIsInList?: boolean;
            LaborCostIncludeNulls?: boolean;
            LaborCostIsMaxValueExclusive?: boolean;
            LaborCostIsMinValueExclusive?: boolean;
            LaborCostMaxValue?: number;
            LaborCostMinValue?: number;
            LaborCostRangeType?: number;
            LaborCostValues?: number[];
            MapPage?: string[];
            MaxResults?: number;
            Num1IncludeNulls?: boolean;
            Num1IsMaxValueExclusive?: boolean;
            Num1IsMinValueExclusive?: boolean;
            Num1MaxValue?: number;
            Num1MinValue?: number;
            Num1RangeType?: number;
            Num1Values?: number[];
            Num2IncludeNulls?: boolean;
            Num2IsMaxValueExclusive?: boolean;
            Num2IsMinValueExclusive?: boolean;
            Num2MaxValue?: number;
            Num2MinValue?: number;
            Num2RangeType?: number;
            Num2Values?: number[];
            Num3IncludeNulls?: boolean;
            Num3IsMaxValueExclusive?: boolean;
            Num3IsMinValueExclusive?: boolean;
            Num3MaxValue?: number;
            Num3MinValue?: number;
            Num3RangeType?: number;
            Num3Values?: number[];
            Num4IncludeNulls?: boolean;
            Num4IsMaxValueExclusive?: boolean;
            Num4IsMinValueExclusive?: boolean;
            Num4MaxValue?: number;
            Num4MinValue?: number;
            Num4RangeType?: number;
            Num4Values?: number[];
            Num5IncludeNulls?: boolean;
            Num5IsMaxValueExclusive?: boolean;
            Num5IsMinValueExclusive?: boolean;
            Num5MaxValue?: number;
            Num5MinValue?: number;
            Num5RangeType?: number;
            Num5Values?: number[];
            OtherSystemCode?: string[];
            OtherSystemDesc?: string[];
            OtherSystemDesc2?: string[];
            OtherSystemId?: string[];
            OtherSystemStatus?: string[];
            PastDue?: boolean;
            Priority?: string[];
            PrjCompleteDateBegin?: Date;
            PrjCompleteDateEnd?: Date;
            PrjCompleteDateIsNull?: boolean;
            PrjCompleteDateNotInRange?: boolean;
            PrjCompleteDateRangeIncludeCurrent?: boolean;
            PrjCompleteDateRangeLast?: number;
            PrjCompleteDateRangeNext?: number;
            PrjCompleteDateRangeUnits?: number;
            ProbAddress?: string[];
            ProbAddType?: string;
            ProbAptNum?: string[];
            ProbCity?: string[];
            ProbDistrict?: string[];
            ProbLandmark?: string[];
            ProblemCode?: string[];
            ProblemSid?: number[];
            ProblemSidIsInList?: boolean;
            ProbLocation?: string[];
            ProbState?: string[];
            ProbZip?: string[];
            ProjectName?: string[];
            ProjectSid?: number[];
            ProjectSidIsInList?: boolean;
            ReqCategory?: string[];
            ReqCustFieldCatId?: number[];
            ReqCustFieldCatIdIsInList?: boolean;
            RequestId?: number[];
            RequestIdIsInList?: boolean;
            RequestIds?: number[];
            Resolution?: string[];
            Shop?: string[];
            Status?: string[];
            StreetName?: string[];
            SubmitTo?: number[];
            SubmitToEmail?: string[];
            SubmitToOpenBy?: string[];
            SubmitToOpenBySid?: number[];
            SubmitToOpenBySidIsInList?: boolean;
            SubmitToPager?: string[];
            SubmitToPhone?: string[];
            SubmitToSid?: number[];
            SubmitToSidIsInList?: boolean;
            Text1?: string[];
            Text10?: string[];
            Text11?: string[];
            Text12?: string[];
            Text13?: string[];
            Text14?: string[];
            Text15?: string[];
            Text16?: string[];
            Text17?: string[];
            Text18?: string[];
            Text19?: string[];
            Text2?: string[];
            Text20?: string[];
            Text3?: string[];
            Text4?: string[];
            Text5?: string[];
            Text6?: string[];
            Text7?: string[];
            Text8?: string[];
            Text9?: string[];
            TileNo?: string[];
            WoNeeded?: boolean;
            WorkOrderId?: string[];
        }
        export interface SearchObject extends ServiceTypes.CoreRequestBase {
            RequestId: string;
        }
        export interface Statuses extends ServiceTypes.CoreRequestBase {
        }
        export interface TemplateCustomFields extends ServiceTypes.CoreRequestBase {
            ProblemSid: number;
        }
        export interface UnlinkInspections extends ServiceTypes.CoreRequestBase {
            InspectionIds?: number[];
            RequestId: number;
        }
        export interface UnlinkWorkOrders extends ServiceTypes.CoreRequestBase {
            RequestId: number;
            WorkOrderIds?: string[];
        }
        export interface Update extends ServiceTypes.CoreRequestBase {
            Address?: string;
            Category?: string;
            CustomFieldValues?: {[key: number]: string};
            Date1?: Date;
            Date2?: Date;
            Date3?: Date;
            Date4?: Date;
            Date5?: Date;
            DateInvtDone?: Date;
            Details?: string;
            DispatchTo?: number;
            DispatchToDate?: Date;
            DispatchToSid?: number;
            District?: string;
            Effort?: number;
            Emergency?: boolean;
            InitiatedByApp?: string;
            InitiatedDate?: Date;
            Investigation?: boolean;
            MapPage?: string;
            Num1?: number;
            Num2?: number;
            Num3?: number;
            Num4?: number;
            Num5?: number;
            OtherSystemId?: string;
            Priority?: string;
            ProbAptNum?: string;
            ProbCity?: string;
            ProbLandmark?: string;
            ProbLocation?: string;
            ProbState?: string;
            ProbZip?: string;
            ProjectedFinishDate?: Date;
            ProjectSid?: number;
            RequestId: number;
            Resolution?: string;
            Shop?: string;
            Status?: string;
            SubmitTo?: number;
            SubmitToDate?: Date;
            SubmitToSid?: number;
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
            TileNo?: string;
            WONeeded?: boolean;
        }
    }
    export namespace Responses {
        export interface AddComments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface AllStreetCode extends ServiceTypes.CoreResponseBase_<CoreTypes.StreetCode[]> {}
        export interface ById extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface ByIds extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface ByIncidentAndEmail extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface ByOtherSystemId extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface Cancel extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface Close extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface Comments extends ServiceTypes.CoreResponseBase_<string> {}
        export interface CommentsByRequestIds extends ServiceTypes.CoreResponseBase_<{[key: number]: string}> {}
        export interface Create extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
        export interface CreateSearchDefinition extends ServiceTypes.CoreResponseBase_<CoreTypes.SearchDefinition> {}
        export interface CustomFieldCategories extends ServiceTypes.CoreResponseBase_<CoreTypes.CustFieldCategoryBase[]> {}
        export interface CustomFields extends ServiceTypes.CoreResponseBase_<{[key: number]: CoreTypes.ReqCustField[]}> {}
        export interface LinkCases extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface LinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface LinkWorkOrders extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface ProblemLeafByOtherSysCodeDescs extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase> {}
        export interface ProblemLeafBySid extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemLeafBase> {}
        export interface ProblemNodes extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemNode[]> {}
        export interface Problems extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemName[]> {}
        export interface QA extends ServiceTypes.CoreResponseBase_<CoreTypes.ProblemQA> {}
        export interface RequestInspections extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestInspection[]> {}
        export interface RequestWorkOrders extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestWorkOrder[]> {}
        export interface Search extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface SearchObject extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase[]> {}
        export interface Statuses extends ServiceTypes.CoreResponseBase_<CoreTypes.CodeDesc[]> {}
        export interface TemplateCustomFields extends ServiceTypes.CoreResponseBase_<CoreTypes.CategoryCustField[]> {}
        export interface UnlinkInspections extends ServiceTypes.CoreResponseBase_<number[]> {}
        export interface UnlinkWorkOrders extends ServiceTypes.CoreResponseBase_<string[]> {}
        export interface Update extends ServiceTypes.CoreResponseBase_<CoreTypes.RequestBase> {}
    }
    export interface IServiceRequestService {
        AddComments?: (request: Requests.AddComments) => AbortablePromise<Responses.AddComments>;
        AllStreetCode?: (request: Requests.AllStreetCode) => AbortablePromise<Responses.AllStreetCode>;
        ById?: (request: Requests.ById) => AbortablePromise<Responses.ById>;
        ByIds?: (request: Requests.ByIds) => AbortablePromise<Responses.ByIds>;
        ByIncidentAndEmail?: (request: Requests.ByIncidentAndEmail) => AbortablePromise<Responses.ByIncidentAndEmail>;
        ByOtherSystemId?: (request: Requests.ByOtherSystemId) => AbortablePromise<Responses.ByOtherSystemId>;
        Cancel?: (request: Requests.Cancel) => AbortablePromise<Responses.Cancel>;
        Close?: (request: Requests.Close) => AbortablePromise<Responses.Close>;
        Comments?: (request: Requests.Comments) => AbortablePromise<Responses.Comments>;
        CommentsByRequestIds?: (request: Requests.CommentsByRequestIds) => AbortablePromise<Responses.CommentsByRequestIds>;
        Create?: (request: Requests.Create) => AbortablePromise<Responses.Create>;
        CreateSearchDefinition?: (request: Requests.CreateSearchDefinition) => AbortablePromise<Responses.CreateSearchDefinition>;
        CustomFieldCategories?: (request: Requests.CustomFieldCategories) => AbortablePromise<Responses.CustomFieldCategories>;
        CustomFields?: (request: Requests.CustomFields) => AbortablePromise<Responses.CustomFields>;
        LinkCases?: (request: Requests.LinkCases) => AbortablePromise<Responses.LinkCases>;
        LinkInspections?: (request: Requests.LinkInspections) => AbortablePromise<Responses.LinkInspections>;
        LinkWorkOrders?: (request: Requests.LinkWorkOrders) => AbortablePromise<Responses.LinkWorkOrders>;
        ProblemLeafByOtherSysCodeDescs?: (request: Requests.ProblemLeafByOtherSysCodeDescs) => AbortablePromise<Responses.ProblemLeafByOtherSysCodeDescs>;
        ProblemLeafBySid?: (request: Requests.ProblemLeafBySid) => AbortablePromise<Responses.ProblemLeafBySid>;
        ProblemNodes?: (request: Requests.ProblemNodes) => AbortablePromise<Responses.ProblemNodes>;
        Problems?: (request: Requests.Problems) => AbortablePromise<Responses.Problems>;
        QA?: (request: Requests.QA) => AbortablePromise<Responses.QA>;
        RequestInspections?: (request: Requests.RequestInspections) => AbortablePromise<Responses.RequestInspections>;
        RequestWorkOrders?: (request: Requests.RequestWorkOrders) => AbortablePromise<Responses.RequestWorkOrders>;
        Search?: (request: Requests.Search) => AbortablePromise<Responses.Search>;
        SearchObject?: (request: Requests.SearchObject) => AbortablePromise<Responses.SearchObject>;
        Statuses?: (request: Requests.Statuses) => AbortablePromise<Responses.Statuses>;
        TemplateCustomFields?: (request: Requests.TemplateCustomFields) => AbortablePromise<Responses.TemplateCustomFields>;
        UnlinkInspections?: (request: Requests.UnlinkInspections) => AbortablePromise<Responses.UnlinkInspections>;
        UnlinkWorkOrders?: (request: Requests.UnlinkWorkOrders) => AbortablePromise<Responses.UnlinkWorkOrders>;
        Update?: (request: Requests.Update) => AbortablePromise<Responses.Update>;
    }
}
