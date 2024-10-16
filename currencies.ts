/**
 * This file defines various currency constants, each representing a specific currency.
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

/**
 * United Arab Emirates dirham (AED).
 */
export const AED: Currency = {
  code: Code.AED,
  decimalPlaces: 2,
  name: "United Arab Emirates dirham",
  symbol: "د.إ",
} as const;

/**
 * Afghan afghani (AFN).
 */
export const AFN: Currency = {
  code: Code.AFN,
  decimalPlaces: 2,
  name: "Afghan afghani",
  symbol: "؋",
} as const;

/**
 * Albanian lek (ALL).
 */
export const ALL: Currency = {
  code: Code.ALL,
  decimalPlaces: 2,
  name: "Albanian lek",
  symbol: "L",
} as const;

/**
 * Armenian dram (AMD).
 */
export const AMD: Currency = {
  code: Code.AMD,
  decimalPlaces: 2,
  name: "Armenian dram",
  symbol: "֏",
} as const;

/**
 * Netherlands Antillean guilder (ANG)
 */
export const ANG: Currency = {
  code: Code.ANG,
  decimalPlaces: 2,
  name: "Netherlands Antillean guilder",
  symbol: "ƒ",
} as const;

/**
 * Angolan kwanza (AOA)
 */
export const AOA: Currency = {
  code: Code.AOA,
  decimalPlaces: 2,
  name: "Angolan kwanza",
  symbol: "Kz",
} as const;

/**
 * Argentine peso (ARS)
 */
export const ARS: Currency = {
  code: Code.ARS,
  decimalPlaces: 2,
  name: "Argentine peso",
  symbol: "$",
} as const;

/**
 * Australian dollar (AUD)
 */
export const AUD: Currency = {
  code: Code.AUD,
  decimalPlaces: 2,
  name: "Australian dollar",
  symbol: "$",
} as const;

/**
 * Aruban florin (AWG)
 */
export const AWG: Currency = {
  code: Code.AWG,
  decimalPlaces: 2,
  name: "Aruban florin",
  symbol: "ƒ",
} as const;

/**
 * Azerbaijani manat (AZN)
 */
export const AZN: Currency = {
  code: Code.AZN,
  decimalPlaces: 2,
  name: "Azerbaijani manat",
  symbol: "₼",
} as const;

/**
 * Bosnia and Herzegovina convertible mark (BAM)
 */
export const BAM: Currency = {
  code: Code.BAM,
  decimalPlaces: 2,
  name: "Bosnia and Herzegovina convertible mark",
  symbol: "KM",
} as const;

/**
 * Barbados dollar (BBD)
 */
export const BBD: Currency = {
  code: Code.BBD,
  decimalPlaces: 2,
  name: "Barbados dollar",
  symbol: "$",
} as const;

/**
 * Bangladeshi taka (BDT)
 */
export const BDT: Currency = {
  code: Code.BDT,
  decimalPlaces: 2,
  name: "Bangladeshi taka",
  symbol: "৳",
} as const;

/**
 * Bulgarian lev (BGN)
 */
export const BGN: Currency = {
  code: Code.BGN,
  decimalPlaces: 2,
  name: "Bulgarian lev",
  symbol: "лв",
} as const;

/**
 * Bahraini dinar (BHD)
 */
export const BHD: Currency = {
  code: Code.BHD,
  decimalPlaces: 3,
  name: "Bahraini dinar",
  symbol: ".د.ب",
} as const;

/**
 * Burundian franc (BIF)
 */
export const BIF: Currency = {
  code: Code.BIF,
  decimalPlaces: 2,
  name: "Burundian franc",
  symbol: "FBu",
} as const;

/**
 * Bermudian dollar (BMD)
 */
export const BMD: Currency = {
  code: Code.BMD,
  decimalPlaces: 2,
  name: "Bermudian dollar",
  symbol: "$",
} as const;

/**
 * Brunei dollar (BND)
 */
export const BND: Currency = {
  code: Code.BND,
  decimalPlaces: 2,
  name: "Brunei dollar",
  symbol: "$",
} as const;

/**
 * Boliviano (BOB)
 */
export const BOB: Currency = {
  code: Code.BOB,
  decimalPlaces: 2,
  name: "Boliviano",
  symbol: "Bs.",
} as const;

/**
 * Bolivian Mvdol (funds code) (BOV)
 */
export const BOV: Currency = {
  code: Code.BOV,
  decimalPlaces: 2,
  name: "Bolivian Mvdol (funds code)",
  symbol: "BOV",
} as const;

/**
 * Brazilian real (BRL)
 */
export const BRL: Currency = {
  code: Code.BRL,
  decimalPlaces: 2,
  name: "Brazilian real",
  symbol: "R$",
} as const;

/**
 * Bahamian dollar (BSD)
 */
export const BSD: Currency = {
  code: Code.BSD,
  decimalPlaces: 2,
  name: "Bahamian dollar",
  symbol: "$",
} as const;

/**
 * Bhutanese ngultrum (BTN)
 */
