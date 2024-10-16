/**
 * @file mod.ts
 * @module colbert
 *
 * This module serves as the main entry point for the colbert-deno library.
 * It re-exports types and functions related to currency and monetary operations.
 *
 * @exports {Currency, Code} from "./currency.ts" - Types and constants for currency representation.
 * @exports * from "./currencies.ts" - All exports from the currencies module.
 * @exports {Money, add, subtract, multiply, divide, IncompatibleCurrenciesError, DivisionByZeroError} from "./money.ts" -
 *          Functions and classes for monetary calculations and error handling.
 */
export { Code, type Currency } from "./currency.ts";
export * from "./currencies.ts";
export { Money } from "./money.ts";
export { add, divide, multiply, subtract } from "./operations.ts";
export { DivisionByZeroError, IncompatibleCurrenciesError } from "./errors.ts";
