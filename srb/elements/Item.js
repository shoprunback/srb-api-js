import Main from './Main';
import _Item from './model/Item';
export default class Item extends Main {
    constructor() {
        super(`shipbacks`, _Item);
    }

    canFetchAll() {
        return false;
    }

    canCreate() {
        return true;
    }

    canDelete() {
        return true;
    }

    canUpdate() {
        return true;
    }

    fetchOneEndpoint(id) {
        return `${this.endpoint}/${id}/items`;
    }

    createEndpoint(id) {
        return `${this.endpoint}/${id}/returned_items`;
    }

    deleteEndpoint(shipback_id, returned_item_id) {
        if(returned_item_id == null || returned_item_id == undefined) throw new TypeError("return_id is not null");
        const endpoint = this.endpoint;
        return `${endpoint}/${shipback_id}/returned_items/${returned_item_id}`;
    }

    updateEndpoint(shipback_id, returned_item_id) {
        if(returned_item_id == null || returned_item_id == undefined) throw new TypeError("return_id is not null");
        const endpoint = this.endpoint;
        return `${endpoint}/${shipback_id}/returned_items/${returned_item_id}`;
    }
}