import _Order from './model/_Order';
import Main from './Main'; 
export default class Order extends Main {
    constructor() {
        super('orders', _Order);
    }

    canCreate() {
        return true;
    }

    canNested() {
        return true;
    }

    async items(order_id) {
        return await this.hasMany('items', order_id);
    }

    async item(order_id, item_id) {
        return await this.fetchNested(order_id, 'items', item_id);
    }
}