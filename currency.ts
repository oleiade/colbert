/**
 * @module Currency
 *
 * This module provides definitions and enumerations for handling currencies.
 * It includes an interface to represent a currency and an enumeration of currency codes
 * as defined by the ISO 4217 standard.
 *
 * @example
 * ```typescript
 * import { Currency, Code } from './currency.ts';
 *
 * const usd: Currency = {
 *   code: Code.USD,
 *   decimalDigits: 2,
 *   name: 'United States Dollar',
 *   symbol: '$'
 * };
 *
 * console.log(usd);
 * ```
 *
 * @see {@link https://www.iso.org/iso-4217-currency-codes.html|ISO 4217 Currency Codes}
 */

/**
 * Represents a currency with its code, name, and the number of decimal digits used.
 */
export interface Currency {
  code: Code;
  decimalDigits: number;
  name: string;
  symbol: string;
}

/**
 * Enumeration of currency codes as defined by the ISO 4217 standard.
 * Each currency code is represented by a three-letter alphabetic code.
 *
 * @enum {number}
 * @readonly
 *
 * @example
 * ```typescript
 * const currency: CurrencyCode = CurrencyCode.USD;
 * console.log(currency); // Output: 147
 * ```
 *
 * @see {@link https://www.iso.org/iso-4217-currency-codes.html|ISO 4217 Currency Codes}
 */
export enum Code {
  AED,
  AFN,
  ALL,
  AMD,
  ANG,
  AOA,
  ARS,
  AUD,
  AWG,
  AZN,
  BAM,
  BBD,
  BDT,
  BGN,
  BHD,
  BIF,
  BMD,
  BND,
  BOB,
  BOV,
  BRL,
  BSD,
  BTN,
  BWP,
  BYN,
  BZD,
  CAD,
  CDF,
  CHE,
  CHF,
  CHW,
  CLF,
  CLP,
  COP,
  COU,
  CRC,
  CUC,
  CUP,
  CVE,
  CZK,
  DJF,
  DKK,
  DOP,
  DZD,
  EGP,
  ERN,
  ETB,
  EUR,
  FJD,
  FKP,
  GBP,
  GEL,
  GHS,
  GIP,
  GMD,
  GNF,
  GTQ,
  GYD,
  HKD,
  HNL,
  HTG,
  HUF,
  IDR,
  ILS,
  INR,
  IQD,
  IRR,
  ISK,
  JMD,
  JOD,
  JPY,
  KES,
  KGS,
  KHR,
  KMF,
  KPW,
  KRW,
  KWD,
  KYD,
  KZT,
  LAK,
  LBP,
  LKR,
  LRD,
  LSL,
  LYD,
  MAD,
  MDL,
  MGA,
  MKD,
  MMK,
  MNT,
  MOP,
  MRU,
  MUR,
  MVR,
  MWK,
  MXN,
  MXV,
  MYR,
  MZN,
  NAD,
  NGN,
  NIO,
  NOK,
  NPR,
  NZD,
  OMR,
  PAB,
  PEN,
  PGK,
  PHP,
  PKR,
  PLN,
  PYG,
  QAR,
  RON,
  RSD,
  CNY,
  RUB,
  RWF,
  SAR,
  SBD,
  SCR,
  SDG,
  SEK,
  SGD,
  SHP,
  SLE,
  SLL,
  SOS,
  SRD,
  SSP,
  STN,
  SVC,
  SYP,
  SZL,
  THB,
  TJS,
  TMT,
  TND,
  TOP,
  TRY,
  TTD,
  TWD,
  TZS,
  UAH,
  UGX,
  USD,
  USN,
  UYI,
  UYU,
  UYW,
  UZS,
  VED,
  VES,
  VND,
  VUV,
  WST,
  XAF,
  XAG,
  XAU,
  XBA,
  XBB,
  XBC,
  XBD,
  XCD,
  XDR,
  XOF,
  XPD,
  XPF,
  XPT,
  XSU,
  XTS,
  XUA,
  XXX,
  YER,
  ZAR,
  ZMW,
  ZWL,
}
