/**
 * This module defines various currency constants, each representing a specific currency.
 * Each currency is represented as an object with the following properties:
 * - `code`: The currency code as defined in the `CurrencyCode` enum.
 * - `decimalDigits`: The number of decimal digits used by the currency.
 * - `name`: The full name of the currency.
 *
 * Example usage:
 *
 * ```typescript
 * import { USD, EUR } from "./currencies.ts";
 *
 * console.log(USD.name); // "United States dollar"
 * console.log(EUR.decimalDigits); // 2
 * ```
 *
 * @module currencies
 */
import { Code, type Currency } from "./currency.ts";

export const AED: Currency = {
  code: Code.AED,
  decimalDigits: 2,
  name: "United Arab Emirates dirham",
  symbol: "د.إ",
} as const;

export const AFN: Currency = {
  code: Code.AFN,
  decimalDigits: 2,
  name: "Afghan afghani",
  symbol: "؋",
} as const;

export const ALL: Currency = {
  code: Code.ALL,
  decimalDigits: 2,
  name: "Albanian lek",
  symbol: "L",
} as const;

export const AMD: Currency = {
  code: Code.AMD,
  decimalDigits: 2,
  name: "Armenian dram",
  symbol: "֏",
} as const;

export const ANG: Currency = {
  code: Code.ANG,
  decimalDigits: 2,
  name: "Netherlands Antillean guilder",
  symbol: "ƒ",
} as const;

export const AOA: Currency = {
  code: Code.AOA,
  decimalDigits: 2,
  name: "Angolan kwanza",
  symbol: "Kz",
} as const;

export const ARS: Currency = {
  code: Code.ARS,
  decimalDigits: 2,
  name: "Argentine peso",
  symbol: "$",
} as const;

export const AUD: Currency = {
  code: Code.AUD,
  decimalDigits: 2,
  name: "Australian dollar",
  symbol: "$",
} as const;

export const AWG: Currency = {
  code: Code.AWG,
  decimalDigits: 2,
  name: "Aruban florin",
  symbol: "ƒ",
} as const;

export const AZN: Currency = {
  code: Code.AZN,
  decimalDigits: 2,
  name: "Azerbaijani manat",
  symbol: "₼",
} as const;

export const BAM: Currency = {
  code: Code.BAM,
  decimalDigits: 2,
  name: "Bosnia and Herzegovina convertible mark",
  symbol: "KM",
} as const;

export const BBD: Currency = {
  code: Code.BBD,
  decimalDigits: 2,
  name: "Barbados dollar",
  symbol: "$",
} as const;

export const BDT: Currency = {
  code: Code.BDT,
  decimalDigits: 2,
  name: "Bangladeshi taka",
  symbol: "৳",
} as const;

export const BGN: Currency = {
  code: Code.BGN,
  decimalDigits: 2,
  name: "Bulgarian lev",
  symbol: "лв",
} as const;

export const BHD: Currency = {
  code: Code.BHD,
  decimalDigits: 3,
  name: "Bahraini dinar",
  symbol: ".د.ب",
} as const;

export const BIF: Currency = {
  code: Code.BIF,
  decimalDigits: 2,
  name: "Burundian franc",
  symbol: "FBu",
} as const;

export const BMD: Currency = {
  code: Code.BMD,
  decimalDigits: 2,
  name: "Bermudian dollar",
  symbol: "$",
} as const;

export const BND: Currency = {
  code: Code.BND,
  decimalDigits: 2,
  name: "Brunei dollar",
  symbol: "$",
} as const;

export const BOB: Currency = {
  code: Code.BOB,
  decimalDigits: 2,
  name: "Boliviano",
  symbol: "Bs.",
} as const;

export const BOV: Currency = {
  code: Code.BOV,
  decimalDigits: 2,
  name: "Bolivian Mvdol (funds code)",
  symbol: "BOV",
} as const;

export const BRL: Currency = {
  code: Code.BRL,
  decimalDigits: 2,
  name: "Brazilian real",
  symbol: "R$",
} as const;

export const BSD: Currency = {
  code: Code.BSD,
  decimalDigits: 2,
  name: "Bahamian dollar",
  symbol: "$",
} as const;

