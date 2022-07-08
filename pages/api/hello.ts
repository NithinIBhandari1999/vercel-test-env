// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import envResolve from '../../express/config/envResolve';
import envConstantNP from '../../express/config/envConstantNP';

const AesEncryption = require('aes-encryption');

let handler = (req: NextApiRequest, res: NextApiResponse) => {
	try {
        console.time("ttt");

        let envConstant = envResolve();

        // const aes = new AesEncryption()
        // aes.setSecretKey('7274633539323635796e617383735716707671657336e17171333373306d3365')
        // // Note: secretKey must be 64 length of only valid HEX characters, 0-9, A, B, C, D, E and F

        // const encrypted = aes.encrypt(JSON.stringify(envConstant));
        // const decrypted = aes.decrypt(encrypted);

        // console.log('encrypted >>>>>>', encrypted);
        // console.log('decrypted >>>>>>', decrypted);
        // console.log('decrypted b >>>>>>', decrypted === JSON.stringify(envConstant));

        console.timeEnd("ttt");

		return res.status(200).json({ envConstant, envConstantNP });
	} catch (error) {
		console.error(error);
		return res.status(200).json({ name: 'John Doe' });
	}
}

export default handler;