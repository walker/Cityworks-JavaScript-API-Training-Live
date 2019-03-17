import { Enums, ServiceEnums, PromiseTypes, ServiceTypes, Types as CoreTypes } from '../../../bundles/core';
import AbortablePromise = PromiseTypes.AbortablePromise;

export namespace PluginLayoutServiceTypes { 
    export namespace Requests {
        export interface Definitions extends ServiceTypes.CoreRequestBase {
            Ids?: string[];
        }
    }
    export namespace Responses {
        export interface Definitions extends ServiceTypes.CoreResponseBase_<CoreTypes.PluginLayoutDefinition[]> {}
    }
    export interface IPluginLayoutService {
        Definitions?: (request: Requests.Definitions) => AbortablePromise<Responses.Definitions>;
    }
}
