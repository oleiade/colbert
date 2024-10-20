import { assertEquals } from "@std/assert";
import { EUR, USD } from "./currencies.ts";
import { Money } from "./money.ts";

Deno.test("Money.constructor", async (t) => {
  await t.step("creates a Money object with an integer amount", () => {
    const m = new Money(100, USD);

    assertEquals(m.amount, 100);
    assertEquals(m.currency, USD);
  });

  await t.step("throws TypeError if amount is not an integer", () => {
    try {
      new Money(100.5, USD);
    } catch (e) {
      assertEquals(e instanceof TypeError, true);
      assertEquals((e as TypeError).message, "Amount must be an integer");
    }
  });

  await t.step("throws TypeError if amount is NaN", () => {
    try {
      new Money(NaN, USD);
    } catch (e) {
      assertEquals(e instanceof TypeError, true);
      assertEquals((e as TypeError).message, "Amount must be an integer");
    }
  });
});

Deno.test("Money.amountAsFloat", async (t) => {
  await t.step("converts the exact amount of decimal places to a float", () => {
    const m = new Money(10025, USD);

    const got = m.asFloat;

    assertEquals(got, 100.25);
  });

  await t.step("no decimals in currency with decimals doesn't add them", () => {
    const m = new Money(100, USD);

    const got = m.asFloat;

    assertEquals(got, 1);
  });
});

Deno.test("Money.percent", async (t) => {
  await t.step("calculates percentage of the monetary amount", () => {
    const m = new Money(100, USD);
    const percent = 50;
    const wantAmount = 50;

    const got = m.percent(percent);

    assertEquals(got.amount, wantAmount);
  });

  await t.step("calculates percentage of the monetary value", () => {
    const m = new Money(1000, USD);
    const percent = 33;
    const wantAmount = 330;

    const got = m.percent(percent);

    assertEquals(got.amount, wantAmount);
  });

  await t.step(
    "throws RangeError if the percent is not between 0 and 100",
    () => {
      const m = new Money(100, USD);
      const percent = 101;

      try {
        m.percent(percent);
      } catch (e) {
        assertEquals(e instanceof RangeError, true);
        assertEquals(
          (e as RangeError).message,
          "Percent must be between 0 and 100"
        );
      }
    }
  );
});

Deno.test("Money.format", async (t) => {
  const testLocale = "fr-FR";

  await t.step("format ignores zero decimals", () => {
    const m = new Money(1000, USD);
    const wantFormat = "10 $US";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format(testLocale).replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });

  await t.step("format displays minimum amount of decimals", () => {
    const m = new Money(1020, USD);
    const wantFormat = "10,2 $US";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format(testLocale).replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });

  await t.step("format handles specific currency symbols", () => {
    const m = new Money(2345, EUR);
    const wantFormat = "23,45 €";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format(testLocale).replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });
});
