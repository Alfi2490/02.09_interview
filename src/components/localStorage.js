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

function removeFavorite(id) {
    let fav = localStorage.getItem(FAVORITE);
    if (fav.startsWith(',')) {
        fav = fav.slice(1);
    }
    let tmp = fav.split(',');
    tmp = tmp.filter( film => film !== id );
    let str = tmp.join(',');
    localStorage.setItem(FAVORITE, str);
}


const actions = { initFavorite, addFavorite, getFavorite, removeFavorite };

export default actions;