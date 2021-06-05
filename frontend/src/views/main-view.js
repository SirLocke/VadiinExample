import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js';

class MainView extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%;" theme="test">
 <vaadin-horizontal-layout class="header" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 0; background-color: var(--lumo-contrast-10pct);"></vaadin-horizontal-layout>
 <vaadin-vertical-layout class="content" style="width: 90%; flex-grow: 1; flex-shrink: 1; flex-basis: auto; margin: var(--lumo-space-m); align-self: center; box-shadow: 0px 4px 48px rgba(28,55,90 ,0.16) ;">
  <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
   <div style="width: 100%; background-color: rgba(25, 59, 103, 0.05); flex-grow: 0; padding: var(--lumo-space-m);">
     Setup Wizard 
   </div>
  </vaadin-horizontal-layout>
  <img Source="theme://img/schmalz_logo.svg" src="schmalz_logo.svg" style="align-self: center;"> Div </img>
  <h2 style="align-self: center;">Heading 2 Herzlich Willkommmen beim Setup Wizard von J Schmalz!</h2>
  <p style="text-align: center; width: 50%; margin-left: auto; margin-right: auto;">Paragraph"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  <h3 style="align-self: center;">Viel Erfolg</h3>
  <div style="width: 100%; height: 100%;"></div>
  <vaadin-horizontal-layout theme="spacing" style="width: 100%; align-items: flex-end;">
   <div style="width: 100%; background-color: rgba(25, 59, 103, 0.05); flex-grow: 0; padding: var(--lumo-space-m)">
    <vaadin-progress-bar style="width: 50%; margin-left: auto; margin-right: auto;" max="6" value="0"></vaadin-progress-bar>
   </div>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
 <vaadin-horizontal-layout class="footer" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 0; background-color: var(--lumo-contrast-10pct);"></vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'main-view';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(MainView.is, MainView);
