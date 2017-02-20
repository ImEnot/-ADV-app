import ADV_Integration from '../constructor/init.Integration';

class EventListener {
    constructor(params) {
        if (!params) {
            throw Error(
                'Error of getting params -- class EventListener'
            )
        }

        /**
         * Getting of method namespace.
         * @type {getInfo.event|*|Event|string|.exports.browser.event|event}
         *
         * * listener:adv
         */
        this.namespace = params.namespace;
    }

    _initListener() {
        function callListener(e) {
            if (!e.detail) {
                return;
            }

            /**
             * ADV_Integration constructor.
             * @type {ADV_Integration}
             */
            let newIntegration = new ADV_Integration(e.detail);

            /**
             * Initialize integration.
             */
            newIntegration._initIntegration();
        }
        window.addEventListener(this.namespace, function(event) {
            callListener(event)
        });
    }
}
export default EventListener;