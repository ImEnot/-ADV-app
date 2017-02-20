/**
 * Import of PAGES constants.
 */
import {ADV_PAGE} from '../constants/PAGES';

/**
 * Import of LISTENER constants.
 */
import {ADV_LISTENER} from '../constants/LISTENER';

/**
 * Import of EventListener constructor.
 */
import EventListener from '../events/event.Listener';

/**
 * Import of EventDispatcher constructor.
 */
import EventDispatcher from '../events/event.Dispatcher';


let ADV__app = (function() {
    return {
        call : function() {
            if (!arguments.length) {
                throw Error(
                    'Error of getting arguments -- ADV_App.call'
                )
            }
            var _ADV = arguments[0];


            /**
             * Initialize of ADV-params.
             * @_ADV -- context object.
             */
            this.initializeParams(_ADV);

            /**
             * Initialize of ADV-listener.
             * @param DEFAULT_NAMESPACE.
             */
            this.initializeListener();

            /**
             * Initialize of ADV-event.
             */
            this.initializeEvents();
        },


        initializeListener : function() {
            /**
             * EventListener constructor.
             * @type {EventListener}
             *
             * @namespace used EventRoute.
             */
            let newEventListener = new EventListener({
                namespace: this.EventRoute || ADV_LISTENER.DEFAULT_NAMESPACE
            });

            /**
             * Init EventListener.
             */
            newEventListener._initListener();
        },


        initializeParams : function(_ADV) {
            /**
             * Getting of current event routing
             * @type {string}
             */
            this.EventRoute = _ADV.event || '';

            if (this.EventRoute == '') {
                throw Error(
                    'Error of getting event routing -- ADV_App.initializeEvents'
                )
            }


            /**
             * Сheck the page on existence of type.
             * @type {Array}
             */
            let Parse__EventRoute = this.EventRoute.split(':');

            for (var k in ADV_PAGE) {
                if (Parse__EventRoute[0] == ADV_PAGE[k]) {
                    break;
                } else {
                    throw Error(
                        'Can not get type of current page -- ADV_App.initializeEvents'
                    )
                }
            }


            /**
             * Getting of current lists of advertising integration.
             * @type {string}
             */
            this.IntegrationRoute = _ADV.integration || '';

            if (this.IntegrationRoute == '') {
                throw Error(
                    'Error of getting adv. integration -- ADV_App.initializeEvents'
                )
            }


            /**
             * Getting of special data about page or events .
             * @type {object}
             */
            this.SpecialData = _ADV.data || {};
        },


        initializeEvents : function() {
            let newEventDispatcher = new EventDispatcher({
                namespace: this.EventRoute || ADV_LISTENER.DEFAULT_NAMESPACE,
                detail: this.SpecialData
            });

            newEventDispatcher._createEvent();
        }
    }
}());
window.ADV__app = ADV__app;