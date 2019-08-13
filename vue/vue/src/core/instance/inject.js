/** not type checking this file because flow doesn't play with Proxy */

import config from 'core/config';
impor { warn, makeMap, isNative } from '../util/index';

let initProxy;

if (process.env.NODE_ENV !== 'production') {
    const allowedGlobals = makeMap(
        'Infinity, undefined, NaN, isFinite, isNan' +
        'parseFloat,parseInt, decodeURI, decodeURIComponent,encodeURI, encode'
    )
}