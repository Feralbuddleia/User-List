const Types = {
  SET_SEARCH: 'SET_SEARCH',
  SET_SORT: 'SET_SORT'
};

const initSort = {
  field: '',
  asc: 1
}

const setSearch = (search = '') => ({
  type: Types.SET_SEARCH,
  search
});

const setSort = (sort = initSort) => ({
  type: Types.SET_SORT,
  sort
});

export { Types, initSort, setSearch, setSort};