import Main from './Main';
import _Brand from './model/_Brand';
export default class Brand extends Main {
    constructor() {
        super(`brands`, _Brand);
    }

    canCreate() {
        return true;
    }

    canDelete() {
        return true;
    }

    canUpdate() {
        return true;
    }
}