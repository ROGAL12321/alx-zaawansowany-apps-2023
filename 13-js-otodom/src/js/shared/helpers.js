const getIdFromSearchParams = (searchParams) => {
  const params = new URLSearchParams(searchParams)
  return params.get('id');
}

// Jesli wyeksportuje jako export default, to nie musze importowac z klamrami {}
// Uwaga: moze byc tylko 1 export default na plik
export default getIdFromSearchParams;