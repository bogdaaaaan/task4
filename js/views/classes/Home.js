import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Главная страница');
    }

    async getHtml() {
        let response = await fetch('js/views/home.html');
        let content = await response.text();
        return content;
    }
}