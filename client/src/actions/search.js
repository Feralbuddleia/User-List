const Types = {
  SET_SEARCH: 'SET_SEARCH'
};

const setSearch = (content = '') => ({
  type: Types.SET_SEARCH,
  content
});

export { Types, setSearch};