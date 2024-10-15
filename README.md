<p align="center"><img src="logo.png" alt="colbert logo"/></p>
<h1 align="center">Types and utilities for handling currencies and money operations in Typescript.</h1>

<p align="center">
    <a href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
    <a href="https://pkg.go.dev/github.com/oleiade/colbert#pkg-types"><img src="https://pkg.go.dev/badge/github.com/oleiade/colbert#pkg-types.svg" alt="Go Documentation"></a>
</p>

Colbert is a Typescript library providing types and utilities for handling currencies and money operations. This project built using Deno, is currently in version `0.1.0` and is licensed under the MIT license.

## Installation

To install the module, you can import it directly in your Deno project:

```typescript
import { Currency, Money } from "@oleiade/colbert";
```

## Usage

Here is a basic example of how to use the colbert module:

```typescript
import { Currency, Money } from "@oleiade/colbert";

const usd = Currency.usd();
const amount = new Money(BigInt(100), usd);
const otherAmount = new Money(BigInt(20), usd);

amount.subtract(otherAmount);

console.log(amount);
console.log(otherAmount);
```

## License

This project is licensed under the MIT License.