export const BTN: Currency = {
  code: Code.BTN,
  decimalPlaces: 2,
  name: "Bhutanese ngultrum",
  symbol: "Nu.",
} as const;

/**
 * Botswana pula (BWP)
 */
export const BWP: Currency = {
  code: Code.BWP,
  decimalPlaces: 2,
  name: "Botswana pula",
  symbol: "P",
} as const;

/**
 * Belarusian ruble (BYN)
 */
export const BYN: Currency = {
  code: Code.BYN,
  decimalPlaces: 2,
  name: "Belarusian ruble",
  symbol: "Br",
} as const;

/**
 * Belize dollar (BZD)
 */
export const BZD: Currency = {
  code: Code.BZD,
  decimalPlaces: 2,
  name: "Belize dollar",
  symbol: "$",
} as const;

/**
 * Canadian dollar (CAD)
 */
export const CAD: Currency = {
  code: Code.CAD,
  decimalPlaces: 2,
  name: "Canadian dollar",
  symbol: "$",
} as const;

/**
 * Congolese franc (CDF)
 */
export const CDF: Currency = {
  code: Code.CDF,
  decimalPlaces: 2,
  name: "Congolese franc",
  symbol: "FC",
} as const;

/**
 * WIR euro (complementary currency) (CHE)
 */
export const CHE: Currency = {
  code: Code.CHE,
  decimalPlaces: 2,
  name: "WIR euro (complementary currency)",
  symbol: "CHE",
} as const;

/**
 * Swiss franc (CHF)
 */
export const CHF: Currency = {
  code: Code.CHF,
  decimalPlaces: 2,
  name: "Swiss franc",
  symbol: "CHF",
} as const;

/**
 * WIR franc (complementary currency) (CHW)
 */
export const CHW: Currency = {
  code: Code.CHW,
  decimalPlaces: 2,
  name: "WIR franc (complementary currency)",
  symbol: "CHW",
} as const;

/**
 * Unidad de Fomento (funds code) (CLF)
 */
export const CLF: Currency = {
  code: Code.CLF,
  decimalPlaces: 4,
  name: "Unidad de Fomento (funds code)",
  symbol: "CLF",
} as const;

/**
 * Chilean peso (CLP)
 */
export const CLP: Currency = {
  code: Code.CLP,
  decimalPlaces: 0,
  name: "Chilean peso",
  symbol: "$",
} as const;

/**
 * Colombian peso (COP)
 */
export const COP: Currency = {
  code: Code.COP,
  decimalPlaces: 2,
  name: "Colombian peso",
  symbol: "$",
} as const;

/**
 * Unidad de Valor Real (UVR) (funds code) (COU)
 */
export const COU: Currency = {
  code: Code.COU,
  decimalPlaces: 2,
  name: "Unidad de Valor Real (UVR) (funds code)",
  symbol: "COU",
} as const;

/**
 * Costa Rican colon (CRC)
 */
export const CRC: Currency = {
  code: Code.CRC,
  decimalPlaces: 2,
  name: "Costa Rican colon",
  symbol: "₡",
} as const;

/**
 * Cuban convertible peso (CUC)
 */
export const CUC: Currency = {
  code: Code.CUC,
  decimalPlaces: 2,
  name: "Cuban convertible peso",
  symbol: "$",
} as const;

/**
 * Cuban peso (CUP)
 */
export const CUP: Currency = {
  code: Code.CUP,
  decimalPlaces: 2,
  name: "Cuban peso",
  symbol: "$",
} as const;

/**
 * Cape Verdean escudo (CVE)
 */
export const CVE: Currency = {
  code: Code.CVE,
  decimalPlaces: 2,
  name: "Cape Verdean escudo",
  symbol: "$",
} as const;

/**
 * Czech koruna (CZK)
 */
export const CZK: Currency = {
  code: Code.CZK,
  decimalPlaces: 2,
  name: "Czech koruna",
  symbol: "Kč",
} as const;

/**
 * Djiboutian franc (DJF)
 */
export const DJF: Currency = {
  code: Code.DJF,
  decimalPlaces: 0,
  name: "Djiboutian franc",
  symbol: "Fdj",
} as const;

/**
 * Danish krone (DKK)
 */
export const DKK: Currency = {
  code: Code.DKK,
  decimalPlaces: 2,
  name: "Danish krone",
  symbol: "kr",
} as const;

/**
 * Dominican peso (DOP)
 */
export const DOP: Currency = {
  code: Code.DOP,
  decimalPlaces: 2,
  name: "Dominican peso",
  symbol: "$",
} as const;

/**
 * Algerian dinar (DZD)
 */
export const DZD: Currency = {
  code: Code.DZD,
  decimalPlaces: 2,
  name: "Algerian dinar",
  symbol: "د.ج",
} as const;

/**
 * Egyptian pound (EGP)
 */
export const EGP: Currency = {
  code: Code.EGP,
  decimalPlaces: 2,
  name: "Egyptian pound",
  symbol: "£",
} as const;

