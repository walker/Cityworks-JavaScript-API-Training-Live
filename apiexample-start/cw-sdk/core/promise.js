var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PromiseTypes;
    (function (PromiseTypes) {
        var AbortablePromise = (function (_super) {
            __extends(AbortablePromise, _super);
            function AbortablePromise(executor) {
                return _super.call(this, executor) || this;
            }
            return AbortablePromise;
        }(Promise));
        AbortablePromise.REASON_ABORTED = 'ABORTED';
        PromiseTypes.AbortablePromise = AbortablePromise;
    })(PromiseTypes = exports.PromiseTypes || (exports.PromiseTypes = {}));
});
