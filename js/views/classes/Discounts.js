import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Акции');
    }

    async getHtml() {
        let response = await fetch('js/views/discounts.html');
        let content = await response.text();
        return content;
    }
}