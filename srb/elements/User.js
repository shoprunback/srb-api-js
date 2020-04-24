import _User from './model/User';
import Main from './Main'; 
import { setCookie } from '../util';
export default class User extends Main{
    constructor() {
        super('user', _User);
    }

    fetchEndpoint() {
        return 'me';
    }

    updateEndpoint() {
        return 'me';
    }

    fetchTempTokenEndpoint() {
        return 'anonymous';
    }

    getRefAtt() {
        return 'id';
    }

    canFetchAll() {
        return false;
    }

    canFetchOwn() {
        return true;
    }

    canHTTP() {
        return true;
    }
    
    async fetchTempToken(shipback_id) {
        const { url } = this._store;
        const payload = JSON.stringify({ shipback_id, user_agent: navigator.userAgent });
        const httpURL = `${url}/${this.fetchTempTokenEndpoint()}`;
        let { auth_token } = await this._http()._post(httpURL, {}, payload) || {};
        auth_token = auth_token == undefined ? '' : auth_token;
        setCookie('_pup_key', auth_token, 30);
        return auth_token;
    }
}