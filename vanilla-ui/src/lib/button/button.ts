import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Nullable } from 'vitest';

export type IconPosition =
  | 'left'
  | 'right';

@customElement('vui-button')
export class SimpleGreeting extends LitElement {
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
  `;

  @property() label!: string;
  @property({ type: Boolean }) loading: Nullable<boolean> = null;
  @property({ attribute: 'loading-spinner' }) loadingSpinner: Nullable<unknown> = null;
  @property() icon?: unknown;
  @property({ attribute: 'icon-pos' }) iconPos?: IconPosition = 'left';
  @property({ type: Boolean }) disabled = false;

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

    return html`
      <button
        type="button"
        class="vui-button"
        ?disabled=${this.disabled || this.loading}
      >
        ${loadingTemplate}

        ${iconTemplate}

        <div class="vui-button-label">${this.label}</div>
      </button>
    `;
  }
}
