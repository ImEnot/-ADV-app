;(function(exports, document){
    function receiveEvent() {
        this.callEvent();
    }
    receiveEvent.prototype.callEvent = function() {
        // write initialize event
    };

    /**
     * Create default ADV Event.
     * @type object
     */
    exports.ADV__Events = receiveEvent;
}(window.ADV__App = window.ADV__App || {}, document));