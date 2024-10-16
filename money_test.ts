import { assertEquals } from "@std/assert";
import { EUR, USD } from "./currencies.ts";
import { Money } from "./money.ts";

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
  await t.step("format ignores zero decimals", () => {
    const m = new Money(1000, USD);
    const wantFormat = "10 $";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format().replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });

  await t.step("format displays minimum amount of decimals", () => {
    const m = new Money(1020, USD);
    const wantFormat = "10,2 $";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format().replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });

  await t.step("format handles specific currency symbols", () => {
    const m = new Money(2345, EUR);
    const wantFormat = "23,45 €";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format().replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });
});
