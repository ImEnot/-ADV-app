class eventDispatcher {
    constructor(params)  {
        if (!params) {
            throw Error(
                'Error of getting params -- class eventDispatcher'
            )
        }

        /**
         * Getting of method details.
         * @type {detail|*|number}
         *
         * * {
         * *    id : 'product ID'
         * * }
         */
        this.detail = params.detail;


        /**
         * Getting of method namespace.
         * @type {getInfo.event|*|Event|string|.exports.browser.event|event}
         *
         * * listener:adv
         */
        this.namespace = params.namespace;


        /**
         * Getting of callback function.
         * @type {params.callback|*}
         */
        this.callback = params.callback;
    }
    _createEvent() {
        let NewEvent = new CustomEvent(this.namespace, {
            detail: this.detail
        });
        window.dispatchEvent(NewEvent);
    }
}
export default eventDispatcher;