/**
 * Eritrean nakfa (ERN)
 */
export const ERN: Currency = {
  code: Code.ERN,
  decimalPlaces: 2,
  name: "Eritrean nakfa",
  symbol: "Nfk",
} as const;

/**
 * Ethiopian birr (ETB)
 */
export const ETB: Currency = {
  code: Code.ETB,
  decimalPlaces: 2,
  name: "Ethiopian birr",
  symbol: "Br",
} as const;

/**
 * Euro (EUR)
 */
export const EUR: Currency = {
  code: Code.EUR,
  decimalPlaces: 2,
  name: "Euro",
  symbol: "€",
} as const;

/**
 * Fiji dollar (FJD)
 */
export const FJD: Currency = {
  code: Code.FJD,
  decimalPlaces: 2,
  name: "Fiji dollar",
  symbol: "$",
} as const;

/**
 * Falkland Islands pound (FKP)
 */
export const FKP: Currency = {
  code: Code.FKP,
  decimalPlaces: 2,
  name: "Falkland Islands pound",
  symbol: "£",
} as const;

/**
 * Pound sterling (GBP)
 */
export const GBP: Currency = {
  code: Code.GBP,
  decimalPlaces: 2,
  name: "Pound sterling",
  symbol: "£",
} as const;

/**
 * Georgian lari (GEL)
 */
export const GEL: Currency = {
  code: Code.GEL,
  decimalPlaces: 2,
  name: "Georgian lari",
  symbol: "₾",
} as const;

/**
 * Ghanaian cedi (GHS)
 */
export const GHS: Currency = {
  code: Code.GHS,
  decimalPlaces: 2,
  name: "Ghanaian cedi",
  symbol: "₵",
} as const;

/**
 * Gibraltar pound (GIP)
 */
export const GIP: Currency = {
  code: Code.GIP,
  decimalPlaces: 2,
  name: "Gibraltar pound",
  symbol: "£",
} as const;

/**
 * Gambian dalasi (GMD)
 */
export const GMD: Currency = {
  code: Code.GMD,
  decimalPlaces: 2,
  name: "Gambian dalasi",
  symbol: "D",
} as const;

/**
 * Guinean franc (GNF)
 */
export const GNF: Currency = {
  code: Code.GNF,
  decimalPlaces: 0,
  name: "Guinean franc",
  symbol: "FG",
} as const;

/**
 * Guatemalan quetzal (GTQ)
 */
export const GTQ: Currency = {
  code: Code.GTQ,
  decimalPlaces: 2,
  name: "Guatemalan quetzal",
  symbol: "Q",
} as const;

/**
 * Guyanese dollar (GYD)
 */
export const GYD: Currency = {
  code: Code.GYD,
  decimalPlaces: 2,
  name: "Guyanese dollar",
  symbol: "$",
} as const;

/**
 * Hong Kong dollar (HKD)
 */
export const HKD: Currency = {
  code: Code.HKD,
  decimalPlaces: 2,
  name: "Hong Kong dollar",
  symbol: "$",
} as const;

/**
 * Honduran lempira (HNL)
 */
export const HNL: Currency = {
  code: Code.HNL,
  decimalPlaces: 2,
  name: "Honduran lempira",
  symbol: "L",
} as const;

/**
 * Haitian gourde (HTG)
 */
export const HTG: Currency = {
  code: Code.HTG,
  decimalPlaces: 2,
  name: "Haitian gourde",
  symbol: "G",
} as const;

/**
 * Hungarian forint (HUF)
 */
export const HUF: Currency = {
  code: Code.HUF,
  decimalPlaces: 2,
  name: "Hungarian forint",
  symbol: "Ft",
} as const;

/**
 * Indonesian rupiah (IDR)
 */
export const IDR: Currency = {
  code: Code.IDR,
  decimalPlaces: 2,
  name: "Indonesian rupiah",
  symbol: "Rp",
} as const;

/**
 * Israeli new shekel (ILS)
 */
export const ILS: Currency = {
  code: Code.ILS,
  decimalPlaces: 2,
  name: "Israeli new shekel",
  symbol: "₪",
} as const;

/**
 * Indian rupee (INR)
 */
export const INR: Currency = {
  code: Code.INR,
  decimalPlaces: 2,
  name: "Indian rupee",
  symbol: "₹",
} as const;

/**
 * Iraqi dinar (IQD)
 */
export const IQD: Currency = {
  code: Code.IQD,
  decimalPlaces: 3,
  name: "Iraqi dinar",
  symbol: "ع.د",
} as const;

/**
 * Iranian rial (IRR)
 */
export const IRR: Currency = {
  code: Code.IRR,
  decimalPlaces: 2,
  name: "Iranian rial",
  symbol: "﷼",
} as const;

/**
 * Icelandic króna (plural: krónur) (ISK)
 */
export const ISK: Currency = {
  code: Code.ISK,
  decimalPlaces: 0,
  name: "Icelandic króna (plural: krónur)",
  symbol: "kr",
} as const;

