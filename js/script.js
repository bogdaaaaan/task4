import Drinks from './views/classes/Drinks.js'
import Home from './views/classes/Home.js'
import Pizza from './views/classes/Pizza.js'
import Discounts from './views/classes/Discounts.js'
import Slider from './slider.js';


const router = async () => {
    const routes = [
        { path: "#", view: Home },
        { path: "#pizza", view: Pizza },
        { path: "#drinks", view: Drinks },
        { path: "#discounts", view: Discounts }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.hash === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };

        if(location.hash !== "") {
            navigateTo("#")
        };
        
    };

    const view = new match.route.view();

    document.querySelector("#root").innerHTML = await view.getHtml();
    additionalHtml(match.route.path);
};

const navigateTo = url => {
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



const additionalHtml = path => {
    if(path === "#drinks") {

        document.getElementById('sort-button').addEventListener('click', () => {
            document.querySelector('.sort-list').classList.toggle('active-list');
        });

        document.getElementById('filter-button').addEventListener('click', () => {
            document.querySelector('.filter-list').classList.toggle('active-list');
        });

        
    } else if (path === "#") {
        const s = new Slider();
        s.implementScript();

        document.getElementById('sort-button').addEventListener('click', () => {
            document.querySelector('.sort-list').classList.toggle('active-list');
        });
    } else if (path === "#pizza") {
        document.getElementById('sort-button').addEventListener('click', () => {
            document.querySelector('.sort-list').classList.toggle('active-list');
        });
    }
}

// Side menu button
document.getElementById('side-menu-btn').addEventListener('click', ()=> {
    document.querySelector('.header__hamburger-menu').classList.toggle('open');
    document.querySelector('.side-menu').classList.toggle('open');
});

