<p align="center"><img src="logo.png" alt="colbert logo"/></p>
<h1 align="center">Types and utilities for handling currencies and money operations in Typescript.</h1>

<p align="center">
    <a href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
</p>

Colbert is a Typescript library providing types and utilities for handling
currencies and money operations. This project built using Deno, is currently in
version `0.1.0` and is licensed under the MIT license.

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

Checkout the package's [JSR page](https://jsr.io/@oleiade/colbert) for more
installation options, such as pnpm, yarn, bun, etc.

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

### Types

#### Money

The `Money` type is ubiquitous to this library and represents an amount of money
in a given currency. It is defined as follows:

| Property   | Type                            | Description                                                                                                                                                                                                                                                                                                                                                        |
|------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amount     | number                          | The amount of money, represented as an integer without decimal places. The integer representation avoids issues with floating point precision, especially for calculations involving money. The actual value is scaled based on the currency's decimal places. For example, in USD (which has 2 decimal places), an internal value of 10025 represents 100.25 USD. |
| currency   | [Currency](#currency)           | The currency in which the amount is expressed. This defines the number of decimal places used when interpreting the `amount` property and formatting the value (_e.g._, 2 decimal places for USD).                                                                                                                                                                 |
| percentage | `(percentage: number) => Money` | A method to compute a given percentage of the Money instance. It returns a new Money instance representing the percentage of the original value.                                                                                                                                                                                                                   |
| format     | `(locale: string) => string`    | A method to format the Money instance as a string, using the provided locale. The locale is a string representing a BCP 47 language tag, such as `en-US`, `fr-FR`, etc. The method returns a string representing the formatted amount, including the currency symbol and the correct number of decimal places.                                                     |

#### Currency

The `Currency` type represents a currency and is defined as follows:

| Property      | Type                          | Description                                                                      |
|---------------|-------------------------------|----------------------------------------------------------------------------------|
| code          | [CurrencyCode](#currencycode) | The ISO4217 currency code (_e.g._: USD, EUR, JPY)                                |
| decimalPlaces | number                        | The number of decimal places used by the currency (_e.g_: USD has 2, JPY has 0). |
| name          | string                        | The currency name.                                                               |
| symbol        | string                        | The currency symbol (_e.g._: $, €, etc.).                                        |

Note that the library exports every ISO4217 currencies as const objects with
uppercased names, such as `USD`, `EUR`, `JPY`, etc. Ready for your to integrate
in your code without efforts.

#### CurrencyCode

An enum representing the currency codes defined by ISO4217, in the form of
`CurrencyCode.XXX`.

### Operations

| Function | Description                                                                                          |
|----------|------------------------------------------------------------------------------------------------------|
| add      | A function to add two Money instances, and returns the result as a new Money instance.               |
| subtract | A function to subtract two Money instances, and returns the result as a new Money instance.          |
| multiply | A function to multiply a Money instance by a scalar, and returns the result as a new Money instance. |
| divide   | A function to divide a Money instance by a scalar, and returns the result as a new Money instance.   |

## License

This project is licensed under the MIT License.

## Credits & Copyright

Logo by the incredibly talented
[Lola Nun](https://www.fiverr.com/lolanun?source=order_page_summary_seller_link).
