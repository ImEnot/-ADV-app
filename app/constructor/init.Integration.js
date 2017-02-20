/**
 * Import of SETTINGS constants.
 */
import {ADV_SETTINGS} from '../constants/SETTINGS';

/**
 * Import of PAGES constants.
 */
import {ADV_PAGE} from '../constants/PAGES';



class ADV_Integration{
    constructor(event) {
        if (!event || typeof event !== 'object') {
            throw Error(
                'Error of getting event -- class ADV_Integration'
            )
        }

        /**
         * Getting data of event from EventListener.
         * @type {object}
         */
        this.event = event;
    }
    _initIntegration() {}
}
export default ADV_Integration;
