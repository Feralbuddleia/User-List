const Types = {
  SET_PAGE_INC: 'SET_PAGE_INC',
  SET_PAGE_DEC: 'SET_PAGE_DEC',
  SET_PAGE_INIT: 'SET_PAGE_INIT',
  SET_PAGES: 'SET_PAGES'
};

const setPageInc = () => ({
  type: Types.SET_PAGE_INC
});

const setPageDec = () => ({
  type: Types.SET_PAGE_DEC
});

const setPageInit = () => ({
  type: Types.SET_PAGE_INIT
});

const setPages = (pages, total) => ({
  type: Types.SET_PAGES,
  pages,
  total
});

export { Types, setPageInc, setPageDec, setPages, setPageInit };