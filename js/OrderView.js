import AbstractView from './AbstractView.js';
import { implementOrder } from './additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Заказ');
    }

    async getHtml() {
        let response = await fetch('views/order.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        implementOrder();
    }
}