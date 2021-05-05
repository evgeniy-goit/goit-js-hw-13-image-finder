import 'material-design-icons';
import refs from './refs.js'
import articlesTpl from '../templates/articles.hbs';

export function appendArticlesMarkup(articles) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

export  function addGalleryMarkup(articles) {
    const newGalleryMarkup = articlesTpl(articles);
    refs.galleryContainer.innerHTML = newGalleryMarkup;
};

export function clearArticlesContainer() {
    refs.galleryContainer.innerHTML = '';
}