/**
 * Jamaican dollar (JMD)
 */
export const JMD: Currency = {
  code: Code.JMD,
  decimalPlaces: 2,
  name: "Jamaican dollar",
  symbol: "$",
} as const;

/**
 * Jordanian dinar (JOD)
 */
export const JOD: Currency = {
  code: Code.JOD,
  decimalPlaces: 3,
  name: "Jordanian dinar",
  symbol: "د.ا",
} as const;

/**
 * Japanese yen (JPY)
 */
export const JPY: Currency = {
  code: Code.JPY,
  decimalPlaces: 0,
  name: "Japanese yen",
  symbol: "¥",
} as const;

/**
 * Kenyan shilling (KES)
 */
export const KES: Currency = {
  code: Code.KES,
  decimalPlaces: 2,
  name: "Kenyan shilling",
  symbol: "Sh",
} as const;

/**
 * Kyrgyzstani som (KGS)
 */
export const KGS: Currency = {
  code: Code.KGS,
  decimalPlaces: 2,
  name: "Kyrgyzstani som",
  symbol: "с",
} as const;

/**
 * Cambodian riel (KHR)
 */
export const KHR: Currency = {
  code: Code.KHR,
  decimalPlaces: 2,
  name: "Cambodian riel",
  symbol: "៛",
} as const;

/**
 * Comoro franc (KMF)
 */
export const KMF: Currency = {
  code: Code.KMF,
  decimalPlaces: 0,
  name: "Comoro franc",
  symbol: "CF",
} as const;

/**
 * North Korean won (KPW)
 */
export const KPW: Currency = {
  code: Code.KPW,
  decimalPlaces: 2,
  name: "North Korean won",
  symbol: "₩",
} as const;

/**
 * South Korean won (KRW)
 */
export const KRW: Currency = {
  code: Code.KRW,
  decimalPlaces: 2,
  name: "South Korean won",
  symbol: "₩",
} as const;

/**
 * Kuwaiti dinar (KWD)
 */
export const KWD: Currency = {
  code: Code.KWD,
  decimalPlaces: 2,
  name: "Kuwaiti dinar",
  symbol: "د.ك",
} as const;

/**
 * Cayman Islands dollar (KYD)
 */
export const KYD: Currency = {
  code: Code.KYD,
  decimalPlaces: 2,
  name: "Cayman Islands dollar",
  symbol: "$",
} as const;

/**
 * Kazakhstani tenge (KZT)
 */
export const KZT: Currency = {
  code: Code.KZT,
  decimalPlaces: 2,
  name: "Kazakhstani tenge",
  symbol: "₸",
} as const;

/**
 * Lao kip (LAK)
 */
export const LAK: Currency = {
  code: Code.LAK,
  decimalPlaces: 0,
  name: "Lao kip",
  symbol: "₭",
} as const;

/**
 * Lebanese pound (LBP)
 */
export const LBP: Currency = {
  code: Code.LBP,
  decimalPlaces: 2,
  name: "Lebanese pound",
  symbol: "ل.ل",
} as const;

/**
 * Sri Lankan rupee (LKR)
 */
export const LKR: Currency = {
  code: Code.LKR,
  decimalPlaces: 2,
  name: "Sri Lankan rupee",
  symbol: "Rs",
} as const;

/**
 * Liberian dollar (LRD)
 */
export const LRD: Currency = {
  code: Code.LRD,
  decimalPlaces: 2,
  name: "Liberian dollar",
  symbol: "$",
} as const;

/**
 * Lesotho loti (LSL)
 */
export const LSL: Currency = {
  code: Code.LSL,
  decimalPlaces: 2,
  name: "Lesotho loti",
  symbol: "L",
} as const;

/**
 * Libyan dinar (LYD)
 */
export const LYD: Currency = {
  code: Code.LYD,
  decimalPlaces: 3,
  name: "Libyan dinar",
  symbol: "ل.د",
} as const;

/**
 * Moroccan dirham (MAD)
 */
export const MAD: Currency = {
  code: Code.MAD,
  decimalPlaces: 2,
  name: "Moroccan dirham",
  symbol: "د.م.",
} as const;

/**
 * Moldovan leu (MDL)
 */
export const MDL: Currency = {
  code: Code.MDL,
  decimalPlaces: 2,
  name: "Moldovan leu",
  symbol: "L",
} as const;

/**
 * Malagasy ariary (MGA)
 */
export const MGA: Currency = {
  code: Code.MGA,
  decimalPlaces: 2,
  name: "Malagasy ariary",
  symbol: "Ar",
} as const;

/**
 * Macedonian denar (MKD)
 */
export const MKD: Currency = {
  code: Code.MKD,
  decimalPlaces: 2,
  name: "Macedonian denar",
  symbol: "ден",
} as const;

/**
 * Myanmar kyat (MMK)
 */
export const MMK: Currency = {
  code: Code.MMK,
  decimalPlaces: 2,
  name: "Myanmar kyat",
  symbol: "K",
} as const;