export const BTN: Currency = {
  code: Code.BTN,
  decimalDigits: 2,
  name: "Bhutanese ngultrum",
  symbol: "Nu.",
} as const;

export const BWP: Currency = {
  code: Code.BWP,
  decimalDigits: 2,
  name: "Botswana pula",
  symbol: "P",
} as const;

export const BYN: Currency = {
  code: Code.BYN,
  decimalDigits: 2,
  name: "Belarusian ruble",
  symbol: "Br",
} as const;

export const BZD: Currency = {
  code: Code.BZD,
  decimalDigits: 2,
  name: "Belize dollar",
  symbol: "$",
} as const;

export const CAD: Currency = {
  code: Code.CAD,
  decimalDigits: 2,
  name: "Canadian dollar",
  symbol: "$",
} as const;

export const CDF: Currency = {
  code: Code.CDF,
  decimalDigits: 2,
  name: "Congolese franc",
  symbol: "FC",
} as const;

export const CHE: Currency = {
  code: Code.CHE,
  decimalDigits: 2,
  name: "WIR euro (complementary currency)",
  symbol: "CHE",
} as const;

export const CHF: Currency = {
  code: Code.CHF,
  decimalDigits: 2,
  name: "Swiss franc",
  symbol: "CHF",
} as const;

export const CHW: Currency = {
  code: Code.CHW,
  decimalDigits: 2,
  name: "WIR franc (complementary currency)",
  symbol: "CHW",
} as const;

export const CLF: Currency = {
  code: Code.CLF,
  decimalDigits: 4,
  name: "Unidad de Fomento (funds code)",
  symbol: "CLF",
} as const;

export const CLP: Currency = {
  code: Code.CLP,
  decimalDigits: 0,
  name: "Chilean peso",
  symbol: "$",
} as const;

export const COP: Currency = {
  code: Code.COP,
  decimalDigits: 2,
  name: "Colombian peso",
  symbol: "$",
} as const;

export const COU: Currency = {
  code: Code.COU,
  decimalDigits: 2,
  name: "Unidad de Valor Real (UVR) (funds code)",
  symbol: "COU",
} as const;

export const CRC: Currency = {
  code: Code.CRC,
  decimalDigits: 2,
  name: "Costa Rican colon",
  symbol: "₡",
} as const;

export const CUC: Currency = {
  code: Code.CUC,
  decimalDigits: 2,
  name: "Cuban convertible peso",
  symbol: "$",
} as const;

export const CUP: Currency = {
  code: Code.CUP,
  decimalDigits: 2,
  name: "Cuban peso",
  symbol: "$",
} as const;

export const CVE: Currency = {
  code: Code.CVE,
  decimalDigits: 2,
  name: "Cape Verdean escudo",
  symbol: "$",
} as const;

export const CZK: Currency = {
  code: Code.CZK,
  decimalDigits: 2,
  name: "Czech koruna",
  symbol: "Kč",
} as const;

export const DJF: Currency = {
  code: Code.DJF,
  decimalDigits: 0,
  name: "Djiboutian franc",
  symbol: "Fdj",
} as const;

export const DKK: Currency = {
  code: Code.DKK,
  decimalDigits: 2,
  name: "Danish krone",
  symbol: "kr",
} as const;

export const DOP: Currency = {
  code: Code.DOP,
  decimalDigits: 2,
  name: "Dominican peso",
  symbol: "$",
} as const;

export const DZD: Currency = {
  code: Code.DZD,
  decimalDigits: 2,
  name: "Algerian dinar",
  symbol: "د.ج",
} as const;

export const EGP: Currency = {
  code: Code.EGP,
  decimalDigits: 2,
  name: "Egyptian pound",
  symbol: "£",
} as const;

export const ERN: Currency = {
  code: Code.ERN,
  decimalDigits: 2,
  name: "Eritrean nakfa",
  symbol: "Nfk",
} as const;

export const ETB: Currency = {
  code: Code.ETB,
  decimalDigits: 2,
  name: "Ethiopian birr",
  symbol: "Br",
} as const;

export const EUR: Currency = {
  code: Code.EUR,
  decimalDigits: 2,
  name: "Euro",
  symbol: "€",
} as const;

export const FJD: Currency = {
  code: Code.FJD,
  decimalDigits: 2,
  name: "Fiji dollar",
  symbol: "$",
} as const;

