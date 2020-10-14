class AppHeader extends HTMLElement {
    
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
                            .hero-text-box
                            {
                                position: absolute;
                                width: 1140px;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                color: #f7fff7;
                            }

                            .btn:link,
                            .btn:visited,
                            input[type=submit]
                            {
                               display: inline-block;
                                padding: 10px 30px;
                                font-weight: 300;
                                text-decoration: none;
                                border-radius: 200px;
                                transition: background-color 0.2s; color: 0.2s; border: 0.2s;
                            }

                            .btn-full:link,
                            .btn-full:visited,
                            input[type=submit]
                            {
                                background-color: #ff6b6b;
                                border: 1px solid #ff6b6b;
                                color: #fff;
                                margin-right: 15px;
                            }

                            .btn-ghost:link,
                            .btn-ghost:visited
                            {
                                border: 1px solid #ff6b6b;
                                color: #ff6b6b;
                            }

                            .btn:hover,
                            .btn:active,
                            input[type=submit]:hover,
                            input[type=submit]:active
                            {
                                background-color: #D72638;
                            }

                            .btn-full:hover,
                            .btn-full:active
                            {
                                border: 1px solid #D72638;
                            }

                            .btn-ghost:hover,
                            .btn-ghost:active
                            {
                                border: 1px solid #D72638;
                                color: #fff;
                            }

                            @media only screen and (max-width: 1200px) 
                            {
                                .hero-text-box 
                                {
                                    width: 100%;
                                    padding: 0 2%;
                                    margin-left : 25px;
                                }

                                h1
                                {
                                    font-size: 35px;
                                }

                                a
                                {
                                    font-size: 18px;
                                }

                            }

                            @media only screen and (max-width: 970px) 
                            {

                                h1
                                {
                                    font-size: 32px;
                                }

                                a
                                {
                                    font-size: 17px;
                                }

                            }

                            @media only screen and (max-width: 780px) 
                            {
                                .hero-text-box 
                                {
                                    width: 90%;
                                    padding: 0 2%;
                                    margin-left : 15px;
                                }

                                h1
                                {
                                    font-size: 29px;
                                }

                            }

                            @media only screen and (max-width: 730px) 
                            {
                                .hero-text-box 
                                {
                                    width: 90%;
                                    padding: 0 2%;
                                    margin-left : 12px;
                                }

                                h1
                                {
                                    font-size: 28px;
                                }

                                a
                                {
                                    font-size: 16px;
                                }

                            }

                            @media only screen and (max-width: 615px) 
                            {
                                .hero-text-box 
                                {
                                    width: 90%;
                                    padding: 0 2%;
                                    margin-left : 12px;
                                }

                                h1
                                {
                                    font-size: 25px;
                                }

                                a
                                {
                                    font-size: 15px;
                                }

                            }

                            @media only screen and (max-width: 552px) 
                            {
                                .hero-text-box 
                                {
                                    width: 85%;
                                    padding: 0 2%;
                                    margin-left : 12px;
                                }

                                h1
                                {
                                    font-size: 23px;
                                }

                            }

                            @media only screen and (max-width: 430px) 
                            {
                                .hero-text-box 
                                {
                                    width: 90%;
                                    padding: 0 2%;
                                    margin-left : 10px;
                                }

                                h1
                                {
                                    font-size: 21px;
                                }

                                a
                                {
                                    font-size: 14px;
                                }

                            }

                            @media only screen and (max-width: 350px) 
                            {
                                .hero-text-box 
                                {
                                    width: 80%;
                                    padding: 0 2%;
                                    margin-left : 9px;
                                }

                                h1
                                {
                                    font-size: 20px;
                                }

                                a
                                {
                                    font-size: 13px;
                                }

                            }
                            
                        </style>
        
                        <div class="hero-text-box">
                            <h1>Grandma's Recipe. <br>The most delicious foods recipe, now in your hands.</h1>
                            <a class="btn btn-full" href="#searching">Find Recipes Now</a>
                        </div>`;
   }
}
 
customElements.define("app-header", AppHeader);