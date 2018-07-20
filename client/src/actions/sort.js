const Types = {
  SET_SORT: 'SET_SORT'
};

const setSort = (field = '') => ({
  type: Types.SET_SORT,
  field
});

export { Types, setSort };