import AbstractView from './AbstractView.js';
import {fillPage} from '/js/additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Пицца');
    }

    async getHtml() {
        let response = await fetch('js/views/pizza.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
       fillPage();
    }
}