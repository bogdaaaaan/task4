import './getJson.js';
import './additional.js';
import Drinks from './Drinks.js'
import Home from './Home.js'
import Pizza from './Pizza.js'
import Discounts from './Discounts.js'
import PizzaProduct from './PizzaProduct.js'
import DiscountPromo from './DiscountPromo.js'
import CartView from './CartView.js';
import OrderView from './OrderView.js';


const router = async () => {
    const routes = [
        { path: "#", view: Home },
        { path: "#pizza", view: Pizza },
        { path: "#pizza/:id", view: PizzaProduct },
        { path: "#drinks", view: Drinks },
        { path: "#discounts", view: Discounts },
        { path: "#discounts/:id", view: DiscountPromo },
        { path: "#cart", view: CartView },
        { path: "#order", view: OrderView }
    ];

    const potentialMatches = routes.map(route => {
        let url = "/" + location.href.split('#')[1];
        return {
            route: route,
            result: url.match(pathToRegex(route.path.replace('#', "/")))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
        window.history.replaceState(null, null, "#");
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#root").innerHTML = await view.getHtml();
    await view.additionalHtml();
    window.scroll({
        left: 0,
        top: 0, 
        behavior: 'smooth'
    });
};

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.replace('#', "/").matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

export const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        };
    });
    router();
});

// Side menu button
document.getElementById('side-menu-btn').addEventListener('click', ()=> {
    document.querySelector('.header__hamburger-menu').classList.toggle('open');
    document.querySelector('.side-menu').classList.toggle('open');
});
