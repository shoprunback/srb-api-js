import _Product from './model/_Product';
import Main from './Main'; 
export default class Product extends Main {
    constructor() {
        super('products', _Product);
    }

    canCreate() {
        return true;
    }

    canUpdate() {
        return true;
    }

    canHTTP() {
        return true;
    }

    deleteImageEndpoint(id) {
        return `products/${id}/image`;
    }

    async deleteProductImage(product_id) {
        const { url, auth_token } = this._store;
        const endpoint = this.deleteImageEndpoint(product_id);
        const httpURL = `${url}/${endpoint}`;
        return await this._http()._delete(httpURL, { token: auth_token })
    }
}