const Types = {
  SET_PAGE: 'SET_PAGE',
  SET_PAGES: 'SET_PAGES'
};

const setPage = (page = 1) => ({
  type: Types.SET_PAGE,
  page
});

const setPages = (pages, total) => ({
  type: Types.SET_PAGES,
  pages,
  total
})

export { Types, setPage, setPages };