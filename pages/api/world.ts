// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import envConstantNP from '../../express/config/envConstantNP';

const AesEncryption = require('aes-encryption');

let handler = (req: NextApiRequest, res: NextApiResponse) => {
	try {
        console.time("ttt");

        let envConstant = envConstantNP;
        
        console.timeEnd("ttt");

        console.log(envConstant);

		return res.status(200).json({ envConstant });
	} catch (error) {
		console.error(error);
		return res.status(200).json({ name: 'John Doe' });
	}
}

export default handler;