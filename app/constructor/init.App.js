/**
 * Import of EVENTS constants.
 */
import {ADV_EVENTS} from '../constants/EVENTS';

/**
 * Import of EventListener constructor.
 */
import EventListener from '../events/event.Listener';

/**
 * Import of EventDispatcher constructor.
 */
import EventDispatcher from '../events/event.Dispatcher';


const ADV__app = (function() {
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
             *
             * @type {EventListener}
             * @namespace used EventRoute.
             */
            let newEventListener = new EventListener({
                namespace: this.EventRoute || ADV_EVENTS.DEFAULT
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
                    'Error of getting event routing -- ADV_App.EventRoute'
                )
            }


            /**
             * Сheck the page on existence of type.
             * @type {string}
             */
            let check__EventRoute = '';

            for (var k in ADV_EVENTS) {
                if (this.EventRoute == ADV_EVENTS[k]) {
                    check__EventRoute = 'Success';
                }
            }

            if (check__EventRoute !== 'Success') {
                throw Error(
                    'Can not get type of current page -- ADV_App.EventRoute'
                )
            }


            /**
             * Getting of current lists of advertising integration.
             * @type {string}
             */
            this.IntegrationRoute = _ADV.integration || '';

            if (this.IntegrationRoute == '') {
                throw Error(
                    'Error of getting adv. integration -- ADV_App.IntegrationRoute'
                )
            }


            /**
             * Getting of special data about page or events .
             * @type {object}
             */
            this.SpecialData = _ADV.data || {};
        },


        initializeEvents : function() {
            /**
             * EventDispatcher constructor.
             *
             * @type {EventDispatcher}
             * @params used EventRoute, IntegrationRoute, SpecialData.
             */
            let newEventDispatcher = new EventDispatcher({
                namespace: this.EventRoute || ADV_EVENTS.DEFAULT,
                detail: {
                    integration: this.IntegrationRoute,
                    data: this.SpecialData
                }
            });

            /**
             * Create Event.
             */
            newEventDispatcher._createEvent();
        }
    }
}());
window.ADV__app = ADV__app;