export const FKP: Currency = {
  code: Code.FKP,
  decimalDigits: 2,
  name: "Falkland Islands pound",
  symbol: "£",
} as const;

export const GBP: Currency = {
  code: Code.GBP,
  decimalDigits: 2,
  name: "Pound sterling",
  symbol: "£",
} as const;

export const GEL: Currency = {
  code: Code.GEL,
  decimalDigits: 2,
  name: "Georgian lari",
  symbol: "₾",
} as const;

export const GHS: Currency = {
  code: Code.GHS,
  decimalDigits: 2,
  name: "Ghanaian cedi",
  symbol: "₵",
} as const;

export const GIP: Currency = {
  code: Code.GIP,
  decimalDigits: 2,
  name: "Gibraltar pound",
  symbol: "£",
} as const;

export const GMD: Currency = {
  code: Code.GMD,
  decimalDigits: 2,
  name: "Gambian dalasi",
  symbol: "D",
} as const;

export const GNF: Currency = {
  code: Code.GNF,
  decimalDigits: 0,
  name: "Guinean franc",
  symbol: "FG",
} as const;

export const GTQ: Currency = {
  code: Code.GTQ,
  decimalDigits: 2,
  name: "Guatemalan quetzal",
  symbol: "Q",
} as const;

export const GYD: Currency = {
  code: Code.GYD,
  decimalDigits: 2,
  name: "Guyanese dollar",
  symbol: "$",
} as const;

export const HKD: Currency = {
  code: Code.HKD,
  decimalDigits: 2,
  name: "Hong Kong dollar",
  symbol: "$",
} as const;

export const HNL: Currency = {
  code: Code.HNL,
  decimalDigits: 2,
  name: "Honduran lempira",
  symbol: "L",
} as const;

export const HTG: Currency = {
  code: Code.HTG,
  decimalDigits: 2,
  name: "Haitian gourde",
  symbol: "G",
} as const;

export const HUF: Currency = {
  code: Code.HUF,
  decimalDigits: 2,
  name: "Hungarian forint",
  symbol: "Ft",
} as const;

export const IDR: Currency = {
  code: Code.IDR,
  decimalDigits: 2,
  name: "Indonesian rupiah",
  symbol: "Rp",
} as const;

export const ILS: Currency = {
  code: Code.ILS,
  decimalDigits: 2,
  name: "Israeli new shekel",
  symbol: "₪",
} as const;

export const INR: Currency = {
  code: Code.INR,
  decimalDigits: 2,
  name: "Indian rupee",
  symbol: "₹",
} as const;

export const IQD: Currency = {
  code: Code.IQD,
  decimalDigits: 3,
  name: "Iraqi dinar",
  symbol: "ع.د",
} as const;

export const IRR: Currency = {
  code: Code.IRR,
  decimalDigits: 2,
  name: "Iranian rial",
  symbol: "﷼",
} as const;

export const ISK: Currency = {
  code: Code.ISK,
  decimalDigits: 0,
  name: "Icelandic króna (plural: krónur)",
  symbol: "kr",
} as const;

export const JMD: Currency = {
  code: Code.JMD,
  decimalDigits: 2,
  name: "Jamaican dollar",
  symbol: "$",
} as const;

export const JOD: Currency = {
  code: Code.JOD,
  decimalDigits: 3,
  name: "Jordanian dinar",
  symbol: "د.ا",
} as const;

export const JPY: Currency = {
  code: Code.JPY,
  decimalDigits: 0,
  name: "Japanese yen",
  symbol: "¥",
} as const;

export const KES: Currency = {
  code: Code.KES,
  decimalDigits: 2,
  name: "Kenyan shilling",
  symbol: "Sh",
} as const;

export const KGS: Currency = {
  code: Code.KGS,
  decimalDigits: 2,
  name: "Kyrgyzstani som",
  symbol: "с",
} as const;

export const KHR: Currency = {
  code: Code.KHR,
  decimalDigits: 2,
  name: "Cambodian riel",
  symbol: "៛",
} as const;

export const KMF: Currency = {
  code: Code.KMF,
  decimalDigits: 0,
  name: "Comoro franc",
  symbol: "CF",
} as const;

