export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchResult: document.querySelector('.results__list'),
  result: document.querySelector('.results'),
  resultPages: document.querySelector('.results__pages'),
  recipe: document.querySelector('.recipe'),
};

const elementString = {
  loader: 'loader',
};

export const renderLoader = (parent) => {
  const loader = `
        <div class = ${elementString.loader}>
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementString.loader}`);
  if (loader) {
    loader.parentElement.removeChild(loader);
  }
};
