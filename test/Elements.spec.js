import User from '../srb/elements/User';
import init from '../srb/init';
import 'isomorphic-fetch';

const env = 'staging';
window.init = new init({ env });

test('compiling android goes as expected', async done => {
	const user = new User();
	const shipback_id = 'ab01d9d7-5ae8-4505-8232-d1dd27c84d70';
	let isWorking = true;
	try {
		await user.fetchTempToken(shipback_id);
	} catch(err) {
		isWorking = false;
	}
	expect(isWorking).toBe(true);
	done();
});