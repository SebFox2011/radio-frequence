export function sortAndUniqueFromTab(freq, item) {
  const items = freq.filter((f) => f[item] !== "").map((i) => i[item]);
  return [...new Set(items.sort((a, b) => (a > b ? 1 : -1)))];
}

export function filterDatas(
  freq,
  bande,
  departement,
  fonction,
  mode,
  type,
  station
) {
  let tab = freq;
  if (departement !== "")
    tab = tab.filter((i) => i.dep.toString() === departement);
  if (bande !== "") tab = tab.filter((i) => i.bande === bande);
  if (fonction !== "") tab = tab.filter((i) => i.fonction === fonction);
  if (mode !== "") tab = tab.filter((i) => i.mode === mode);
  if (type !== "") tab = tab.filter((i) => i.type === type);
  if (station !== "") tab = tab.filter((i) => i.station === station);

  return tab;
}
