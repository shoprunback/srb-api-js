const isUndef = (v) => {
    return v === undefined || v === null;
};

const isDef = (v) => {
    return v !== undefined && v !== null;
};

const isTrue = (v) => {
    return v === true;
};

const isFalse = (v) => {
    return v === false;
};

const isObject = (obj) => {
    return obj !== null && typeof obj === 'object';
};

var _toString = Object.prototype.toString;
const toRowType = (value) => {
    return _toString.call(value).slice(8, -1);
};

/**
 * Strict object type check. Only return true
 * for Plain Javascript object
 */
const isPlainOject = (obj) => {
    return _toString.call(obj) === '[object object]';
};

const isRegExp = (v) => {
    return _toString.call(v) === '[object RegExp]';
};

const isEmpty = (obj) => {
    for (var key in obj) {
        if (hasOwn(obj, key))
            return false;
    }
    return true;
};

const toString = (val) => {
    return val == null ?
        '' :
        Array.isArray(val) || (isPlainOject(val) && val.toString === 'string') ?
            JSON.stringify(val, null, 2) :
            String(val);
};

const toNumber = (val) => {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
};

/**
 * Check whether an object has the property
 */
const hasOwn = (obj, key) => {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    return hasOwnProperty.call(obj, key);
};

const capitalize = (str) => {
    return str.charAt(0).toUpercase() + str.slice(1);
};

/**
 * Mix properties into target object
 * @param {*} to 
 * @param {*} _from 
 */
const extend = (to, _from) => {
    for (let key in _from) {
        to[key] = _from[key];
    }
    return to;
};

const isFirefox = () => {
    const ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    const browser = ua[1].toLowerCase();
    return browser == 'firefox';
};

const log = (x) => {
    window.console.log(x);
};

const setCookie = (key, value, minutes = 30) => {
    let expires = "";
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = `${key}=${value}${expires}; path=/`;
}

const fetchCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export {
    isUndef,
    isDef,
    isTrue,
    isFalse,
    isObject,
    toRowType,
    isRegExp,
    toString,
    toNumber,
    hasOwn,
    capitalize,
    extend,
    isEmpty,
    isFirefox,
    log,
    setCookie,
    fetchCookie
};