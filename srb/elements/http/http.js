import { checkError } from '../error';
import { METHOD_GET, METHOD_POST, METHOD_UPDATE, METHOD_DELETE } from '../constant/index';

const httpRequest = (url, method = METHOD_GET, headers = {}, body = undefined ) => {
    return fetch(url, {
        method,
        headers,
        body
    });
}

const httpRequestJson = (url, method, headers = {}, payload = undefined) => {
    return httpRequest(url, method, headers, payload)
        .then(checkError)
        .then(res => res.json());
}

const httpHeader = (options = {}) => {
    const { header, token } = options;
    if (header != undefined && token == undefined) return header;
    let headers = jsonHeader();
    if (token == undefined && header == undefined)  return headers;
    const auth_header = { 'Authorization': `Token token=${token}` };
    return Object.assign(headers, auth_header);
}

const jsonHeader = () => {
    return { 
        'Content-Type': 'application/json' 
    };
}

const _get = async (url, options = {}) => {
    const header = httpHeader(options);
    return await httpRequestJson(url, METHOD_GET, header);
}

const _post = async (url, options, payload = undefined) => {
    const header = httpHeader(options);
    return await httpRequestJson(url, METHOD_POST, header, payload);
}

const _put = async (url, options, payload = undefined) => {
    const header = httpHeader(options);
    return await httpRequestJson(url, METHOD_UPDATE, header, payload);
}

const  _delete = async (url, options) => {
    const header = httpHeader(options);
    return await httpRequest(url, METHOD_DELETE, header);
}

export default {
    _get,
    _post,
    _delete,
    _put,
    httpRequest,
    httpRequestJson
};