import Main from './Main';
const _Quote = {}; 
export default class Reasons extends Main {
    constructor() {
        super('shipbacks', _Quote);
    }

    canFetchAll() {
        return false;
    }

    canNested() {
        return true;
    }

    fetchOneEndpoint(id) {
        return `${this.endpoint}/${id}/quotes`;
    }

    async fetchQuote(shipback_id, mode) {
        return await this.fetchNested(shipback_id, 'quotes', mode);
    }

}