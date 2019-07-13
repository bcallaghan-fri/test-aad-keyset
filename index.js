const { Issuer } = require('openid-client');

async function run() {
	const aad = await Issuer.discover('https://login.microsoftonline.com/organizations/v2.0');
	const keystore = await aad.keystore();
	console.log(keystore);
}

run()
.catch(console.error)
.then(() => process.exit());