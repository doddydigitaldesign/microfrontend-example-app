import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Standalone } from './standalone';

export class ReactAppTwoWebComponent extends HTMLElement {
    private readonly observer: MutationObserver;

    constructor() {
        super();
        this.observer = new MutationObserver(() => this.update());
        this.observer.observe(this, { attributes: true });
        // this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.mount();
    }

    private update() {
        this.unmount();
        this.mount();
    }

    private mount() {
        render(this.getComponent(), this);
    }

    private unmount() {
        unmountComponentAtNode(this);
    }

    private getComponent() {
        return <Standalone data-prop={this.getAttribute('data-prop')} />;
    }
}
