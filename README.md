# not(booleanExpression): boolean

It's an alternative to writing `!(booleanExpression)`   
This should be helpful to anyone who has problems spotting the sneaky `!` negation operator.  
For me it's sometimes too tiny, too thin.

## Examples
```
not(false); // --> true

not(0); // --> true

not(1 === 2); // --> true

if ( not( isEmpty( [1,2,3,4] ) ) ) {
	console.log('The array contains items');
}
  // --> console: 'The array contains items'
```

## Installation
`npm i  @writetome51/not`
(This has no dependencies, so it doesn't require npm to install.  You can download the zip file  
from github if you want.)

## Loading
```
// if using TypeScript:
import {not} from '@writetome51/not';
// if using ES5 JavaScript:
var not = require('@writetome51/not').not;
```