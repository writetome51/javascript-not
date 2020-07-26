# not(booleanExpression): boolean

It's an alternative to writing `!(booleanExpression)`.  
`not` is just a little more noticeable than the sneaky `!` negation operator.

## Examples
```js
not(false); // --> true

not(true); // --> false

not(1 === 2); // --> true

if ( not( isEmpty( [1,2,3,4] ) ) ) {
	console.log('The array contains items');
}
  // console: 'The array contains items'
```

## Installation
`npm i  @writetome51/not`  


## Loading
```js
import { not } from '@writetome51/not';
```
