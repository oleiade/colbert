import { bankersRounding } from "./operations.ts";
import type { Currency } from "./currency.ts";

/**
 * Represents a monetary value with a specific currency.
 *
 * @example
 * ```typescript
 * import { Money, add, subtract, multiply, divide, IncompatibleCurrenciesError, DivisionByZeroError } from "./money.ts";
 * import { Currency } from "./currency.ts";
 *
 * const usd = new Currency("USD");
 * const money1 = new Money(100, usd);
 * const money2 = new Money(50, usd);
 *
 * const sum = add(money1, money2); // Money { amount: 150, currency: Currency { code: "USD" } }
 * const difference = subtract(money1, money2); // Money { amount: 50, currency: Currency { code: "USD" } }
 * const product = multiply(money1, 2); // Money { amount: 200, currency: Currency { code: "USD" } }
 * const quotient = divide(money1, 2); // Money { amount: 50, currency: Currency { code: "USD" } }
 * ```
 */
export class Money {
  /**
   * The amount of money.
   */
  amount: number;

  /**
   * The currency of the money.
   */
  currency: Currency;

  /**
   * Creates an instance of Money.
   * @param amount - The amount of money.
   * @param currency - The currency of the money.
   */
  constructor(amount: number, currency: Currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Calculates a percentage of the monetary amount.
   * @param percent - The percentage to calculate (must be between 0 and 100).
   * @returns A new Money instance representing the calculated percentage of the original amount.
   * @throws RangeError if the percent is not between 0 and 100.
   */
  percent(percent: number): Money {
    if (percent < 0 || percent > 100) {
      throw new RangeError("Percent must be between 0 and 100");
    }

    return new Money(
      bankersRounding(
        this.amount * (percent / 100),
        this.currency.decimalPlaces
      ),
      this.currency
    );
  }

  format(locale?: string): string {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: this.currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: this.currency.decimalPlaces,
    }).format(this.amount / Math.pow(10, this.currency.decimalPlaces));
  }
}
