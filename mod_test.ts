import { assertEquals } from "@std/assert";
import { Code, type Currency } from "./currency.ts";
import { EUR, USD } from "./currencies.ts";
import { add, Money } from "./money.ts";

Deno.test(function currencyTest() {
  const u: Currency = USD;
  const e: Currency = EUR;

  assertEquals(u.code, Code.USD);
  assertEquals(u.name, "United States dollar");
  assertEquals(u.decimalDigits, 2);

  assertEquals(e.code, Code.EUR);
  assertEquals(e.name, "Euro");
  assertEquals(e.decimalDigits, 2);
});

Deno.test(function addTest() {
  const a = new Money(10, USD);
  const b = new Money(20, USD);
  const m = add(a, b);

  assertEquals(m.amount, 30);
});
