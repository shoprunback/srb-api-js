import {isUndef, isDef, fetchCookie } from './util';
import store from './states/store';
export default class init {
    constructor(config) {
        const { url, pub_key, env } = config || {};
        this.url = url;
        this._store = store;
        this.auth_token = pub_key;
        this.env = env;
        this.useEnv();
    }

    useEnv() {
        if(this.env == 'production') this.useProdURL();
        this.useStagingURL();
    }

    setURL(url) {
        if(isUndef(this.url)) {
            this._store.url = url;
            return;
        }
        this._store.url = this.url;
    }

    fetchToken() {
        if(isDef(this.auth_token)) {
            this._store.auth_token = this.auth_token;
            return;
        }
        this._store.auth_token = fetchCookie('_pup_key');
    }

    useStagingURL() {
        this.setURL(this.fetchStagingURL());
        this.fetchToken();
    }

    useProdURL() {
        this.setURL(this.fetchProdURL());
        this.fetchToken();
    }

    fetchStagingURL() {
        return 'https://staging.dashboard.shoprunback.com/api/v1';
    }

    fetchProdURL() {
        return 'https://dashboard.shoprunback.com/api/v1';
    }
}