import { CryptoCurrency } from "../enums/currency.enum";

// Cryptocurrencies Base Value
const NEP = 1;
const BUSD = 3;

const cryptoConversion = (cryptocurrency: string, value: string): number => {
  const currentValue = Number(value); // convert current value to number
  let convertedValue = 0;

  switch (
    cryptocurrency // apply conversion based on the selected cypto currency.
  ) {
    case CryptoCurrency.NEP:
      convertedValue = (currentValue * BUSD) / NEP;
      break;
    case CryptoCurrency.BUSD:
      convertedValue = (currentValue / BUSD) * NEP;
      break;
  }

  return Number(convertedValue.toFixed(2));
  // return the converted value and rounded to 2 decimal places which
  // converts it to a string and then converts it back to number again
};
const truncateString = (str: string, num: number): string => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }

  // Return str truncated with '...' concatenated to the end of str.
  return `${str.slice(0, num)}...`;
};

export { cryptoConversion, truncateString };
