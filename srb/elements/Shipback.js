import _Shipback from './model/_Shipback'; 
import { Main } from '.';
export default class Shipback extends Main {
    constructor() {
        super('shipbacks', _Shipback);
    }

    canCreate() {
        return true;
    }

    canUpdate() {
        return true;
    }

    canDelete() {
        return true;
    }

    canPost() {
        return true;
    }

    paymentEndpoint(shipback_id, provider) {
        return `${this.endpoint}/${shipback_id}/${provider}`;
    }

    async stripePay(shipback_id, payload = {}) {
        const endpoint = this.paymentEndpoint(shipback_id, 'stripe');
        return await this._post(endpoint, payload);
    }
    
    async freePay(shipback_id, payload = {}) {
        const endpoint = this.paymentEndpoint(shipback_id, 'free');
        return await this._post(endpoint, payload);
    }

    async paypalPay(shipback_id, payload = {}) {
        const endpoint = this.paymentEndpoint(shipback_id, 'paypal');
        return await this._post(endpoint, payload);
    }
}