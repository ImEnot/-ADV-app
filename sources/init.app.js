;(function (exports, document, addEventListener) {
    'use strict';

    var ADV__build = (function() {
        return {
            call : function() {
                if (!arguments.length) {
                    throw Error(
                        'Error of getting arguments -- ADV_App.call'
                    )
                }
                var _ADV = arguments[0];

                /**
                 * Initialize of ADV-model.
                 * @_exp -- context object.
                 */
                this.initializeModels(_ADV);

                /**
                 * Initialize of ADV-events.
                 * @_exp -- context object.
                 */
                this.initializeEvents(_ADV);
            },
            initializeModels : function(_ADV) {
                if (!_ADV.ADV__Models) {
                    throw Error(
                        'Error of getting global Model -- ADV_App.initializeModels'
                    )
                }
            },
            initializeEvents : function(_ADV) {
                if (!_ADV.ADV__Events) {
                    throw Error(
                        'Error of getting global Events -- ADV_App.initializeModels'
                    )
                }
            }
        }
    }());

    (addEventListener || Error)('DOMContentLoaded', function () {
        exports = ADV__build.call(exports);
    });
})(window.ADV__App = window.ADV__App || {}, document, addEventListener);