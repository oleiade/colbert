<p align="center"><img src="logo.png" alt="colbert logo"/></p>
<h1 align="center">Types and utilities for handling currencies and money operations in Typescript.</h1>

<p align="center">
    <a href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
    <a href="https://pkg.go.dev/github.com/oleiade/colbert#pkg-types"><img src="https://pkg.go.dev/badge/github.com/oleiade/colbert#pkg-types.svg" alt="Go Documentation"></a>
</p>

Colbert is a Typescript library providing types and utilities for handling currencies and money operations. This project built using Deno, is currently in version `0.1.0` and is licensed under the MIT license.

## Installation

### Deno

Add the package to your project:
```bash
deno add jsr:@oleiade/colbert
```

And import the module:
```typescript
import { Currency, Money } from "@oleiade/colbert";
```

### Npm

Add the package to your project:
```bash
npx jsr add @oleiade/colbert
```

And import the module:
```typescript
import * as colbert from "@oleiade/colbert";
```

### More

Checkout the package's [JSR page](https://jsr.io/@oleiade/colbert) for more installation options, such as pnpm, yarn, bun, etc.


## Usage

Here is a basic example of how to use the colbert module:

```typescript
import { Money, USD, subtract, add } from "@oleiade/colbert";

// The Amount class holds the amount of money and the currency
// in which the amount is expressed.
const left = new Money(100, USD);
const right = new Money(20, USD);


// You can perform basic operations on the Money instances
// using the dedicated add, subtract, multiply and divide functions. All
// operations use bankers rounding to ensure the result is as accurate as possible.
// However, note that the more operations are performed, the more the result
// will be subject to floating point errors.
//
// The result of these operations is a new Money instance.
//
// They operation will throw an error if the currencies of the
// two Money instances do not match.
const subtracted = subtract(left, right);
const added = add(left, right);
const multiplied = multiply(left, 2);
const divided = divide(left, 2);

// At any point in time, you can also compute a given percentage of a Money instance
// using the percentage method.
const left.percent(10);
```

## API

The colbert module provides the following types and functions:
* **Money**: A class representing an amount of money in a given currency.
    * **amount** property: The amount of money.
    * **currency** property: The currency in which the amount is expressed.
    * **percentage**: A method to compute a given percentage of the Money instance.
* **Currency**: A class representing a currency.
    * **code** property: The currency code.
    * **decimalDigits** property: The number of decimal digits used by the currency.
    * **name** property: The currency name.
    * **symbol** property: The currency symbol.
* **CurrencyCode**: An enum representing the currency codes.
* **USD, EUR, JPY, etc** constant objects: Instances of the Currency class representing the most common currencies.
* **add**: A function to add two Money instances.
* **subtract**: A function to subtract two Money instances.
* **multiply**: A function to multiply a Money instance by a scalar.
* **divide**: A function to divide a Money instance by a scalar.

## License

This project is licensed under the MIT License.

## Credits & Copyright

Logo by the incredibly talented [Lola Nun](https://www.fiverr.com/lolanun?source=order_page_summary_seller_link).