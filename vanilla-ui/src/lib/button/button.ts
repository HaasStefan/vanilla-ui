import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Nullable } from 'vitest';
import { ButtonSeverity, IconPosition } from './button.model';
import { VuiSize } from '../shared/size.util';

@customElement('vui-button')
export class VuiButton extends LitElement {
  static override styles = css`
    .vui-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .vui-button-loading-spinner {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Your custom styles go here */
  `;

  @property() severity: ButtonSeverity = ButtonSeverity.DEFAULT;
  @property() size: VuiSize = VuiSize.MD;
  @property() label!: string;
  @property({ type: Boolean }) rounded!: boolean;
  @property({ type: Boolean }) loading!: boolean;
  @property({ attribute: 'loading-spinner' }) loadingSpinner: Nullable<unknown> = null;
  @property() icon?: unknown;
  @property({ attribute: 'icon-pos' }) iconPos?: IconPosition = IconPosition.LEFT;
  @property({ type: Boolean }) disabled!: boolean;

  override render() {
    const loadingTemplate = html`${
      this.loading
        ? html`
          <div class="vui-button-loading-spinner">${this.loadingSpinner}</div>`
        : ''
    }`;

    const iconTemplate = html`${
      this.icon && !this.loading
        ? html`
          <div class="vui-button-icon">${this.icon}</div>`
        : ''
    }
    `;

    const buttonClass = `vui-button vui-button-severity-${this.severity} vui-button-size-${this.size} ${this.rounded ? 'vui-button-rounded' : ''}`;

    return html`
      <button
        type="button"
        class="${buttonClass}"
        ?disabled=${this.disabled || this.loading}
      >
        ${
          this.iconPos === 'left'
            ? html`${loadingTemplate} ${iconTemplate}`
            : ''
        }
        <div class="vui-button-label">${this.label}</div>
        ${
          this.iconPos === 'right'
            ? html`${loadingTemplate} ${iconTemplate}`
            : ''
        }
      </button>
    `;
  }
}
