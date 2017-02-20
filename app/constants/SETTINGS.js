/**
 * Getting of global variable.
 * Specification by TDP.
 *
 * @type {*|{}}
 */
const GLOBAL_OBJECT = window.pet4Data || {};


/**
 * @property CURRENT_PAGE {String}
 * @property CURRENT_REGION {Object}
 * @property CURRENT_USER {Object}
 * @property CURRENT_PRODUCT {Object}
 */
export const ADV_SETTINGS = {
    CURRENT_PAGE: GLOBAL_OBJECT.pageType || '',
    CURRENT_REGION: GLOBAL_OBJECT.region || {},
    CURRENT_USER: GLOBAL_OBJECT.user || {},
    CURRENT_PRODUCT: GLOBAL_OBJECT.product || {},
    CURRENT_CART: GLOBAL_OBJECT.cart || {}
};
