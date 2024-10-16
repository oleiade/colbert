import { Money } from "./money.ts";
import { IncompatibleCurrenciesError, DivisionByZeroError } from "./mod.ts";

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
  return new Money(
    bankersRounding(money.amount * factor, money.currency.decimalDigits),
    money.currency
  );
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

  return new Money(
    bankersRounding(money.amount / divisor, money.currency.decimalDigits),
    money.currency
  );
}

/**
 * Performs banker's rounding on a given number.
 *
 * Banker's rounding, also known as round half to even, is a method of rounding
 * which minimizes rounding errors that can accumulate when adding rounded numbers
 * together repeatedly. It rounds to the nearest even number when the number to be
 * rounded is exactly halfway between two numbers.
 *
 * @param value - The number to be rounded.
 * @param decimalPlaces - The number of decimal places to round to.
 * @returns The number rounded using banker's rounding.
 */
export function bankersRounding(value: number, decimalPlaces: number): number {
  // Multiplier to shift the decimal point for rounding
  const multiplier = 10 ** decimalPlaces;

  // Scale the value to the specified decimal places and fix floating point precision issues
  const scaledValue = +(decimalPlaces ? value * multiplier : value).toFixed(8);

  // Integer part of the scaled value
  const integerPart = Math.floor(scaledValue);

  // Fractional part of the scaled value
  const fractionalPart = scaledValue - integerPart;

  // Small epsilon value to handle floating point arithmetic issues
  const epsilon = 1e-8;

  // Determine the rounded value using banker's rounding
  const roundedValue =
    fractionalPart > 0.5 - epsilon && fractionalPart < 0.5 + epsilon
      ? integerPart % 2 === 0
        ? integerPart // If integer part is even, keep it
        : integerPart + 1 // If integer part is odd, round up to next even number
      : Math.round(scaledValue); // Otherwise, use standard rounding

  // Scale back the rounded value to the original decimal places
  return decimalPlaces ? roundedValue / multiplier : roundedValue;
}