/**
 * Mongolian tögrög (MNT)
 */
export const MNT: Currency = {
  code: Code.MNT,
  decimalPlaces: 2,
  name: "Mongolian tögrög",
  symbol: "₮",
} as const;

/**
 * Macanese pataca (MOP)
 */
export const MOP: Currency = {
  code: Code.MOP,
  decimalPlaces: 2,
  name: "Macanese pataca",
  symbol: "P",
} as const;

/**
 * Mauritanian ouguiya (MRU)
 */
export const MRU: Currency = {
  code: Code.MRU,
  decimalPlaces: 2,
  name: "Mauritanian ouguiya",
  symbol: "UM",
} as const;

/**
 * Mauritian rupee (MUR)
 */
export const MUR: Currency = {
  code: Code.MUR,
  decimalPlaces: 2,
  name: "Mauritian rupee",
  symbol: "₨",
} as const;

/**
 * Maldivian rufiyaa (MVR)
 */
export const MVR: Currency = {
  code: Code.MVR,
  decimalPlaces: 2,
  name: "Maldivian rufiyaa",
  symbol: "Rf",
} as const;

/**
 * Malawian kwacha (MWK)
 */
export const MWK: Currency = {
  code: Code.MWK,
  decimalPlaces: 2,
  name: "Malawian kwacha",
  symbol: "MK",
} as const;

/**
 * Mexican peso (MXN)
 */
export const MXN: Currency = {
  code: Code.MXN,
  decimalPlaces: 2,
  name: "Mexican peso",
  symbol: "$",
} as const;

/**
 * Mexican Unidad de Inversion (UDI) (funds code) (MXV)
 */
export const MXV: Currency = {
  code: Code.MXV,
  decimalPlaces: 2,
  name: "Mexican Unidad de Inversion (UDI) (funds code)",
  symbol: "MXV",
} as const;

/**
 * Malaysian ringgit (MYR)
 */
export const MYR: Currency = {
  code: Code.MYR,
  decimalPlaces: 2,
  name: "Malaysian ringgit",
  symbol: "RM",
} as const;

/**
 * Mozambican metical (MZN)
 */
export const MZN: Currency = {
  code: Code.MZN,
  decimalPlaces: 2,
  name: "Mozambican metical",
  symbol: "MT",
} as const;

/**
 * Namibian dollar (NAD)
 */
export const NAD: Currency = {
  code: Code.NAD,
  decimalPlaces: 2,
  name: "Namibian dollar",
  symbol: "$",
} as const;

/**
 * Nigerian naira (NGN)
 */
export const NGN: Currency = {
  code: Code.NGN,
  decimalPlaces: 2,
  name: "Nigerian naira",
  symbol: "₦",
} as const;

/**
 * Nicaraguan córdoba (NIO)
 */
export const NIO: Currency = {
  code: Code.NIO,
  decimalPlaces: 2,
  name: "Nicaraguan córdoba",
  symbol: "C$",
} as const;

/**
 * Norwegian krone (NOK)
 */
export const NOK: Currency = {
  code: Code.NOK,
  decimalPlaces: 2,
  name: "Norwegian krone",
  symbol: "kr",
} as const;

/**
 * Nepalese rupee (NPR)
 */
export const NPR: Currency = {
  code: Code.NPR,
  decimalPlaces: 2,
  name: "Nepalese rupee",
  symbol: "₨",
} as const;

/**
 * New Zealand dollar (NZD)
 */
export const NZD: Currency = {
  code: Code.NZD,
  decimalPlaces: 2,
  name: "New Zealand dollar",
  symbol: "$",
} as const;

/**
 * Omani rial (OMR)
 */
export const OMR: Currency = {
  code: Code.OMR,
  decimalPlaces: 3,
  name: "Omani rial",
  symbol: "ر.ع.",
} as const;

/**
 * Panamanian balboa (PAB)
 */
export const PAB: Currency = {
  code: Code.PAB,
  decimalPlaces: 2,
  name: "Panamanian balboa",
  symbol: "B/.",
} as const;

/**
 * Peruvian sol (PEN)
 */
export const PEN: Currency = {
  code: Code.PEN,
  decimalPlaces: 2,
  name: "Peruvian sol",
  symbol: "S/.",
} as const;

/**
 * Papua New Guinean kina (PGK)
 */
export const PGK: Currency = {
  code: Code.PGK,
  decimalPlaces: 2,
  name: "Papua New Guinean kina",
  symbol: "K",
} as const;

/**
 * Philippine peso (PHP)
 */
export const PHP: Currency = {
  code: Code.PHP,
  decimalPlaces: 2,
  name: "Philippine peso",
  symbol: "₱",
} as const;

/**
 * Pakistani rupee (PKR)
 */
export const PKR: Currency = {
  code: Code.PKR,
  decimalPlaces: 2,
  name: "Pakistani rupee",
  symbol: "₨",
} as const;

/**
 * Polish złoty (PLN)
 */
