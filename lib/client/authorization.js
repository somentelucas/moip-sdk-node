import { Buffer } from "safe-buffer";
import environment from './environment';

let key;

const set = (credentials) => {
    if (credentials.accessToken)
        key = 'OAuth ' + credentials.accessToken;
    else
    if (credentials.token && credentials.key)
        key = 'Basic ' + new Buffer(credentials.token + ':' + credentials.key).toString('base64');
    else
        throw Error ('You must provide either an `accessToken` or your `token` with the corresponding `key`.');

    environment.set(credentials.production);
};

const get = () => {
    return key;
};

export default {
    set,
    get
}