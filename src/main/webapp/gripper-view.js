import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-radio-button/src/vaadin-radio-button.js';

class GripperView extends PolymerElement {


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
  <h2 style="margin: var(--lumo-space-m);">Gripper auswählen</h2>
  <vaadin-horizontal-layout theme="spacing" style="align-self: center; flex-grow: 0; margin: var(--lumo-space-m); align-items: stretch; flex-direction: row; height: 100%; justify-content: space-around; width: 80%;">
   <vaadin-vertical-layout theme="spacing" style="margin: var(--lumo-space-m); width: 25%;">
    <img src="MaskGroup-1.png">
    <vaadin-radio-button>
     End Effectors VEE
    </vaadin-radio-button>
    <p>Erkennt man an der Vielzahl an Saugnäpfen</p>
   </vaadin-vertical-layout>
   <vaadin-vertical-layout theme="spacing" style="margin: var(--lumo-space-m); width: 25%;">
    <img src="MaskGroup-2.png">
    <vaadin-radio-button>
      SCG-HSS 
    </vaadin-radio-button>
    <p>Hat nur einen Saugnapf, meist für empfindliche Teile wie Platinen eingesetzt</p>
   </vaadin-vertical-layout>
   <vaadin-vertical-layout theme="spacing" style="margin: var(--lumo-space-m); width: 25%;">
    <img src="MaskGroup-3.png">
    <vaadin-radio-button>
      SBPG
    </vaadin-radio-button>
    <p>Removal from containers with a random or pre-sorted packing pattern </p>
   </vaadin-vertical-layout>
   <vaadin-vertical-layout theme="spacing" style="margin: var(--lumo-space-m); width: 25%;">
    <img src="/Mask-Group.png">
    <vaadin-radio-button>
     Area Gripping System FQE
    </vaadin-radio-button>
    <p style="width: 100%;">Paragraph Ideal for stationary handling tasks with collaborative robots</p>
   </vaadin-vertical-layout>
  </vaadin-horizontal-layout>
  <div style="width: 100%; height: 100%;"></div>
  <vaadin-progress-bar style="width: 50%; margin-left: auto; margin-right: auto; height: 10px;" max="6" value="1"></vaadin-progress-bar>
  <vaadin-tabs style="align-self: center; width: 50%;" orientation="horizontal" selected="0">
   <vaadin-tab style="width: 16.6%;">
     Gripper 
   </vaadin-tab>
   <vaadin-tab style="width: 16.6%;">
     Start 
   </vaadin-tab>
   <vaadin-tab style="width: 16.6%;">
     Objekt(e) 
   </vaadin-tab>
   <vaadin-tab style="width: 16.6%;">
     Ziel(e) 
   </vaadin-tab>
   <vaadin-tab style="width: 16.6%;">
     Muster 
   </vaadin-tab>
   <vaadin-tab style="width: 16.6%;">
     Ende 
   </vaadin-tab>
  </vaadin-tabs>
  <vaadin-horizontal-layout theme="spacing" style="width: 100%; align-items: flex-end;">
   <div style="width: 100%; background-color: rgba(25, 59, 103, 0.05); flex-grow: 0; padding: var(--lumo-space-m)">
    <vaadin-button style="color: #FF4238; padding: var(--lumo-space-xs); margin: var(--lumo-space-xs);" id="vaadinButton1">
     <iron-icon icon="lumo:angle-left" slot="prefix"></iron-icon>zurück 
    </vaadin-button>
    <vaadin-button style="float: right;" id="vaadinButton">
     <iron-icon r icon="lumo:angle-right" slot="suffix"></iron-icon>
     <a router-link href="gripper">weiter</a>
    </vaadin-button>
   </div>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
 <vaadin-horizontal-layout class="footer" style="width: 100%; flex-basis: var(--lumo-size-l); flex-shrink: 0; background-color: var(--lumo-contrast-10pct);"></vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'gripper-view';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(GripperView.is, GripperView);