export const KPW: Currency = {
  code: Code.KPW,
  decimalDigits: 2,
  name: "North Korean won",
  symbol: "₩",
} as const;

export const KRW: Currency = {
  code: Code.KRW,
  decimalDigits: 2,
  name: "South Korean won",
  symbol: "₩",
} as const;

export const KWD: Currency = {
  code: Code.KWD,
  decimalDigits: 2,
  name: "Kuwaiti dinar",
  symbol: "د.ك",
} as const;

export const KYD: Currency = {
  code: Code.KYD,
  decimalDigits: 2,
  name: "Cayman Islands dollar",
  symbol: "$",
} as const;

export const KZT: Currency = {
  code: Code.KZT,
  decimalDigits: 2,
  name: "Kazakhstani tenge",
  symbol: "₸",
} as const;

export const LAK: Currency = {
  code: Code.LAK,
  decimalDigits: 0,
  name: "Lao kip",
  symbol: "₭",
} as const;

export const LBP: Currency = {
  code: Code.LBP,
  decimalDigits: 2,
  name: "Lebanese pound",
  symbol: "ل.ل",
} as const;

export const LKR: Currency = {
  code: Code.LKR,
  decimalDigits: 2,
  name: "Sri Lankan rupee",
  symbol: "Rs",
} as const;

export const LRD: Currency = {
  code: Code.LRD,
  decimalDigits: 2,
  name: "Liberian dollar",
  symbol: "$",
} as const;

export const LSL: Currency = {
  code: Code.LSL,
  decimalDigits: 2,
  name: "Lesotho loti",
  symbol: "L",
} as const;

export const LYD: Currency = {
  code: Code.LYD,
  decimalDigits: 3,
  name: "Libyan dinar",
  symbol: "ل.د",
} as const;

export const MAD: Currency = {
  code: Code.MAD,
  decimalDigits: 2,
  name: "Moroccan dirham",
  symbol: "د.م.",
} as const;

export const MDL: Currency = {
  code: Code.MDL,
  decimalDigits: 2,
  name: "Moldovan leu",
  symbol: "L",
} as const;

export const MGA: Currency = {
  code: Code.MGA,
  decimalDigits: 2,
  name: "Malagasy ariary",
  symbol: "Ar",
} as const;

export const MKD: Currency = {
  code: Code.MKD,
  decimalDigits: 2,
  name: "Macedonian denar",
  symbol: "ден",
} as const;

export const MMK: Currency = {
  code: Code.MMK,
  decimalDigits: 2,
  name: "Myanmar kyat",
  symbol: "K",
} as const;

export const MNT: Currency = {
  code: Code.MNT,
  decimalDigits: 2,
  name: "Mongolian tögrög",
  symbol: "₮",
} as const;

export const MOP: Currency = {
  code: Code.MOP,
  decimalDigits: 2,
  name: "Macanese pataca",
  symbol: "P",
} as const;

export const MRU: Currency = {
  code: Code.MRU,
  decimalDigits: 2,
  name: "Mauritanian ouguiya",
  symbol: "UM",
} as const;

export const MUR: Currency = {
  code: Code.MUR,
  decimalDigits: 2,
  name: "Mauritian rupee",
  symbol: "₨",
} as const;

export const MVR: Currency = {
  code: Code.MVR,
  decimalDigits: 2,
  name: "Maldivian rufiyaa",
  symbol: "Rf",
} as const;

export const MWK: Currency = {
  code: Code.MWK,
  decimalDigits: 2,
  name: "Malawian kwacha",
  symbol: "MK",
} as const;

export const MXN: Currency = {
  code: Code.MXN,
  decimalDigits: 2,
  name: "Mexican peso",
  symbol: "$",
} as const;

export const MXV: Currency = {
  code: Code.MXV,
  decimalDigits: 2,
  name: "Mexican Unidad de Inversion (UDI) (funds code)",
  symbol: "MXV",
} as const;

export const MYR: Currency = {
  code: Code.MYR,
  decimalDigits: 2,
  name: "Malaysian ringgit",
  symbol: "RM",
} as const;

export const MZN: Currency = {
  code: Code.MZN,
  decimalDigits: 2,
  name: "Mozambican metical",
  symbol: "MT",
} as const;

