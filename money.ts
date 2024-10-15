/**
 * @module Money
 *
 * This module provides a `Money` class and related functions to handle monetary values with specific currencies.
 * It includes operations such as addition, subtraction, multiplication, and division of monetary amounts.
 * Custom error classes are also provided to handle specific error cases like incompatible currencies and division by zero.
 *
 * @file /Users/theocrevon/Dev/oleiade/colbert-deno/money.ts
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

import type { Currency } from "./currency.ts";

/**
 * Represents a monetary value with a specific currency.
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
      bankersRounding(this.amount * (percent / 100)),
      this.currency
    );
  }
}

/**
 * Adds two Money objects together.
 *
 * @param lhs - The left-hand side Money object.
 * @param rhs - The right-hand side Money object.
 * @returns A new Money object representing the sum of the two Money objects.
 * @throws IncompatibleCurrenciesError if the currencies of the two Money objects do not match.
 */
export function add(lhs: Money, rhs: Money): Money {
  if (lhs.currency !== rhs.currency) {
    throw new IncompatibleCurrenciesError(
      "Cannot add two moneys with different currencies"
    );
  }

  return new Money(lhs.amount + rhs.amount, lhs.currency);
}

/**
 * Subtracts one Money object from another.
 *
 * @param lhs - The Money object to subtract from.
 * @param rhs - The Money object to subtract.
 * @returns A new Money object representing the result of the subtraction.
 * @throws IncompatibleCurrenciesError - If the currencies of the two Money objects do not match.
 */
export function subtract(lhs: Money, rhs: Money): Money {
  if (lhs.currency !== rhs.currency) {
    throw new IncompatibleCurrenciesError(
      "Cannot subtract two moneys with different currencies"
    );
  }

  return new Money(lhs.amount - rhs.amount, lhs.currency);
}

/**
 * Multiplies a given amount of money by a specified factor.
 *
 * @param money - The Money object containing the amount and currency to be multiplied.
 * @param factor - The number by which to multiply the money amount.
 * @returns A new Money object with the multiplied amount and the same currency.
 */
export function multiply(money: Money, factor: number): Money {
  return new Money(bankersRounding(money.amount * factor), money.currency);
}

/**
 * Divides a given amount of money by a specified divisor.
 *
 * @param money - The Money object to be divided.
 * @param divisor - The number by which to divide the money amount.
 * @returns A new Money object with the divided amount.
 * @throws DivisionByZeroError - If the divisor is zero.
 */
export function divide(money: Money, divisor: number): Money {
  if (divisor === 0.0) {
    throw new DivisionByZeroError("Cannot divide by zero");
  }

  return new Money(bankersRounding(money.amount / divisor), money.currency);
}

/**
 * Custom error class to handle incompatible currency operations.
 *
 * @extends {Error}
 *
 * @example
 * ```typescript
 * throw new IncompatibleCurrenciesError("Currencies do not match.");
 * ```
 */
export class IncompatibleCurrenciesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "IncompatibleCurrenciesError";
  }
}

/**
 * Custom error class representing a division by zero error.
 *
 * @extends {Error}
 */
export class DivisionByZeroError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

/**
 * Performs banker's rounding on a given number.
 *
 * Banker's rounding, also known as round half to even, is a method of rounding
 * which minimizes rounding errors that can accumulate when adding rounded numbers
 * together repeatedly. It rounds to the nearest even number when the number to be
 * rounded is exactly halfway between two numbers.
 *
 * @param x - The number to be rounded.
 * @returns The number rounded using banker's rounding.
 */
export function bankersRounding(x: number): number {
  const floorValue = Math.floor(x);
  const fractionalPart = x - floorValue;

  if (fractionalPart > 0.5) {
    return floorValue + 1;
  } else if (fractionalPart < 0.5) {
    return floorValue;
  } else {
    // fractionalPart == 0.5
    if (floorValue % 2 === 0) {
      return floorValue; // Already even, no change
    } else {
      return floorValue + 1; // Round up to next even number
    }
  }
}
