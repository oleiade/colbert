<p align="center"><img src="logo.png" alt="colbert logo"/></p>
<h1 align="center">Money handling in Typescript</h1>

<p align="center">
    <a href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
</p>

Colbert is a TypeScript-first library designed for precise and currency and monetary operations.
Colbert was built from the ground up for TypeScript, ensuring full type safety, precise financial calculations, and intuitive APIs that eliminate the common pitfalls of floating-point errors and inconsistent rounding.
Every operation is designed for financial precision, using banker’s rounding to minimize rounding errors and ensure accurate results, even across multiple currency operations.

It seamlessly integrates with Deno, Node.js, and browser environments, offering intuitive APIs that prevent floating-point errors.

## Why Colbert?

* Eliminate floating-point precision issues in financial calculations.
* Built-in currency management with customizable decimal handling.
* Locale-based formatting for accurate currency display worldwide.
* TypeScript-first design for full type safety and developer experience.

## Installation

Install Colbert for TypeScript projects (compatible with Deno, Node.js, and browsers):
```bash
deno add jsr:@oleiade/colbert
# or for npm
npm install @oleiade/colbert
```
_For more options like Yarn or Pnpm, see the JSR page._

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

The Money class is at the core of Colbert, representing precise monetary values in various currencies. It ensures financial accuracy across all operations, making it easy to work with amounts without worrying about floating-point errors or mismatched currencies. It is defined as follows:

| Property   | Type                            | Description                                                                                                                                                                                                                                                                                                                                                        |
|------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amount     | number                          | The amount of money, represented as an integer without decimal places. The integer representation avoids issues with floating point precision, especially for calculations involving money. The actual value is scaled based on the currency's decimal places. For example, in USD (which has 2 decimal places), an internal value of 10025 represents 100.25 USD. |
| currency   | [Currency](#currency)           | The currency in which the amount is expressed. This defines the number of decimal places used when interpreting the `amount` property and formatting the value (_e.g._, 2 decimal places for USD).                                                                                                                                                                 |
| percentage | `(percentage: number) => Money` | A method to compute a given percentage of the Money instance. It returns a new Money instance representing the percentage of the original value.                                                                                                                                                                                                                   |
| format     | `(locale: string) => string`    | Format your monetary values based on any region, using locale-specific conventions. The format method allows you to display amounts in the correct format for users worldwide, whether in dollars, euros, or any other currency.                                                     |

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
