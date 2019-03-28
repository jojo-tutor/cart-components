export const formatCurrency = (number, numberFormat) => {
  numberFormat = numberFormat || {
    locale: "en-ph",
    options: {
      style: "currency",
      currency: "Php"
    }
  };

  return new Intl.NumberFormat(
    numberFormat.locale,
    numberFormat.options
  ).format(Number(number));
};

export const updateListItem = (list, comparatorFn, updaterFn) =>
  list.map(item => {
    if (comparatorFn(item)) {
      item = {
        ...item,
        ...updaterFn(item)
      };
    }
    return item;
  });

export const getSubTotal = list =>
  list.reduce((acc, curr) => {
    const { quantity, price } = curr;
    return acc + Number(quantity) * Number(price);
  }, 0);
