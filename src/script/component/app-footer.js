class AppFooter extends HTMLElement {
    
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
    
   connectedCallback(){
       this.render();
   }
 
   render() {
       this.shadowDOM.innerHTML = `
            <style>
            footer 
                {
                   padding: 5px;
                   color: white;
                   background-color: #ff6b6b;
                   text-align: center;
                   font-weight: bold;
                }

                @media only screen and (max-width: 1100px) 
                {
                    footer
                    {
                        font-size : 18px;
                        padding : 3.5px;
                    }
                }

                @media only screen and (max-width: 1000px) 
                {
                    footer
                    {
                        font-size : 17px;
                        padding : 2.5px;
                    }
                }

                @media only screen and (max-width: 850px) 
                {
                    footer
                    {
                        font-size : 16px;
                        padding : 2px;
                    }
                }

                @media only screen and (max-width: 671px) 
                {
                    footer
                    {
                        font-size : 15px;
                        padding : 1px;
                    }
                }

                @media only screen and (max-width: 440px) 
                {
                    footer
                    {
                        font-size : 14px;
                        padding : 1px;
                    }
                }

                @media only screen and (max-width: 390px) 
                {
                    footer
                    {
                        font-size : 13px;
                        padding : 0.5px;
                    }
                }

                @media only screen and (max-width: 351px) 
                {
                    footer
                    {
                        font-size : 12px;
                        padding : 0.5px;
                    }
                }

            </style>
            <footer>    
                <p>Belajar Fundamental Front-End Web Development <br> &#169; 2020, Submisi Bryan Yehuda M</p>
            <footer>`;
   }
}
 
customElements.define("app-footer", AppFooter);