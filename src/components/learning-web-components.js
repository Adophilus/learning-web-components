class WelcomeMessage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  async connectedCallback() {
    await this.fetchTemplate()
  }

  async fetchTemplate() {
    fetch('/components/learning-web-components.html')
      .then(res => res.text())
      .then(templateString => {
        const template = document.createElement(templateString)
        console.log(template)
        this.shadowRoot.appendChild(template.content.cloneNode(true))
      })
  }
}

window.customElements.define('welcome-message', WelcomeMessage)
