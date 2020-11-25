import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Напитки');
    }

    async getHtml() {
        let response = await fetch('js/views/drinks.html');
        let content = await response.text();
        return content;
    }
}