export const NAD: Currency = {
  code: Code.NAD,
  decimalDigits: 2,
  name: "Namibian dollar",
  symbol: "$",
} as const;

export const NGN: Currency = {
  code: Code.NGN,
  decimalDigits: 2,
  name: "Nigerian naira",
  symbol: "₦",
} as const;

export const NIO: Currency = {
  code: Code.NIO,
  decimalDigits: 2,
  name: "Nicaraguan córdoba",
  symbol: "C$",
} as const;

export const NOK: Currency = {
  code: Code.NOK,
  decimalDigits: 2,
  name: "Norwegian krone",
  symbol: "kr",
} as const;

export const NPR: Currency = {
  code: Code.NPR,
  decimalDigits: 2,
  name: "Nepalese rupee",
  symbol: "₨",
} as const;

export const NZD: Currency = {
  code: Code.NZD,
  decimalDigits: 2,
  name: "New Zealand dollar",
  symbol: "$",
} as const;

export const OMR: Currency = {
  code: Code.OMR,
  decimalDigits: 3,
  name: "Omani rial",
  symbol: "ر.ع.",
} as const;

export const PAB: Currency = {
  code: Code.PAB,
  decimalDigits: 2,
  name: "Panamanian balboa",
  symbol: "B/.",
} as const;

export const PEN: Currency = {
  code: Code.PEN,
  decimalDigits: 2,
  name: "Peruvian sol",
  symbol: "S/.",
} as const;

export const PGK: Currency = {
  code: Code.PGK,
  decimalDigits: 2,
  name: "Papua New Guinean kina",
  symbol: "K",
} as const;

export const PHP: Currency = {
  code: Code.PHP,
  decimalDigits: 2,
  name: "Philippine peso",
  symbol: "₱",
} as const;

export const PKR: Currency = {
  code: Code.PKR,
  decimalDigits: 2,
  name: "Pakistani rupee",
  symbol: "₨",
} as const;

export const PLN: Currency = {
  code: Code.PLN,
  decimalDigits: 2,
  name: "Polish złoty",
  symbol: "zł",
} as const;

export const PYG: Currency = {
  code: Code.PYG,
  decimalDigits: 0,
  name: "Paraguayan guaraní",
  symbol: "₲",
} as const;

export const QAR: Currency = {
  code: Code.QAR,
  decimalDigits: 2,
  name: "Qatari riyal",
  symbol: "ر.ق",
} as const;

export const RON: Currency = {
  code: Code.RON,
  decimalDigits: 2,
  name: "Romanian leu",
  symbol: "lei",
} as const;

export const RSD: Currency = {
  code: Code.RSD,
  decimalDigits: 2,
  name: "Serbian dinar",
  symbol: "дин.",
} as const;

export const CNY: Currency = {
  code: Code.CNY,
  decimalDigits: 2,
  name: "Renminbi",
  symbol: "¥",
} as const;

export const RUB: Currency = {
  code: Code.RUB,
  decimalDigits: 2,
  name: "Russian ruble",
  symbol: "₽",
} as const;

export const RWF: Currency = {
  code: Code.RWF,
  decimalDigits: 0,
  name: "Rwandan franc",
  symbol: "FRw",
} as const;

export const SAR: Currency = {
  code: Code.SAR,
  decimalDigits: 2,
  name: "Saudi riyal",
  symbol: "ر.س",
} as const;

export const SBD: Currency = {
  code: Code.SBD,
  decimalDigits: 2,
  name: "Solomon Islands dollar",
  symbol: "$",
} as const;

export const SCR: Currency = {
  code: Code.SCR,
  decimalDigits: 2,
  name: "Seychelles rupee",
  symbol: "₨",
} as const;

export const SDG: Currency = {
  code: Code.SDG,
  decimalDigits: 2,
  name: "Sudanese pound",
  symbol: "ج.س.",
} as const;

export const SEK: Currency = {
  code: Code.SEK,
  decimalDigits: 2,
  name: "Swedish krona (plural: kronor)",
  symbol: "kr",
} as const;

export const SGD: Currency = {
  code: Code.SGD,
  decimalDigits: 2,
  name: "Singapore dollar",
  symbol: "$",
} as const;

export const SHP: Currency = {
  code: Code.SHP,
  decimalDigits: 2,
  name: "Saint Helena pound",
  symbol: "£",
} as const;

