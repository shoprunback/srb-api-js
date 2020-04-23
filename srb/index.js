import init from './init';
import { User, Customer } from './elements';
import Brand from './elements/Brand';
import http from './elements/http/http';
import Company from './elements/Company';
import Order from './elements/Order';
import Product from './elements/Product';
import Warehouse from './elements/Warehouse';
import Shipback from './elements/Shipback';
import Item from './elements/Item';
import Reasons from './elements/Reason';
import Quote from './elements/Quote';

export default {
    install(Vue, options) {
        const {env, url, pub_key} = options || 'staging';
        window.init = new init({ env, url, pub_key });
    },
    User,
    Order,
    Customer,
    Brand,
    http,
    Company,
    Product,
    Warehouse,
    Shipback,
    Item,
    Reasons,
    Quote
}