export const getCalcRate = () => {
  const rate = localStorage.getItem('rate');
  const rateArray = rate ? JSON.parse(rate) : [];
  const totalRate = rateArray.length ? (rateArray.reduce((acc, sum) => acc + sum, 0) / rateArray.length).toFixed(1) : 0;
 
  return totalRate
}
