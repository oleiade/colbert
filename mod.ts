/**
 * @file mod.ts
 * @module colbert
 *
 * This module serves as the main entry point for the colbert library.
 * It re-exports types and functions related to currency and monetary operations.
 *
 * @exports {Currency, Code} from "./currency.ts" - Types and constants for currency representation.
 * @exports * from "./currencies.ts" - All exports from the currencies module.
 * @exports {add, subtract, multiply, divide} from "./operations.ts" -
 *          Functions for monetary calculations and error handling.
 * @exports {Money} from "./money.ts" - Class representing a monetary value with a specific currency.
 * @exports {IncompatibleCurrenciesError, DivisionByZeroError} from "./errors.ts" - Custom error classes for currency operations.
 */
export { Code, type Currency } from "./currency.ts";
export * from "./currencies.ts";
export { Money } from "./money.ts";
export { add, divide, multiply, subtract } from "./operations.ts";
export { DivisionByZeroError, IncompatibleCurrenciesError } from "./errors.ts";
