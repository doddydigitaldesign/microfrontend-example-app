import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Standalone } from './standalone';

export class ReactAppTwoWebComponent extends HTMLElement {
    private readonly observer: MutationObserver;
    private readonly channel: BroadcastChannel;

    constructor() {
        super();


        this.observer = new MutationObserver(() => this.update());
        this.observer.observe(this, { attributes: true });
        this.attachShadow({ mode: 'open' });

        this.channel = new BroadcastChannel('messages');
    }

    connectedCallback() {
        this.mount();
    }

    private update() {
        this.unmount();
        this.mount();
    }

    private mount() {
        render(this.getComponent(), this.shadowRoot);
    }

    private unmount() {
        unmountComponentAtNode(this);
    }

    private getComponent() {
        return (
            <div>
                <style>
                    {`
                    h1,h2,h3,h4,h5,h6 {
                        color: cornflowerblue;  
                    }
                    `}
                </style>
                <Standalone
                    data-prop={this.getAttribute('data-prop')}
                    channel={this.channel}
                />
            </div>
        );
    }
}
