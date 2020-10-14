class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
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
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-meal {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .meal-info {
                   padding: 24px;
               }

                h2,h3
                {
                    text-transform: uppercase;
                    letter-spacing: 1px;

                }

                h2
                {
                    font-size: 160%
                    word-spacing : 2px;
                    text-align: center;
                    margin-bottom: 10px;
                    margin-top : 10px;
                }

                h3
                {
                    font-size: 9s0%;
                    margin-bottom: 10px;
                    text-align: center;
                }

                h2:after
                {
                    display: block;
                    height: 2px;
                    background-color: #e67e22;
                    content: " ";
                    width: 100px;
                    margin: 0 auto;
                    margin-top: 10px;
                }

                .row
                {
                    max-width: 1140px;
                    margin: 0 auto;
                }

                .row .long-copy
                {
                    margin-bottom : 30px;
                    text-align : justify;
                }

                @media only screen and (max-width: 1100px) 
                {
                    h2
                    {
                        font-size: 140%;
                    }

                    h3
                    {
                        font-size: 100%;
                    }

                    .row .long-copy
                    {
                        font-size: 18px;
                    }
                }

                @media only screen and (max-width: 950px) 
                {
                    h2
                    {
                        font-size: 130%;
                    }

                    h3
                    {
                        font-size: 90%;
                    }

                    .row .long-copy
                    {
                        font-size: 17px;
                    }
                }

                @media only screen and (max-width: 800px) 
                {
                    h2
                    {
                        font-size: 120%;
                    }

                    h3
                    {
                        font-size: 80%;
                    }

                    .row .long-copy
                    {
                        font-size: 16px;
                    }
                }

                @media only screen and (max-width: 650px) 
                {
                    h2
                    {
                        font-size: 110%;
                    }
                }

                @media only screen and (max-width: 450px) 
                {
                    h2
                    {
                        font-size: 90%;
                    }

                    h3
                    {
                        font-size: 70%;
                    }

                    .row .long-copy
                    {
                        font-size: 15px;
                    }
                }

                @media only screen and (max-width: 390px) 
                {
                    h2
                    {
                        font-size: 90%;
                    }

                    h3
                    {
                        font-size: 60%;
                    }

                    .row .long-copy
                    {
                        font-size: 14px;
                    }
                }
            
                @media only screen and (max-width: 351px) 
                {
                    .row .long-copy
                    {
                        font-size: 13px;
                    }
                }


           </style>
           <div class="meal-info">
               <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Meal Art">
               <h2>${this._meal.strMeal}</h2>
               <h3>This is a ${this._meal.strArea} dish</h3>
               <h3>Dish Category: ${this._meal.strCategory}</h3>
               <div class="row">
                    <p class="long-copy"><strong><span>How to make:<span></strong><br> ${this._meal.strInstructions}</p>
               </div>
           </div>`;
    }
}

customElements.define("meal-item", MealItem);