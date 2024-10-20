import { assertEquals } from "@std/assert";
import { Code, type Currency } from "./currency.ts";
import { EUR, USD } from "./currencies.ts";
import { Money } from "./money.ts";
import { add } from "./operations.ts";

Deno.test(function currencyTest() {
  const u: Currency = USD;
  const e: Currency = EUR;

  assertEquals(u.code, Code.USD);
  assertEquals(u.name, "United States dollar");
  assertEquals(u.decimalPlaces, 2);

  assertEquals(e.code, Code.EUR);
  assertEquals(e.name, "Euro");
  assertEquals(e.decimalPlaces, 2);
});

Deno.test(function addTest() {
  const a = new Money(10, USD);
  const b = new Money(20, USD);
  const m = add(a, b);

  assertEquals(m.amount, 30);
});

Deno.test("money operations", async (t) => {
  const locale = "fr-FR";

  await t.step("format ignores zero decimals", () => {
    const m = new Money(1000, USD);
    const wantFormat = "10 $US";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format(locale).replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });

  await t.step("format displays minimum amount of decimals", () => {
    const m = new Money(1020, USD);
    const wantFormat = "10,2 $US";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format(locale).replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });

  await t.step("format handles specific currency symbols", () => {
    const m = new Money(2345, EUR);
    const wantFormat = "23,45 €";

    // Normalize spaces produced by Intl.NumberFormat for comparison
    const gotFormat = m.format(locale).replace(/\u00A0/g, " ");

    assertEquals(gotFormat, wantFormat);
  });
});