export const PLN: Currency = {
  code: Code.PLN,
  decimalPlaces: 2,
  name: "Polish złoty",
  symbol: "zł",
} as const;

/**
 * Paraguayan guaraní (PYG)
 */
export const PYG: Currency = {
  code: Code.PYG,
  decimalPlaces: 0,
  name: "Paraguayan guaraní",
  symbol: "₲",
} as const;

/**
 * Qatari riyal (QAR)
 */
export const QAR: Currency = {
  code: Code.QAR,
  decimalPlaces: 2,
  name: "Qatari riyal",
  symbol: "ر.ق",
} as const;

/**
 * Romanian leu (RON)
 */
export const RON: Currency = {
  code: Code.RON,
  decimalPlaces: 2,
  name: "Romanian leu",
  symbol: "lei",
} as const;

/**
 * Serbian dinar (RSD)
 */
export const RSD: Currency = {
  code: Code.RSD,
  decimalPlaces: 2,
  name: "Serbian dinar",
  symbol: "дин.",
} as const;

/**
 * Renminbi (CNY)
 */
export const CNY: Currency = {
  code: Code.CNY,
  decimalPlaces: 2,
  name: "Renminbi",
  symbol: "¥",
} as const;

/**
 * Russian ruble (RUB)
 */
export const RUB: Currency = {
  code: Code.RUB,
  decimalPlaces: 2,
  name: "Russian ruble",
  symbol: "₽",
} as const;

/**
 * Rwandan franc (RWF)
 */
export const RWF: Currency = {
  code: Code.RWF,
  decimalPlaces: 0,
  name: "Rwandan franc",
  symbol: "FRw",
} as const;

/**
 * Saudi riyal (SAR)
 */
export const SAR: Currency = {
  code: Code.SAR,
  decimalPlaces: 2,
  name: "Saudi riyal",
  symbol: "ر.س",
} as const;

/**
 * Solomon Islands dollar (SBD)
 */
export const SBD: Currency = {
  code: Code.SBD,
  decimalPlaces: 2,
  name: "Solomon Islands dollar",
  symbol: "$",
} as const;

/**
 * Seychelles rupee (SCR)
 */
export const SCR: Currency = {
  code: Code.SCR,
  decimalPlaces: 2,
  name: "Seychelles rupee",
  symbol: "₨",
} as const;

/**
 * Sudanese pound (SDG)
 */
export const SDG: Currency = {
  code: Code.SDG,
  decimalPlaces: 2,
  name: "Sudanese pound",
  symbol: "ج.س.",
} as const;

/**
 * Swedish krona (plural: kronor) (SEK)
 */
export const SEK: Currency = {
  code: Code.SEK,
  decimalPlaces: 2,
  name: "Swedish krona (plural: kronor)",
  symbol: "kr",
} as const;

/**
 * Singapore dollar (SGD)
 */
export const SGD: Currency = {
  code: Code.SGD,
  decimalPlaces: 2,
  name: "Singapore dollar",
  symbol: "$",
} as const;

/**
 * Saint Helena pound (SHP)
 */
export const SHP: Currency = {
  code: Code.SHP,
  decimalPlaces: 2,
  name: "Saint Helena pound",
  symbol: "£",
} as const;

/**
 * Sierra Leonean leone (new leone) (SLE)
 */
export const SLE: Currency = {
  code: Code.SLE,
  decimalPlaces: 2,
  name: "Sierra Leonean leone (new leone)",
  symbol: "Le",
} as const;

/**
 * Sierra Leonean leone (old leone) (SLL)
 */
export const SLL: Currency = {
  code: Code.SLL,
  decimalPlaces: 2,
  name: "Sierra Leonean leone (old leone)",
  symbol: "Le",
} as const;

/**
 * Somali shilling (SOS)
 */
export const SOS: Currency = {
  code: Code.SOS,
  decimalPlaces: 2,
  name: "Somali shilling",
  symbol: "Sh",
} as const;

/**
 * Surinamese dollar (SRD)
 */
export const SRD: Currency = {
  code: Code.SRD,
  decimalPlaces: 2,
  name: "Surinamese dollar",
  symbol: "$",
} as const;

/**
 * South Sudanese pound (SSP)
 */
export const SSP: Currency = {
  code: Code.SSP,
  decimalPlaces: 2,
  name: "South Sudanese pound",
  symbol: "£",
} as const;

/**
 * São Tomé and Príncipe dobra (STN)
 */
export const STN: Currency = {
  code: Code.STN,
  decimalPlaces: 2,
  name: "São Tomé and Príncipe dobra",
  symbol: "Db",
} as const;

/**
 * Salvadoran colón (SVC)
 */
export const SVC: Currency = {
  code: Code.SVC,
  decimalPlaces: 2,
  name: "Salvadoran colón",
  symbol: "₡",
} as const;

/**
 * Syrian pound (SYP)
 */
export const SYP: Currency = {
  code: Code.SYP,
  decimalPlaces: 2,
  name: "Syrian pound",
  symbol: "£",
} as const;

