import _Warehouse from './model/_Warehouse';
import Main from './Main'; 
export default class Warehouse extends Main {
    constructor() {
        super('warehouses', _Warehouse);
    }

    canUpdate() {
        return false;
    }

    canDelete() {
        return false;
    }

    canCreate() {
        return true;
    }


}