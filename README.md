# not(booleanExpression): boolean

It's an alternative to writing `!(booleanExpression)`   
This should be helpful to anyone who has problems spotting the sneaky `!` negation operator.

## Examples
```
not(false); // --> true

not(1 === 2); // --> true

if ( not( isEmpty( [1,2,3,4] ) ) ) {
	console.log('The array contains items');
}
  // console: 'The array contains items'
  
let x = 1, n = null;
not(x === null || n !== null); // --> true
```

## Installation
`npm i  @writetome51/not`  


## Loading
```
// if using TypeScript:
import {not} from '@writetome51/not';
// if using ES5 JavaScript:
var not = require('@writetome51/not').not;
```