/**
 * Swazi lilangeni (SZL)
 */
export const SZL: Currency = {
  code: Code.SZL,
  decimalPlaces: 2,
  name: "Swazi lilangeni",
  symbol: "E",
} as const;

/**
 * Thai baht (THB)
 */
export const THB: Currency = {
  code: Code.THB,
  decimalPlaces: 2,
  name: "Thai baht",
  symbol: "฿",
} as const;

/**
 * Tajikistani somoni (TJS)
 */
export const TJS: Currency = {
  code: Code.TJS,
  decimalPlaces: 2,
  name: "Tajikistani somoni",
  symbol: "ЅМ",
} as const;

/**
 * Turkmenistan manat (TMT)
 */
export const TMT: Currency = {
  code: Code.TMT,
  decimalPlaces: 2,
  name: "Turkmenistan manat",
  symbol: "m",
} as const;

/**
 * Tunisian dinar (TND)
 */
export const TND: Currency = {
  code: Code.TND,
  decimalPlaces: 3,
  name: "Tunisian dinar",
  symbol: "د.ت",
} as const;

/**
 * Tongan paʻanga (TOP)
 */
export const TOP: Currency = {
  code: Code.TOP,
  decimalPlaces: 2,
  name: "Tongan paʻanga",
  symbol: "T$",
} as const;

/**
 * Trinidad and Tobago dollar (TTD)
 */
export const TTD: Currency = {
  code: Code.TTD,
  decimalPlaces: 2,
  name: "Trinidad and Tobago dollar",
  symbol: "$",
} as const;

/**
 * New Taiwan dollar (TWD)
 */
export const TWD: Currency = {
  code: Code.TWD,
  decimalPlaces: 2,
  name: "New Taiwan dollar",
  symbol: "NT$",
} as const;

/**
 * Tanzanian shilling (TZS)
 */
export const TZS: Currency = {
  code: Code.TZS,
  decimalPlaces: 2,
  name: "Tanzanian shilling",
  symbol: "Sh",
} as const;

/**
 * Ukrainian hryvnia (UAH)
 */
export const UAH: Currency = {
  code: Code.UAH,
  decimalPlaces: 2,
  name: "Ukrainian hryvnia",
  symbol: "₴",
} as const;

/**
 * Ugandan shilling (UGX)
 */
export const UGX: Currency = {
  code: Code.UGX,
  decimalPlaces: 2,
  name: "Ugandan shilling",
  symbol: "Sh",
} as const;

/**
 * United States dollar (USD)
 */
export const USD: Currency = {
  code: Code.USD,
  decimalPlaces: 2,
  name: "United States dollar",
  symbol: "$",
} as const;

/**
 * United States dollar (next day) (funds code) (USN)
 */
export const USN: Currency = {
  code: Code.USN,
  decimalPlaces: 2,
  name: "United States dollar (next day) (funds code)",
  symbol: "USN",
} as const;

/**
 * Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code) (UYI)
 */
export const UYI: Currency = {
  code: Code.UYI,
  decimalPlaces: 3,
  name: "Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)",
  symbol: "UYI",
} as const;

/**
 * Uruguayan peso (UYU)
 */
export const UYU: Currency = {
  code: Code.UYU,
  decimalPlaces: 2,
  name: "Uruguayan peso",
  symbol: "$",
} as const;

/**
 * Unidad previsional (UYW)
 */
export const UYW: Currency = {
  code: Code.UYW,
  decimalPlaces: 2,
  name: "Unidad previsional",
  symbol: "UYW",
} as const;

/**
 * Uzbekistan sum (UZS)
 */
export const UZS: Currency = {
  code: Code.UZS,
  decimalPlaces: 2,
  name: "Uzbekistan sum",
  symbol: "сўм",
} as const;

/**
 * Venezuelan digital bolívar (VED)
 */
export const VED: Currency = {
  code: Code.VED,
  decimalPlaces: 2,
  name: "Venezuelan digital bolívar",
  symbol: "Bs.",
} as const;

/**
 * Venezuelan sovereign bolívar (VES)
 */
export const VES: Currency = {
  code: Code.VES,
  decimalPlaces: 2,
  name: "Venezuelan sovereign bolívar",
  symbol: "Bs.",
} as const;

/**
 * Vietnamese đồng (VND)
 */
export const VND: Currency = {
  code: Code.VND,
  decimalPlaces: 0,
  name: "Vietnamese đồng",
  symbol: "₫",
} as const;

/**
 * Vanuatu vatu (VUV)
 */
export const VUV: Currency = {
  code: Code.VUV,
  decimalPlaces: 0,
  name: "Vanuatu vatu",
  symbol: "VT",
} as const;

/**
 * Samoan tala (WST)
 */
export const WST: Currency = {
  code: Code.WST,
  decimalPlaces: 2,
  name: "Samoan tala",
  symbol: "WS$",
} as const;

/**
 * CFA franc BEAC (XAF)
 */
