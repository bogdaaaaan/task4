const link = 'https://my-json-server.typicode.com/bogdaaaaan/db-pizza';
const link2 = 'https://my-json-server.typicode.com/bogdaaaaan/db-pizza2';
const link3 = 'https://my-json-server.typicode.com/bogdaaaaan/db-pizza3';
export const promisedSlider = getContent(`${link2}/slider`);
export const promisedPromo = getContent(`${link2}/promo`);
export const promisedCategory = getContent(`${link}/category`);
export const promisedPizza = getContent(`${link}/pizza`);
export const promisedIngridients = getContent(`${link3}/ingridients`);

function getContent(url) {
    return fetch(url).then(content => content.json());
}

