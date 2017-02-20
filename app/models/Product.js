/**
 * @typedef ModelDataProduct
 * @property {String} id
 * @property {String} name
 * @property {String} currency
 * @property {Array} category
 * @property {Number} price retail
 * @property {Number} price gold
 */
class ProductModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.currency = '';
        this.category = [];
        this.price = {
            retail : 0,
            gold : 0
        };
    }
}
export default ProductModel;