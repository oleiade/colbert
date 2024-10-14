# @oleiade/colbert

## Overview

`@oleiade/colbert` is a Deno module that provides utilities for handling currencies and money operations. This project is currently in version `0.1.0` and is licensed under the MIT license.

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