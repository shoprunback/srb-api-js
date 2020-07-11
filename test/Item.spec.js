import init from "../srb/init";
import srb from "../srb";
import "isomorphic-fetch";
import config from "./config";

window.init = new init(config);
const itemApi = new srb.Item();

describe("Item API", () => {
    test("Fetch refund modes", async (done) => {
        const shipbackId = "445144c1-09b7-4a22-a98f-c275ab46ad8b";
        const returnedItemId = "1406bcfe-287e-4687-96c8-e3a21602ecde";
        const json = await itemApi.fetchRefundModes(shipbackId, returnedItemId);
        expect(json.cash.proposed).toBeTruthy();
        expect(json.store_credit.proposed).toBeTruthy();
        expect(json.voucher.proposed).toBeTruthy();
        expect(json.exchange.proposed).toBeTruthy();
        done();
    });
});
