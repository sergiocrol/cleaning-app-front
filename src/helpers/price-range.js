export const CleanersPriceRange = (cleaners, isTotalPrice, jobDuration, addressDuration) => {
  console.log(cleaners, isTotalPrice, jobDuration, addressDuration)
  let pricesHour = null;
  let totalPrices = null;

  const roundedPrice = (fee, duration) => {
    return Math.round((duration / 60 * fee));
  }

  pricesHour = cleaners.reduce((totalValue, currentValue) => {
    if (currentValue.fee < totalValue[0]) totalValue[0] = currentValue.fee;
    if (currentValue.fee > totalValue[1]) totalValue[1] = currentValue.fee;
    return totalValue;
  }, [cleaners[0].fee, cleaners[0].fee]);

  if (jobDuration) {
    totalPrices = [roundedPrice(pricesHour[0], jobDuration), roundedPrice(pricesHour[1], jobDuration)];
  } else if (addressDuration) {
    totalPrices = [roundedPrice(pricesHour[0], addressDuration), roundedPrice(pricesHour[1], addressDuration)];
  }

  return isTotalPrice ? totalPrices : pricesHour;
}

export const JobsPriceRange = jobs => {

}