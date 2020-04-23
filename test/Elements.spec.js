import User from '../srb/elements/User';
import init from '../srb/init';
import 'isomorphic-fetch';

const env = 'staging';
window.init = new init({ env });

test('compiling android goes as expected', async done => {
	const user = new User();
	console.log(user);
	const shipback_id = 'ab01d9d7-5ae8-4505-8232-d1dd27c84d70';
	const response = await user.fetchTempToken(shipback_id);
	console.log(response);
	expect(response.status).toBe(200);
	done();
});