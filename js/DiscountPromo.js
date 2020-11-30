import AbstractView from './AbstractView.js';
import {showPromo}  from './additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Промо');
    }

    async getHtml() {
        let response = await fetch('js/discounts_promo.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        showPromo(this.params);
    }
}