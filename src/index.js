import './style.css';
import ApiService from './js/apiService';
import refs from './js/refs.js';
import nameError from './js/errors.js';
import { clearArticlesContainer, addGalleryMarkup, appendArticlesMarkup } from './js/renderArticles.js'
import LoadMoreBtn from './js/components/load-more-btn'

const apiService = new ApiService();

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch (e) {
    e.preventDefault();

    apiService.query = e.currentTarget.elements.query.value;

    if (apiService.query === '') {
        return nameError();
    }

    loadMoreBtn.show();
    loadMoreBtn.disable();
    apiService.resetPage();
    apiService.fetchArticles().then(articles => {
        clearArticlesContainer();
        addGalleryMarkup(articles);
        loadMoreBtn.enable();
    });
        
}

 function onLoadMore () {
     apiService.fetchArticles().then(articles => {
         appendArticlesMarkup(articles);
 });

 window.scrollTo({
    bottom: 0,
    behavior: "smooth"
   });

}