export const SLE: Currency = {
  code: Code.SLE,
  decimalDigits: 2,
  name: "Sierra Leonean leone (new leone)",
  symbol: "Le",
} as const;

export const SLL: Currency = {
  code: Code.SLL,
  decimalDigits: 2,
  name: "Sierra Leonean leone (old leone)",
  symbol: "Le",
} as const;

export const SOS: Currency = {
  code: Code.SOS,
  decimalDigits: 2,
  name: "Somali shilling",
  symbol: "Sh",
} as const;

export const SRD: Currency = {
  code: Code.SRD,
  decimalDigits: 2,
  name: "Surinamese dollar",
  symbol: "$",
} as const;

export const SSP: Currency = {
  code: Code.SSP,
  decimalDigits: 2,
  name: "South Sudanese pound",
  symbol: "£",
} as const;

export const STN: Currency = {
  code: Code.STN,
  decimalDigits: 2,
  name: "São Tomé and Príncipe dobra",
  symbol: "Db",
} as const;

export const SVC: Currency = {
  code: Code.SVC,
  decimalDigits: 2,
  name: "Salvadoran colón",
  symbol: "₡",
} as const;

export const SYP: Currency = {
  code: Code.SYP,
  decimalDigits: 2,
  name: "Syrian pound",
  symbol: "£",
} as const;

export const SZL: Currency = {
  code: Code.SZL,
  decimalDigits: 2,
  name: "Swazi lilangeni",
  symbol: "E",
} as const;

export const THB: Currency = {
  code: Code.THB,
  decimalDigits: 2,
  name: "Thai baht",
  symbol: "฿",
} as const;

export const TJS: Currency = {
  code: Code.TJS,
  decimalDigits: 2,
  name: "Tajikistani somoni",
  symbol: "ЅМ",
} as const;

export const TMT: Currency = {
  code: Code.TMT,
  decimalDigits: 2,
  name: "Turkmenistan manat",
  symbol: "m",
} as const;

export const TND: Currency = {
  code: Code.TND,
  decimalDigits: 3,
  name: "Tunisian dinar",
  symbol: "د.ت",
} as const;

export const TOP: Currency = {
  code: Code.TOP,
  decimalDigits: 2,
  name: "Tongan paʻanga",
  symbol: "T$",
} as const;

export const TTD: Currency = {
  code: Code.TTD,
  decimalDigits: 2,
  name: "Trinidad and Tobago dollar",
  symbol: "$",
} as const;

export const TWD: Currency = {
  code: Code.TWD,
  decimalDigits: 2,
  name: "New Taiwan dollar",
  symbol: "NT$",
} as const;

export const TZS: Currency = {
  code: Code.TZS,
  decimalDigits: 2,
  name: "Tanzanian shilling",
  symbol: "Sh",
} as const;

export const UAH: Currency = {
  code: Code.UAH,
  decimalDigits: 2,
  name: "Ukrainian hryvnia",
  symbol: "₴",
} as const;

export const UGX: Currency = {
  code: Code.UGX,
  decimalDigits: 2,
  name: "Ugandan shilling",
  symbol: "Sh",
} as const;

export const USD: Currency = {
  code: Code.USD,
  decimalDigits: 2,
  name: "United States dollar",
  symbol: "$",
} as const;

export const USN: Currency = {
  code: Code.USN,
  decimalDigits: 2,
  name: "United States dollar (next day) (funds code)",
  symbol: "USN",
} as const;

export const UYI: Currency = {
  code: Code.UYI,
  decimalDigits: 3,
  name: "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
  symbol: "UYI",
} as const;

export const UYU: Currency = {
  code: Code.UYU,
  decimalDigits: 2,
  name: "Uruguayan peso",
  symbol: "$",
} as const;

export const UYW: Currency = {
  code: Code.UYW,
  decimalDigits: 2,
  name: "Unidad previsional",
  symbol: "UYW",
} as const;

export const UZS: Currency = {
  code: Code.UZS,
  decimalDigits: 2,
  name: "Uzbekistan sum",
  symbol: "сўм",
} as const;

export const VED: Currency = {
  code: Code.VED,
  decimalDigits: 2,
  name: "Venezuelan digital bolívar",
  symbol: "Bs.",
} as const;

