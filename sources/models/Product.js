;(function(exports){
    /**
     * @typedef ModelDataProduct
     * @property {String} id
     * @property {String} name
     * @property {String} currency
     * @property {Array} category
     * @property {Array} subcategory
     * @property {Number} unitPrice
     * @property {Number} unitSalesPrice
     */
    var defaultProductModel = {
        id: '',
        name: '',
        description: '',
        currency: '',
        url: '',
        imageUrl: '',
        category: [],
        subcategory: [],
        unitPrice: 0,
        unitSalePrice: 0
    };

    /**
     * Create default Product Model.
     * @type object
     */
    exports.ADV__Models = {
        product : defaultProductModel
    };
}(window.ADV__App = window.ADV__App || {}));