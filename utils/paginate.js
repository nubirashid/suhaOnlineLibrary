export const paginate = (listArray, pageNo, limit) => {
  const numberOfItems = listArray.length
  const itemsPerPage = limit || 5
  const currentPage = pageNo || 1
  const numberOfPages = Math.ceil(numberOfItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const pageItems = listArray.slice(startIndex, endIndex)
  return {
    pageItems,
    numberOfPages
  }
}
