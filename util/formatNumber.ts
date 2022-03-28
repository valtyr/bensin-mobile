const formatNumber = (n: number, toFixed?: number) => {
  const formatter = Intl.NumberFormat(undefined, {
    maximumFractionDigits: toFixed,
  });

  return formatter.format(n);
};

export default formatNumber;
