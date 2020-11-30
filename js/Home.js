import AbstractView from './AbstractView.js';
import {implementSlider, fillPage} from './additional.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Главная страница');
    }

    async getHtml() {
        let response = await fetch('views/home.html');
        let content = await response.text();
        return content;
    }

    async additionalHtml() {
        implementSlider();
        fillPage();
    }
}