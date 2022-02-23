class HeaderBar extends HTMLElement {
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
          h1 {
            padding-top: 10px;
            padding-bottom: 20px;
            text-align: center;
            font-size: 40px;
            color: black;
            font-weight: bold;
          }
        
          p {
            text-align: center;
            font-size: 25px;
            padding-bottom: 10px;
            color: black;
            font-family: 'LilitaOne-Regular';
          }
          </style>
         <h1>ꦫꦄꦒꦄꦩ꧀​ꦏꦈꦭꦆꦤꦌꦂ​ꦢꦆ​ꦢꦈꦤꦆꦲꦄ</h1>
         <p>CULINARY DIVERSITY IN THE WORLD</p>`;
  }
}

customElements.define("header-bar", HeaderBar);
