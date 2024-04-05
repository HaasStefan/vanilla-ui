import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('vui-button')
export class SimpleGreeting extends LitElement {
  static override styles = css`p {
    color: blue
  }`;

  @property() label!: string;
  @property() icon?: unknown;
  @property() iconPos?: 'left' | 'right' = 'left';
  @property() disabled = false;

  override render() {
    return html`
      <button
        type='button'
      >
        ${this.label}
      </button>
    `;
  }
}
