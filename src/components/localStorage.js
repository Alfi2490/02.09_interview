const FAVORITE = 'FAVORITE';

function initFavorite() {
    localStorage.setItem(FAVORITE, '');
}

function getFavorite() {
    let fav = localStorage.getItem(FAVORITE);
    if (fav.startsWith(',')) {
        fav = fav.slice(1);
    }
    const tmp = fav.split(',');
    return tmp;
}

function addFavorite(id) {
    let favorite =  localStorage.getItem(FAVORITE);
    let tmp = favorite + `,${id}`;
    localStorage.setItem(FAVORITE, tmp);
}

const actions = { initFavorite, addFavorite, getFavorite };

export default actions;