export const XAF: Currency = {
  code: Code.XAF,
  decimalPlaces: 2,
  name: "CFA franc BEAC",
  symbol: "FCFA",
} as const;

/**
 * Silver (one troy ounce) (XAG)
 */
export const XAG: Currency = {
  code: Code.XAG,
  decimalPlaces: 0,
  name: "Silver (one troy ounce)",
  symbol: "XAG",
} as const;

/**
 * Gold (one troy ounce) (XAU)
 */
export const XAU: Currency = {
  code: Code.XAU,
  decimalPlaces: 0,
  name: "Gold (one troy ounce)",
  symbol: "XAU",
} as const;

/**
 * European Composite Unit (EURCO) (bond market unit) (XBA)
 */
export const XBA: Currency = {
  code: Code.XBA,
  decimalPlaces: 2,
  name: "European Composite Unit (EURCO) (bond market unit)",
  symbol: "XBA",
} as const;

/**
 * European Monetary Unit (E.M.U.-6) (bond market unit) (XBB)
 */
export const XBB: Currency = {
  code: Code.XBB,
  decimalPlaces: 2,
  name: "European Monetary Unit (E.M.U.-6) (bond market unit)",
  symbol: "XBB",
} as const;

/**
 * European Unit of Account 9 (E.U.A.-9) (bond market unit) (XBC)
 */
export const XBC: Currency = {
  code: Code.XBC,
  decimalPlaces: 2,
  name: "European Unit of Account 9 (E.U.A.-9) (bond market unit)",
  symbol: "XBC",
} as const;

/**
 * European Unit of Account 17 (E.U.A.-17) (bond market unit) (XBD)
 */
export const XBD: Currency = {
  code: Code.XBD,
  decimalPlaces: 2,
  name: "European Unit of Account 17 (E.U.A.-17) (bond market unit)",
  symbol: "XBD",
} as const;

/**
 * East Caribbean dollar (XCD)
 */
export const XCD: Currency = {
  code: Code.XCD,
  decimalPlaces: 2,
  name: "East Caribbean dollar",
  symbol: "$",
} as const;

/**
 * Special drawing rights (XDR)
 */
export const XDR: Currency = {
  code: Code.XDR,
  decimalPlaces: 2,
  name: "Special drawing rights",
  symbol: "XDR",
} as const;

/**
 * CFA franc BCEAO (XOF)
 */
export const XOF: Currency = {
  code: Code.XOF,
  decimalPlaces: 2,
  name: "CFA franc BCEAO",
  symbol: "CFA",
} as const;

/**
 * Palladium (one troy ounce) (XPD)
 */
export const XPD: Currency = {
  code: Code.XPD,
  decimalPlaces: 2,
  name: "Palladium (one troy ounce)",
  symbol: "XPD",
} as const;

/**
 * CFP franc (franc Pacifique) (XPF)
 */
export const XPF: Currency = {
  code: Code.XPF,
  decimalPlaces: 2,
  name: "CFP franc (franc Pacifique)",
  symbol: "CFP",
} as const;

/**
 * Platinum (one troy ounce) (XPT)
 */
export const XPT: Currency = {
  code: Code.XPT,
  decimalPlaces: 2,
  name: "Platinum (one troy ounce)",
  symbol: "XPT",
} as const;

/**
 * SUCRE (XSU)
 */
export const XSU: Currency = {
  code: Code.XSU,
  decimalPlaces: 2,
  name: "SUCRE",
  symbol: "XSU",
} as const;

/**
 * Code reserved for testing (XTS)
 */
export const XTS: Currency = {
  code: Code.XTS,
  decimalPlaces: 2,
  name: "Code reserved for testing",
  symbol: "XTS",
} as const;

/**
 * ADB Unit of Account (XUA)
 */
export const XUA: Currency = {
  code: Code.XUA,
  decimalPlaces: 2,
  name: "ADB Unit of Account",
  symbol: "XUA",
} as const;

/**
 * No currency (XXX)
 */
export const XXX: Currency = {
  code: Code.XXX,
  decimalPlaces: 2,
  name: "No currency",
  symbol: "XXX",
} as const;

/**
 * Yemeni rial (YER)
 */
export const YER: Currency = {
  code: Code.YER,
  decimalPlaces: 2,
  name: "Yemeni rial",
  symbol: "﷼",
} as const;

/**
 * South African rand (ZAR)
 */
export const ZAR: Currency = {
  code: Code.ZAR,
  decimalPlaces: 2,
  name: "South African rand",
  symbol: "R",
} as const;

/**
 * Zambian kwacha (ZMW)
 */
export const ZMW: Currency = {
  code: Code.ZMW,
  decimalPlaces: 2,
  name: "Zambian kwacha",
  symbol: "ZK",
} as const;

/**
 * Zimbabwean dollar (fifth) (ZWL)
 */
export const ZWL: Currency = {
  code: Code.ZWL,
  decimalPlaces: 2,
  name: "Zimbabwean dollar (fifth)",
  symbol: "$",
} as const;
