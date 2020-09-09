// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector(".cards-container");

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then((res) =>{
        console.log(res);
        const bootstrap = res.data.articles.bootstrap;
        
        bootstrap.forEach(x =>{
           
        cards.appendChild(article(x.headline, x.authorPhoto, x.authorName));
            
        });
        return res;
    })
    .then((res)=>{
        const javascript = res.data.articles.javascript;
        
        javascript.forEach(x =>{
           
        cards.appendChild(article(x.headline, x.authorPhoto, x.authorName));
            
        });
        return res
    })
    .then((res)=>{
        const jquery = res.data.articles.jquery;
        
        jquery.forEach(x =>{
           
        cards.appendChild(article(x.headline, x.authorPhoto, x.authorName));
            
        });
        return res
    })
    .then((res)=>{
        const node = res.data.articles.node;
        
        node.forEach(x =>{
           
        cards.appendChild(article(x.headline, x.authorPhoto, x.authorName));
            
        });
        return res
    })
    .then((res)=>{
        const technology = res.data.articles.technology;
        
        technology.forEach(x =>{
           
        cards.appendChild(article(x.headline, x.authorPhoto, x.authorName));
            
        });
        return res
    })
    .catch((err) => {
        console.log('You hit an error: ', err);
    });

function article(headline, imgSrc, author){
    const cardDiv = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgContDiv = document.createElement("div");
    const image = document.createElement("img");
    const authorSpan = document.createElement("span");

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgContDiv.classList.add("img-container");
    image.src = imgSrc;
    headlineDiv.textContent = headline;
    authorSpan.textContent = `By ${author}`;

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContDiv);
    imgContDiv.appendChild(image);
    authorDiv.appendChild(authorSpan);

    return cardDiv;

}
