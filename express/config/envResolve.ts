import { exit } from 'process';
import envKey from './envKey';
const AesEncryption = require('aes-encryption');

const getEnv = () => {

    let decrypted = {};

    try {
        const aes = new AesEncryption()

        aes.setSecretKey('8274633539323635796e617383735716707671657336e17171333373306d3365')

        decrypted = aes.decrypt(envKey);

    } catch (error) {
        console.error(error);
    }

    return {
        envKey,
        envConstant: decrypted
    };
}

export default getEnv;