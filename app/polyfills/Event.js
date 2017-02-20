window.Event = window.Event || function (eventName) {
    var event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, {
            some: 'data'
        });
    return event;
};
