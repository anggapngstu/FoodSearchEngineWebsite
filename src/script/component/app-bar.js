class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
         <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          }

          @font-face{
            font-family: 'LilitaOne-Regular';
            src: url('../src/assets/font/LilitaOne-Regular.ttf');
            src: url('../src/assets/font/LilitaOne-Regular.ttf') format('ttf'),
            url('../src/assets/font/LilitaOne-Regular.ttf') format('truetype');
          }

          :host {
            display: block;
            width: 100%;
            background-color: Navy;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }

          h2 {
            padding: 16px;
            font-family : LilitaOne-Regular;
          }

         </style>
         <h2>search engine how to cook the world's specialties</h2>`;
  }
}

customElements.define("app-bar", AppBar);
