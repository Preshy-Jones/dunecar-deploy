export const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//utility function to split the price byy commas
export const priceSplitter = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatMultipleValueKeyQuery = (key: string, values: string[]) => {
  return values.map((value) => `${key}=${value}`).join("&");
};

//format amount, k represents thousands, m represents millions
export const formatAmount = (amount: number) => {
  if (amount < 1000) {
    return amount;
  } else if (amount >= 1000 && amount < 1000000) {
    return `${(amount / 1000).toFixed(1)}k`;
  } else {
    return `${(amount / 1000000).toFixed(1)}m`;
  }
};

// const makes = ["toyota", "bmw"];
// const models = ["corolla", "camry", "x5", "x6"];

// console.log(formatMultipleValueKeyQuery("make", makes));
