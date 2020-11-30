import AbstractView from './AbstractView.js';
import {showCard}  from './additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Пицца');
    }

    async getHtml() {
        let response = await fetch('js/pizza_product.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        showCard(this.params);
    }
}