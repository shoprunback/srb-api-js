import Main from './Main';
import _Customer from './model/_Customer';
export default class Customer extends Main {
    constructor() {
        super(`shipbacks`, _Customer);
    }

    canFetchAll() {
        return false;
    }

    canFetch() {
        return true;
    }

    fetchOneEndpoint(id) {
        return `${this.endpoint}/${id}/customer`;
    }

    updateEndpoint(id) {
        return `${this.endpoint}/${id}/customer`;
    }
}