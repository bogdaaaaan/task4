import AbstractView from './AbstractView.js';
import {implementPromo} from '/js/additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Акции');
    }

    async getHtml() {
        let response = await fetch('js/views/discounts.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        implementPromo();
    }
}