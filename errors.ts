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
