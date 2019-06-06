import { DEFAULT_PAGE_SIZE } from '@/constants'

export const getQueryParams = ({
  page = 1,
  pageSize = DEFAULT_PAGE_SIZE,
  searchContent = '',
  sortBy = null,
  sortDesc = true
}) => ({
  _page: page,
  _limit: pageSize,
  q: encodeURIComponent(searchContent),
  _sort: sortBy,
  _order: sortDesc ? 'desc' : 'asc'
})
