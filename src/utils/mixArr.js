export const mixArr = (arr) => {
  const res = arr?.map(i => [Math.random(), i]).sort().map(i => i[1]).slice(0, 10);
  return res
}
