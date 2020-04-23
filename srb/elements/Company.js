import Main from './Main';
import _Company from './model/_Company';
export default class Company extends Main {
    constructor() {
        super(`companies`, _Company);
    }

    fetchEndpoint() {
        return 'company';
    }

    updateEndpoint() {
        return 'company';
    }

    canUpdate() {
        return true;
    }

    canFetch() {
        return false;
    }

    canFetchOwn() {
        return true;
    }

    async countries(slug) {
        return await this.hasMany('countries', slug);
    }
}