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
  private readonly _amount: number;

  /**
   * The currency of the money.
   */
  private readonly _currency: Currency;

  /**
   * Creates an instance of Money.
   * @param amount - The amount of money.
   * @param currency - The currency of the money.
   */
  constructor(amount: number, currency: Currency) {
    if (!Number.isInteger(amount) || isNaN(amount)) {
      throw new TypeError("Amount must be an integer");
    }

    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Returns the amount of money.
   *
   * @returns The amount of money.
   */
  get amount(): number {
    return this._amount;
  }

  get asFloat(): number {
    return Number(this._amount) / Math.pow(10, this._currency.decimalPlaces);
  }

  /**
   * asDecimal return the amount of money as its decimal parts: integer part and decimal part
   *
   * For example new Money(1234, usd).asDecimal() will return { integer: 12, decimal: 34 }
   */
  get asDecimal(): { integer: number; decimal: number } {
    const amount = this._amount;
    const decimalPlaces = this._currency.decimalPlaces;
    const integerPart = Math.floor(amount / Math.pow(10, decimalPlaces));
    const decimalPart = amount % Math.pow(10, decimalPlaces);

    return { integer: integerPart, decimal: decimalPart };
  }

  /**
   * Returns the currency of the money.
   *
   * @returns The currency of the money.
   */
  get currency(): Currency {
    return this._currency;
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
        this._amount * (percent / 100),
        this._currency.decimalPlaces,
      ),
      this._currency,
    );
  }

  format(locale: string): string {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: this._currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: this._currency.decimalPlaces,
    }).format(this._amount / Math.pow(10, this._currency.decimalPlaces));
  }
}
