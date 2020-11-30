import AbstractView from './AbstractView.js';
import {implementCart}  from './additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Корзина');
    }

    async getHtml() {
        let response = await fetch('js/cart.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        implementCart();
    }
}