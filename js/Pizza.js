import AbstractView from './AbstractView.js';
import {fillPage}  from './additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Пицца');
    }

    async getHtml() {
        let response = await fetch('js/pizza.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
       fillPage();
    }
}