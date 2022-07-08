import { exit } from "process";

const envs = 'd2ff3710b71a4c8a31928fffa555688fddcc15d1e05ff94a47caaf55725f77d7';

const AesEncryption = require('aes-encryption');

let decrypted = {};

try {
    const aes = new AesEncryption()

    let a = Math.random();

    console.log(a);

    if(a > 0.5){
        aes.setSecretKey('7274633539323635796e617383735716707671657336e17171333373306d3365')        
    } else {
        aes.setSecretKey('8274633539323635796e617383735716707671657336e17171333373306d3365')        
    }

    decrypted = aes.decrypt(envs);
} catch (error) {
    console.error(error);
    exit();
}

export default decrypted;