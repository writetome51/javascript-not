import {not} from './index.js';


if (not(false)) console.log('test 1 passed');
else console.log('test 1 FAILED');

if (not('')) console.log('test 2 passed');
else console.log('test 2 FAILED');

if (not(0)) console.log('test 3 passed');
else console.log('test 3 FAILED');

if (not(1 === 2))  console.log('test 4 passed');
else console.log('test 4 FAILED');

if (not('hello'))  console.log('test 5 FAILED');
else console.log('test 5 passed');

if (not([]))  console.log('test 6 FAILED');
else console.log('test 6 passed');

if (not('0')) console.log('test 7 FAILED');
else console.log('test 7 passed');

let n = null, x = 1;
if (not(x === null || n !== null)) console.log('test 8 passed');
else console.log('test 8 FAILED');