export const VES: Currency = {
  code: Code.VES,
  decimalDigits: 2,
  name: "Venezuelan sovereign bolívar",
  symbol: "Bs.",
} as const;

export const VND: Currency = {
  code: Code.VND,
  decimalDigits: 0,
  name: "Vietnamese đồng",
  symbol: "₫",
} as const;

export const VUV: Currency = {
  code: Code.VUV,
  decimalDigits: 0,
  name: "Vanuatu vatu",
  symbol: "VT",
} as const;

export const WST: Currency = {
  code: Code.WST,
  decimalDigits: 2,
  name: "Samoan tala",
  symbol: "WS$",
} as const;

export const XAF: Currency = {
  code: Code.XAF,
  decimalDigits: 2,
  name: "CFA franc BEAC",
  symbol: "FCFA",
} as const;

export const XAG: Currency = {
  code: Code.XAG,
  decimalDigits: 0,
  name: "Silver (one troy ounce)",
  symbol: "XAG",
} as const;

export const XAU: Currency = {
  code: Code.XAU,
  decimalDigits: 0,
  name: "Gold (one troy ounce)",
  symbol: "XAU",
} as const;

export const XBA: Currency = {
  code: Code.XBA,
  decimalDigits: 2,
  name: "European Composite Unit (EURCO) (bond market unit)",
  symbol: "XBA",
} as const;

export const XBB: Currency = {
  code: Code.XBB,
  decimalDigits: 2,
  name: "European Monetary Unit (E.M.U.-6) (bond market unit)",
  symbol: "XBB",
} as const;

export const XBC: Currency = {
  code: Code.XBC,
  decimalDigits: 2,
  name: "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
  symbol: "XBC",
} as const;

export const XBD: Currency = {
  code: Code.XBD,
  decimalDigits: 2,
  name: "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
  symbol: "XBD",
} as const;

export const XCD: Currency = {
  code: Code.XCD,
  decimalDigits: 2,
  name: "East Caribbean dollar",
  symbol: "$",
} as const;

export const XDR: Currency = {
  code: Code.XDR,
  decimalDigits: 2,
  name: "Special drawing rights",
  symbol: "XDR",
} as const;

export const XOF: Currency = {
  code: Code.XOF,
  decimalDigits: 2,
  name: "CFA franc BCEAO",
  symbol: "CFA",
} as const;

export const XPD: Currency = {
  code: Code.XPD,
  decimalDigits: 2,
  name: "Palladium (one troy ounce)",
  symbol: "XPD",
} as const;

export const XPF: Currency = {
  code: Code.XPF,
  decimalDigits: 2,
  name: "CFP franc (franc Pacifique)",
  symbol: "CFP",
} as const;

export const XPT: Currency = {
  code: Code.XPT,
  decimalDigits: 2,
  name: "Platinum (one troy ounce)",
  symbol: "XPT",
} as const;

export const XSU: Currency = {
  code: Code.XSU,
  decimalDigits: 2,
  name: "SUCRE",
  symbol: "XSU",
} as const;

export const XTS: Currency = {
  code: Code.XTS,
  decimalDigits: 2,
  name: "Code reserved for testing",
  symbol: "XTS",
} as const;

export const XUA: Currency = {
  code: Code.XUA,
  decimalDigits: 2,
  name: "ADB Unit of Account",
  symbol: "XUA",
} as const;

export const XXX: Currency = {
  code: Code.XXX,
  decimalDigits: 2,
  name: "No currency",
  symbol: "XXX",
} as const;

export const YER: Currency = {
  code: Code.YER,
  decimalDigits: 2,
  name: "Yemeni rial",
  symbol: "﷼",
} as const;

export const ZAR: Currency = {
  code: Code.ZAR,
  decimalDigits: 2,
  name: "South African rand",
  symbol: "R",
} as const;

export const ZMW: Currency = {
  code: Code.ZMW,
  decimalDigits: 2,
  name: "Zambian kwacha",
  symbol: "ZK",
} as const;

export const ZWL: Currency = {
  code: Code.ZWL,
  decimalDigits: 2,
  name: "Zimbabwean dollar (fifth)",
  symbol: "$",
} as const;
