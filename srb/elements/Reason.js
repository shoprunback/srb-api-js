import Main from './Main';
const _Reasons = {}; 
export default class Reasons extends Main {
    constructor() {
        super('reasons', _Reasons);
    }

    fetchOneEndpoint(code) {
        const endpoint = this.endpoint;
        return `${endpoint}/all?locale=${code}`;
    }
}