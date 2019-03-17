export declare namespace Enums {
    enum AbcCatClass {
        A = 1,
        B = 2,
        C = 3,
        NA = 4,
    }
    enum ActionType {
        Unknown = 0,
        ActivityUpdate = 1,
        Email = 2,
        WebHook = 3,
    }
    enum ApiVersionEnum {
        V20121 = 0,
        V2013 = 1,
        V2014 = 2,
        V2015 = 3,
        V15_1 = 4,
        V15_1_1 = 5,
        V15_1_2 = 6,
        V15_1_3 = 7,
        V15_1_4 = 8,
        V15_1_5 = 9,
        V15_1_6 = 10,
        V15_2 = 11,
        V15_2_1 = 12,
        V15_2_2 = 13,
        V15_2_3 = 14,
        V15_2_4 = 15,
    }
    enum ApplyLevel {
        Null = 0,
        Domain = 1,
        Group = 2,
        User = 3,
    }
    enum AssetRatingMethod {
        Null = 0,
        CONDITIONRATING = 1,
        SIDEWALKRATING = 2,
        TREEDAMAGERATING = 3,
    }
    enum CommentActivityType {
        Request = 1,
        WorkOrder = 2,
        CaTask = 3,
        CaObject = 4,
        CaCorrection = 5,
    }
    enum ContractorRateType {
        Hourly = 0,
        Fixed = 1,
        PerUnit = 2,
    }
    enum CostUsage {
        Actual = 0,
        Projected = 1,
        Template = 2,
        Reported = 3,
    }
    enum CustomFieldValueSource {
        DEFAULT = 0,
        PARENTWO = 1,
    }
    enum CWEntityType {
        Null = 0,
        Feature = 1,
        Object = 2,
        Other = 3,
    }
    enum DateSelection {
        Null = 0,
        Exact = 1,
        Relative = 2,
    }
    enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
    }
    enum DistressSeverity {
        L = 0,
        M = 1,
        H = 2,
        NA = 3,
    }
    enum EquipmentRateType {
        Hourly = 0,
        Fixed = 1,
    }
    enum EventSourceType {
        Request = 0,
        WorkOrder = 1,
        Inspection = 2,
        Permit = 3,
        Comment = 4,
        WorkOrderLabor = 5,
        RequestLabor = 6,
        Unknown = 7,
    }
    enum EventTriggerType {
        Always = 0,
        Equal = 1,
        NotEqual = 2,
        LessThan = 3,
        GreaterThan = 4,
        Contains = 5,
        NotContains = 6,
        NullOrEmpty = 7,
        NotNullOrEmpty = 8,
        Unknown = 9,
    }
    enum FieldDataType {
        VARCHAR = 0,
        NUMERIC = 1,
        DATE = 2,
    }
    enum GISRight {
        View = 0,
        Attribute = 1,
        Geometry = 2,
    }
    enum GISServiceType {
        DYNAMICMAP = 0,
        TILEDMAP = 1,
        IMAGEMAP = 2,
        GEOCODE = 3,
        GEOMETRY = 4,
        FEATURELAYER = 5,
        WEBMAP = 6,
        HEATMAP = 7,
        KMLLAYER = 8,
        WMSLAYER = 9,
        GEODATA = 10,
        SOE = 11,
        UNKNOWN = 12,
        RESOURCEPROXY = 13,
        TILEPACKAGE = 14,
        PRINTING = 15,
        ROUTING = 16,
        VECTORTILE = 17,
    }
    enum InspQuestionType {
        Single = 0,
        Multiple = 1,
        Assets = 2,
    }
    enum LaborCategory {
        Employee = 0,
        Contractor = 1,
    }
    enum LaborRateType {
        Hourly = 0,
        Overtime = 1,
        Emergency = 2,
        Fixed = 3,
        PerUnit = 4,
    }
    enum LicensedExtension {
        UnknownExtension = 0,
        CwAnalytics = 1,
        WebHooks = 2,
        PLLPublicApp = 3,
        ActivityUpdate = 4,
        SingleSignOn = 5,
    }
    enum LicensedFeature {
        UnknownFeature = 0,
        ViewInspections = 1,
        EditInspections = 2,
        ViewServiceRequest = 3,
        EditServiceRequest = 4,
        ViewWorkOrder = 5,
        EditWorkOrder = 6,
        EquipmentCheckOut = 7,
        OfficeField = 8,
        Respond = 9,
        Eurl = 10,
        PaverInterface = 11,
        Contracts = 12,
        Storeroom = 13,
        PLL = 14,
        Cw4XL = 15,
        TableEditor = 16,
        CCTVInterface = 17,
        MobileAndroid = 18,
        MobileiOS = 19,
        PerformanceBudgeting = 20,
        Insights = 21,
        RespondCase = 22,
        RespondInspection = 23,
        RespondServiceRequest = 24,
        RespondTaskManager = 25,
        RespondWorkOrder = 26,
        Workload = 27,
    }
    enum MaterialCostType {
        AVERAGE = 1,
        CURRENT = 2,
        FIFO = 3,
        LIFO = 4,
    }
    enum NativeAppWorkActivityType {
        Case = 1,
        Inspection = 2,
        ServiceRequest = 3,
        WorkOrder = 4,
    }
    enum NumericValueMode {
        Nulls = 0,
        MinMax = 1,
        ListOfValues = 2,
        NotListOfValues = 3,
        Disjoint = 4,
        Invalid = 5,
        NotNull = 6,
    }
    enum PacpMappingDirection {
        Export = 0,
        Import = 1,
        ExportImport = 2,
    }
    enum QASequenceModel {
        Null = 0,
        Linear = 1,
        Branch = 2,
    }
    enum QuestAnswerFormat {
        THISTEXT = 0,
        DATE = 1,
        YES = 2,
        NO = 3,
        UNKNOWN = 4,
        FREETEXT = 5,
        CHECKED = 6,
        UNCHECK = 7,
        CODEDESC = 8,
        DESCSCORE = 9,
        CALCULATED = 10,
        NUMERIC = 11,
    }
    enum QueueStatus {
        Pending = 0,
        Processing = 1,
        Complete = 2,
        Failed = 3,
    }
    enum RateAddMethod {
        Percent = 0,
        Fixed = 1,
    }
    enum ReadingActionType {
        Null = 0,
        Interval = 1,
        Milestone = 2,
        Threshold = 3,
    }
    enum RelativeDate {
        Null = 0,
        Next = 1,
        Last = 2,
        Current = 3,
        Range = 4,
    }
    enum RelativeDateUnit {
        Null = 0,
        Minutes = 1,
        Hours = 2,
        Days = 3,
        Weeks = 4,
        Months = 5,
        Years = 6,
    }
    enum RepeatFromDate {
        ADATE = 0,
        PROJSTARTDATE = 1,
        ACTUALFINISHDATE = 2,
    }
    enum RepeatIntervalUnit {
        D = 0,
        W = 1,
        M = 2,
        Y = 3,
    }
    enum RepeatType {
        NEVER = 0,
        ONCE = 1,
        EVERY = 2,
    }
    enum SearchType {
        Null = 0,
        Request = 1,
        WorkOrder = 2,
        Inspection = 3,
        Contract = 4,
        Permit = 5,
        GIS = 6,
        PermitTask = 7,
        PermitAddress = 8,
        InspCommon = 9,
        Case = 10,
        WorkOrderEntity = 11,
        StoreTransaction = 12,
        Requisition = 13,
        Material = 14,
        WorkActivity = 15,
        MaterialLeaf = 16,
        WoTemplate = 17,
        Unknown = 18,
        Employee = 19,
        MessageQueue = 20,
        Analytics = 21,
        TokenState = 22,
        AssetCalculationResult = 23,
        Equipment = 24,
        CustomerAccount = 25,
        InspTemplate = 26,
        ProblemLeaf = 27,
    }
    enum SearchView {
        Grid = 0,
        Calendar = 1,
        Map = 2,
        Frequency = 3,
        WorkOrderEntity = 4,
    }
    enum SourceEventType {
        WorkOrderManualEmail = 0,
        WorkOrderSubmitToChanged = 1,
        WorkOrderCreated = 2,
        WorkOrderClosed = 3,
        WorkOrderPrintQueue = 4,
        WorkOrderCanceled = 5,
        WorkOrderDeleted = 6,
        RequestManualCallerEmail = 7,
        RequestManualEmail = 8,
        RequestSubmitToChanged = 9,
        RequestDispatchedToChanged = 10,
        RequestCreated = 11,
        RequestClosed = 12,
        RequestCanceled = 13,
        RequestDeleted = 14,
        InspectionManualEmail = 15,
        InspectionCreated = 16,
        InspectionSubmitToChanged = 17,
        InspectionClosed = 18,
        InspectionDeleted = 19,
        InspectionCanceled = 20,
        CommentMention = 21,
        RequestLaborAdded = 22,
        RequestLaborDeleted = 23,
        WorkOrderLaborAdded = 24,
        WorkOrderLaborDeleted = 25,
        CaObjectCreated = 26,
        CaObjectUpdated = 27,
        CaObjectDeleted = 28,
        Unknown = 29,
        WorkOrderStatusChanged = 30,
        RequestStatusChanged = 31,
        InspectionStatusChanged = 32,
    }
    enum TimeIntervalUnit {
        HOUR = 0,
        DAY = 1,
        WEEK = 2,
        MONTH = 3,
    }
    enum TransactionType {
        NULL = 0,
        AUDIT = 1,
        ISSUE = 2,
        RECEIVE = 3,
        TRANSFER = 4,
        FRTRASH = 5,
        TOTRASH = 6,
    }
    enum TreeNodeTextType {
        C = 0,
        CD = 1,
        D = 2,
    }
    enum TreeNodeType {
        R = 0,
        N = 1,
        L = 2,
        Null = 3,
    }
    enum WebHookOutputType {
        JSON = 0,
        CSV = 1,
    }
    enum WebHookPacketModel {
        Simple = 0,
        Custom = 1,
    }
    enum WidgetContainerTabType {
        Domain = 0,
        User = 1,
    }
    enum WidgetContainerType {
        Domain = 0,
        User = 1,
    }
    enum WOEvent {
        CLOSE = 1,
        INITIATE = 2,
    }
    enum WOExpenseType {
        MAINT = 0,
        CIP = 1,
    }
    enum WOOutputType {
        WorkOrder = 0,
        Map = 1,
        WorkOrderAndMap = 2,
    }
    enum WorkDurationUnit {
        Null = 0,
        H = 1,
        D = 2,
    }
    enum WOStage {
        PROPOSED = 0,
        ACTUAL = 1,
    }
}
