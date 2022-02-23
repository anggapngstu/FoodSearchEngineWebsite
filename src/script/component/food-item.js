class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set food(food) {
    this._food = food;
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
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                   
              }
                
                 .art-works-food {
                     width: 100%;
                     max-height: 300px;
                     object-fit: cover;
                     object-position: center;
                 }
                
                 .food-info {
                     padding: 24px;
                 }
                
                 .food-info > h2 {
                     font-weight: lighter;
                     font-family: LilitaOne-Regular;
                     
                 }
                
                 .food-info > p {
                     margin-top: 10px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     display: -webkit-box;
                     text-align : justify;
                     -webkit-box-orient: vertical;
                     -webkit-line-clamp: 10; /* number of lines to show */
                 }
                 
                 </style>
                 <img class="art-works-food" src="${this._food.strMealThumb}" alt="Art Works">
                 <div class="food-info">
                     <h2>Name   :${this._food.strMeal}</h2>
                     <h2>Country:${this._food.strArea}</h2>
                     <p></p>
                     <h2>Ingredients:</h2>
                     <p>${this._food.strIngredient1}</p>
                     <p>${this._food.strIngredient2}</p>
                     <p>${this._food.strIngredient3}</p>
                     <p>${this._food.strIngredient4}</p>
                     <p>${this._food.strIngredient5}</p>
                     <p>${this._food.strIngredient6}</p>
                     <p>${this._food.strIngredient7}</p>
                     <p>${this._food.strIngredient8}</p>
                     <p></p>
                     <h2>Dose:</h2>
                     <p>${this._food.strMeasure1}</p>
                     <p>${this._food.strMeasure2}</p>
                     <p>${this._food.strMeasure3}</p>
                     <p>${this._food.strMeasure4}</p>
                     <p>${this._food.strMeasure5}</p>
                     <p>${this._food.strMeasure6}</p>
                     <p>${this._food.strMeasure7}</p>
                     <p>${this._food.strMeasure8}</p>
                     <p></p>
                     <h2>Steps:</h2>
                     <p>${this._food.strInstructions}</p>
                 </div>`;
  }
}

customElements.define("food-item", FoodItem);
