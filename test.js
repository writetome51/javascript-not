var not = require('./index').not;


if (not(false)) console.log('test 1 passed');
else console.log('test 1 failed');

if (not('')) console.log('test 2 passed');
else console.log('test 2 failed');

if (not(0)) console.log('test 3 passed');
else console.log('test 3 failed');

if (not(1 === 2))  console.log('test 4 passed');
else console.log('test 4 failed');

if (not('hello'))  console.log('test 5 failed');
else console.log('test 5 passed');

if (not([]))  console.log('test 6 failed');
else console.log('test 6 passed');

if (not('0')) console.log('test 7 failed');
else console.log('test 7 passed');
