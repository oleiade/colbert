import { assertEquals } from "@std/assert";
import { EUR, USD } from "./currencies.ts";
import { Money } from "./money.ts";
import {
  add,
  divide,
  multiply,
  subtract,
  bankersRounding,
} from "./operations.ts";
import { DivisionByZeroError, IncompatibleCurrenciesError } from "./mod.ts";

Deno.test("add", async (t) => {
  await t.step(
    "adding two money objects with the same currency should succeed",
    () => {
      const lhs = new Money(100, USD);
      const rhs = new Money(50, USD);

      const sum = add(lhs, rhs);

      assertEquals(sum.amount, 150);
      assertEquals(sum.currency, USD);
    }
  );

  await t.step(
    "adding two money objects with different currencies should fail",
    () => {
      const lhs = new Money(100, USD);
      const rhs = new Money(50, EUR);

      let gotException: unknown = null;
      try {
        add(lhs, rhs);
      } catch (e) {
        gotException = e;
      }

      assertEquals(gotException instanceof IncompatibleCurrenciesError, true);
      assertEquals(
        (gotException as Error).message,
        "Cannot add two moneys with different currencies"
      );
    }
  );
});

Deno.test("subtract", async (t) => {
  await t.step(
    "subtracting two money objects with the same currency should succeed",
    () => {
      const lhs = new Money(100, USD);
      const rhs = new Money(50, USD);

      const difference = subtract(lhs, rhs);

      assertEquals(difference.amount, 50);
      assertEquals(difference.currency, USD);
    }
  );

  await t.step(
    "subtracting two money objects with different currencies should fail",
    () => {
      const lhs = new Money(100, USD);
      const rhs = new Money(50, EUR);

      let gotException: unknown = null;
      try {
        subtract(lhs, rhs);
      } catch (e) {
        gotException = e;
      }

      assertEquals(gotException instanceof IncompatibleCurrenciesError, true);
      assertEquals(
        (gotException as Error).message,
        "Cannot subtract two moneys with different currencies"
      );
    }
  );
});

Deno.test("multiply", async (t) => {
  await t.step(
    "multiplying two money objects with the same currency should succeed",
    () => {
      const m = new Money(100, USD);

      const product = multiply(m, 5);

      assertEquals(product.amount, 500);
      assertEquals(product.currency, USD);
    }
  );
});

Deno.test("divide", async (t) => {
  await t.step("dividing a money object by zero should fail", () => {
    const m = new Money(100, USD);

    let gotException: unknown = null;
    try {
      divide(m, 0);
    } catch (e) {
      gotException = e;
    }

    assertEquals(gotException instanceof DivisionByZeroError, true);
    assertEquals((gotException as Error).message, "Cannot divide by zero");
  });

  await t.step("dividing a money object by a number should succeed", () => {
    const m = new Money(100, USD);

    const quotient = divide(m, 5);

    assertEquals(quotient.amount, 20);
    assertEquals(quotient.currency, USD);
  });
});

Deno.test("bankersRounding", async (t) => {
  await t.step(
    "rounding a number with a fractional part of 0.5 should round to the nearest even number",
    () => {
      // 2.121 should round to 2.12
      assertEquals(bankersRounding(2.121, 2), 2.12);

      // --- Rounded down

      // The rounding digit (2) is an even number
      // 2.125 should round to 2.12
      assertEquals(bankersRounding(2.125, 2), 2.12);

      // The rounding digit(3) is an odd number
      // 2.135 should round to 2.14
      assertEquals(bankersRounding(2.135, 2), 2.14);

      // --- Rounded up

      // 2.1351 should round to 2.14
      assertEquals(bankersRounding(2.1351, 2), 2.14);

      // 2.127 should round to 2.13
      assertEquals(bankersRounding(2.127, 2), 2.13);
    }
  );
});
