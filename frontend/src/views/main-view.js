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
<vaadin-vertical-layout style="width: 100%; height: 100%;">
 <vaadin-horizontal-layout class="header" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 0; background-color: var(--lumo-contrast-10pct);"></vaadin-horizontal-layout>
 <vaadin-vertical-layout class="content" style="width: 90%; flex-grow: 1; flex-shrink: 1; flex-basis: auto; margin: var(--lumo-space-m); align-self: center; box-shadow: 0px 4px 48px rgba(28,55,90 ,0.16) ;">
  <vaadin-horizontal-layout theme="spacing" style="width: 100%;">
   <div style="width: 100%; background-color: rgba(25, 59, 103, 0.05); flex-grow: 0; padding: var(--lumo-space-m);">
    Setup Wizard
   </div>
  </vaadin-horizontal-layout>
  <div style="width: 100%; height: 100%;">
    Div 
  </div>
  <img Source="file://D:\Bilder\Walpaper\wolf_silhouette_art_138559_1920x1080.jpg" src="file://D:/Bilder/Walpaper/wolf_silhouette_art_138559_1920x1080.jpg">
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
