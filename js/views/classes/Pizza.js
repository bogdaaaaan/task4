import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Пицца');
    }

    async getHtml() {
        let response = await fetch('js/views/pizza.html');
        let content = await response.text();
        return content;
    }
}