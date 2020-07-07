import _store from "../states/store";
import http from "./http/http";
import { isUndef } from "../util";
export default class Main {
    constructor(endpoint, store) {
        this._store = _store;
        this.store = store;
        this.endpoint = endpoint;
    }

    getRefAtt() {
        return "id";
    }

    fetchEndpoint() {
        return this.endpoint;
    }

    fetchAllEndpoint() {
        return this.endpoint;
    }

    fetchOneEndpoint(id) {
        const endpoint = this.endpoint;
        return `${endpoint}/${id}`;
    }

    createEndpoint(id = null) {
        return id == null ? this.endpoint : `${this.endpoint}/${id}`;
    }

    updateEndpoint(id, ref_id = null) {
        const endpoint = this.endpoint;
        return ref_id == null
            ? `${endpoint}/${id}`
            : `${endpoint}/${id}/${ref_id}`;
    }

    deleteEndpoint(id, ref_id = null) {
        const endpoint = this.endpoint;
        return ref_id == null
            ? `${endpoint}/${id}`
            : `${endpoint}/${id}/${ref_id}`;
    }

    canFetchAll() {
        return true;
    }

    canFetchOwn() {
        return false;
    }

    async fetchOwn() {
        if (!this.canFetchOwn()) throw new TypeError("Can't use fetch all");
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${this.fetchEndpoint()}`;
        return await http._get(httpURL, { token: auth_token });
    }

    async fetchAll() {
        if (!this.canFetchAll()) throw new TypeError("Can't use fetch all");
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${this.fetchAllEndpoint()}`;
        return await http._get(httpURL, { token: auth_token });
    }

    canFetch() {
        return true;
    }

    async fetch(id) {
        if (!this.canFetch()) throw new TypeError("Can't use fetch");
        if (isUndef(id)) throw new TypeError("id is not null");
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${this.fetchOneEndpoint(id)}`;
        return await http._get(httpURL, { token: auth_token });
    }

    async hasMany(refName, id) {
        const endpoint = this.endpoint;
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${endpoint}/${id}/${refName}`;
        return await http._get(httpURL, { token: auth_token });
    }

    canNested() {
        return false;
    }

    nestedEndpoint(main_id, nested_name, nested_id) {
        const endpoint = this.endpoint;
        return `${endpoint}/${main_id}/${nested_name}/${nested_id}`;
    }

    async fetchNested(main_id, nested_name, nested_id) {
        if (!this.canNested()) throw new TypeError("Not allow fetch nested");
        if (isUndef(main_id)) throw new TypeError("main_id is not null");
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${this.nestedEndpoint(
            main_id,
            nested_name,
            nested_id
        )}`;
        return await http._get(httpURL, { token: auth_token });
    }

    canCreate() {
        return false;
    }

    async create(payload = {}, ref_id = null) {
        if (!this.canCreate()) throw new TypeError("Not allow create!");
        payload = JSON.stringify(payload);
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${this.createEndpoint(ref_id)}`;
        return await http._post(httpURL, { token: auth_token }, payload);
    }

    canUpdate() {
        return false;
    }

    async update(id, payload = {}, ref_id = null) {
        if (!this.canUpdate()) throw new TypeError("Not allow update!");
        if (isUndef(id)) throw new TypeError("id is not null");
        payload = JSON.stringify(payload);
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${this.updateEndpoint(id, ref_id)}`;
        return await http._put(httpURL, { token: auth_token }, payload);
    }

    canDelete() {
        return false;
    }

    async delete(id, ref_id = null) {
        if (!this.canDelete()) throw new TypeError("Not allow delete!");
        if (isUndef(id)) throw new TypeError("id is not null");
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${this.deleteEndpoint(id, ref_id)}`;
        return await http._delete(httpURL, { token: auth_token });
    }

    canHTTP() {
        return false;
    }

    _http() {
        if (!this.canHTTP()) throw new TypeError("Not allow http request!");
        return http;
    }

    canPost() {
        return false;
    }

    async _post(endpoint, payload) {
        if (!this.canPost()) throw new TypeError("Not allow http post!");
        const { url, auth_token } = this._store;
        const httpURL = `${url}/${endpoint}`;
        return await http._post(httpURL, { token: auth_token }, payload);
    }
}
